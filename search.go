package main

// searches my exobrain for text or links
// and either:
//	- opens the line in my editor
//	- prints the corresponding link on my website
//
// this is wrapped by the ./exosearch
// script, which copies the URL to my clipboard
// and opens it in my browser

// third party deps:
// run 'go get "github.com/mvdan/xurls"'
// install fzf (the binary)
// set the EDITOR variable to your editor (mine is nvim)

import (
	"flag"
	"fmt"
	"io"
	"io/ioutil"
	"log"
	"os"
	"os/exec"
	"path"
	"path/filepath"
	"strconv"
	"strings"

	"github.com/mvdan/xurls"
)

type flags struct {
	printUrl    bool
	searchLinks bool
	location    string
	baseurl     string
}

func parseFlags() *flags {
	printUrl := flag.Bool("url", false, "Print the URL instead of opening the file")
	searchLinks := flag.Bool("links", false, "Search links instead of text")
	// just use my default location
	exoLoc := flag.String("exobrain-dir", path.Join(os.Getenv("HOME"), "Repos", "exobrain"), "root exobrain directory")
	exoBase := flag.String("exobrain-url", "https://exobrain.sean.fish", "root exobrain URL")
	flag.Usage = func() {
		fmt.Fprintf(os.Stderr, "Search my exobrain for something!\nBy default, This searches text and opens the chosen line in your editor.\n")
		flag.PrintDefaults()
	}
	flag.Parse()
	if _, err := os.Stat(*exoLoc); os.IsNotExist(err) {
		log.Fatal(err)
		os.Exit(1)
	}
	return &flags{
		printUrl:    *printUrl,
		searchLinks: *searchLinks,
		location:    *exoLoc,
		baseurl:     *exoBase,
	}
}

// https://junegunn.kr/2016/02/using-fzf-in-your-program
// run fzf with input from 'in'
func fzf(input func(in io.WriteCloser)) string {
	shell := os.Getenv("SHELL")
	if len(shell) == 0 {
		shell = "sh"
	}
	// disable multi
	cmd := exec.Command(shell, "-c", "fzf +m")
	cmd.Stderr = os.Stderr
	in, _ := cmd.StdinPipe()
	go func() {
		input(in)
		in.Close()
	}()
	result, _ := cmd.Output()
	return strings.Trim(string(result), "\n")
}

// read a file, write each line 'relpath:line no:contents/url' to the fzf buffer
func consumeFile(fpath string, userFlags *flags, fzfBuf io.WriteCloser) error {
	relpath := strings.TrimPrefix(fpath, userFlags.location)

	// read file contents
	file, err := os.Open(fpath)
	if err != nil {
		return err
	}
	defer file.Close()

	byteVal, err := ioutil.ReadAll(file)
	if err != nil {
		return err
	}
	fileContents := string(byteVal)
	fileLines := strings.Split(fileContents, "\n")

	if userFlags.searchLinks {
		// extract links and write to fzfBuf
		r := xurls.Relaxed()
		for lineNo, line := range fileLines {
			for _, url := range r.FindAllString(line, -1) {
				fmt.Fprintf(fzfBuf, "%s:%d:%s\n", relpath, lineNo, url)
			}
		}
	} else {
		// use each line and fzf against that
		for lineNo, line := range fileLines {
			// ignore empty lines, frontmatter, and code block lines
			sLine := strings.TrimSpace(line)
			if sLine == "" || strings.HasPrefix(sLine, "```") || strings.HasPrefix(sLine, "---") {
				continue
			}
			fmt.Fprintf(fzfBuf, "%s:%d:%s\n", relpath, lineNo, line)
		}
	}
	return nil
}

func openLocalFile(fpath string, lineNumber string, userFlags *flags) error {
	fullPath := path.Join(userFlags.location, fpath)
	editor := os.Getenv("EDITOR")
	if editor == "" {
		editor = "vim" // probably okay to default to this
	}
	var cmd *exec.Cmd

	// if vim based, use the +linenumber flag
	if editor == "nvim" || editor == "vim" || editor == "editor" { // (my editor is literally called editor, a wrapper for nvim)
		lineNum, err := strconv.Atoi(lineNumber)
		if err != nil {
			lineNum = 1
		} else {
			lineNum += 1 // vim is not zero indexed
		}
		cmd = exec.Command(editor, fmt.Sprintf("+%d", lineNum), fullPath)
	} else {
		cmd = exec.Command(editor, fullPath)
	}
	cmd.Stdin = os.Stdin
	cmd.Stdout = os.Stdout
	err := cmd.Run()
	if err != nil {
		return err
	}
	return nil
}

func main() {
	// parse user input
	userFlags := parseFlags()

	// loop over files and send input to fzf
	chosen := fzf(func(in io.WriteCloser) {
		err := filepath.Walk(userFlags.location,
			func(fpath string, info os.FileInfo, err error) error {
				if err != nil {
					return err
				}
				// ignore non-markdown files
				if !strings.HasSuffix(fpath, ".md") {
					return nil
				}
				// send lines to the fzf buffer, as they get parsed
				err = consumeFile(fpath, userFlags, in)
				if err != nil {
					return err
				}
				return nil
			})
		if err != nil {
			log.Fatal(err)
		}
	})

	// if the user chose something
	if chosen != "" {

		// extract info from the chosen fzf line
		fields := strings.Split(chosen, ":")
		if len(fields) < 2 {
			log.Fatalf("Couldn't extract filepath and line number from line: %s", chosen)
		}
		chosenFile := fields[0]
		lineNo := fields[1]
		// rest := strings.Join(fields[2:], ":")

		if userFlags.printUrl {
			// get directory, exobrain automatically converts README.md to index.html, which is
			// served by the web server
			fmt.Printf("%s%s\n", userFlags.baseurl, filepath.Dir(chosenFile))
		} else {
			err := openLocalFile(chosenFile, lineNo, userFlags)
			if err != nil {
				log.Fatal(err)
			}
		}
	}
}
