// Reads the meta.json file for each file,
// validating the parsed frontmatter

package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
	"path/filepath"
	"strings"
)

type FrontMatter struct {
	Title string `json:"Title"`
	Date  string `json:"Date"`
}

// read JSON info from the file
func parseJson(metafile string) (*FrontMatter, error) {
	jsonFile, err := os.Open(metafile)
	if err != nil {
		return nil, err
	}
	defer jsonFile.Close()
	byteValue, err := ioutil.ReadAll(jsonFile)
	if err != nil {
		return nil, err
	}
	var data FrontMatter
	json.Unmarshal(byteValue, &data)
	return &data, nil
}

func main() {
	ret := 0
	err := filepath.Walk(".",
		func(path string, info os.FileInfo, err error) error {
			if err != nil {
				return err
			}
			// if full path is ./meta.json (for the home README), or this is the feed/sitemap, ignore this
			if path == "meta.json" || strings.HasPrefix(path, "feed/") || strings.HasPrefix(path, "sitemap/") {
				return nil
			}
			// else if we're looking at a meta.json, do some checks
			if info.Name() == "meta.json" {
				// read JSON file
				data, err := parseJson(path)
				if err != nil {
					return err
				}
				dir := strings.TrimRight(path, "meta.json")
				title := strings.Trim(data.Title, " ")
				if title == "" {
					fmt.Printf("'%s' doesn't have a 'Title'\n", dir)
					ret = 1
				}
				// check for blog metadata
				if strings.HasPrefix(path, "post/") {
					if strings.Trim(data.Date, " ") == "" {
						fmt.Printf("'%s' should have a 'Date', but it is empty.\n", dir)
						ret = 1
					}
				}
			}
			return nil
		})
	if err != nil {
		panic(err)
	}
	os.Exit(ret)
}
