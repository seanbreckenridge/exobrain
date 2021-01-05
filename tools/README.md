---
Title: Tools, or how I do everything
---

This is an extension of my [`dotfiles`](https://github.com/seanbreckenridge/dotfiles)

This is an ever evolving list of tools and scripts I use and recommend, or combinations of tools I use to optimize my workflow.

Most of these are command line based. On a regular day, the only GUI tools I use are my browser and my email client.

- Shells
  - [`zsh`](http://zsh.sourceforge.net/) - for the [`fish`](https://fishshell.com/)-like [highlighting and auto completion](https://github.com/marlonrichert/zsh-autocomplete), while still being _somewhat_ posix compliant. Manually configuring everything makes this much faster than the monstrous `oh-my-zsh`
  - bash/[`dash`](https://wiki.archlinux.org/index.php/Dash) - for shell scripting. My `zsh` setup is also much more dependent on external plugins, so I don't use that on servers, I just stick to bash there. My [`bootstrap`](https://github.com/seanbreckenridge/bootstrap/) script sets up new bash servers for me nicely, see [this post](/post/server_setup) for more info
- Terminal
  - [`alacritty`](https://github.com/alacritty/alacritty), with pretty basic defaults
  - I also use [`tmux`](https://github.com/tmux/tmux) to handle terminal sessions, use [`tmuxp`](https://github.com/tmux-python/tmuxp/) to handle [common background tasks](https://sean.fish/d/config.yaml?dark)
- OS-stuff
  - Linux Distribution (though I'm forced to use Mac for work sometimes)
    - [Arch](https://wiki.archlinux.org/index.php/)
  - Window Managers
    - `i3-gaps` - am used to it at this point, and I'm a big fan of the manual tiling, especially for multiple monitors. `qtile` had some graphical issues for bad GUI apps, and I don't feel like messing up my `haskell` installation for `xmonad`
  - MacOS, I use [`amethyst`](https://github.com/ianyh/Amethyst) to tile windows, and [`skhd`](https://github.com/koekeishiya/skhd) as a hotkey daemon. My dotfiles are cross-platform, lots of scripts in [`cross-platform`](https://github.com/seanbreckenridge/dotfiles/tree/master/.local/scripts/cross-platform) that handle switching on the OS to call out to platform-specific behavior (sending notifications, clipboard management, asking for user input)
  - [`i3lock`](https://i3wm.org/i3lock/) for screen lock; [daemon process](https://sean.fish/d/lock-screen?dark) caches pixelated version of screen to speed up start time. [Corresponding service file](https://sean.fish/d/lockscreen@.service?dark) to lock my screen whenever my laptop suspends
  - [`rofi`](https://github.com/davatorium/rofi) for launching applications and switching windows
  - [`dunst`](https://dunst-project.org/) for notifications, pretty normal configuration
  - [`lightdm`](https://wiki.archlinux.org/index.php/LightDM) as display manager, just so I don't have to fiddle with xprofile
- Editors
  - nvim (primarily)
  - (doom) emacs
- Browsers
  - [`firefox-developer-edition`](https://www.mozilla.org/en-US/firefox/developer/), with extensions:
    - [`vimium-ff`](https://addons.mozilla.org/en-US/firefox/addon/vimium-ff/). Learning vimium has virtually killed the mouse for me. Especially the `f` binding, which highlights all clickable items and lets me click something with a keybind. I now sit feet away from my laptop with mechanical keyboard in hand, reaching over only for horrible sites which don't comply to the HTML standard (looking at you, clicking the `next episode` button on `Netflix`)
    - [`RES`](https://addons.mozilla.org/en-US/firefox/addon/reddit-enhancement-suite/), to make reddit manageable, though I don't go to reddit much these days
    - [Violentmonkey](https://addons.mozilla.org/en-US/firefox/addon/violentmonkey/) so I can add bits of JS to sites I want to fix
    - [Refined Github](https://addons.mozilla.org/en-US/firefox/addon/refined-github-/) for general Github improvements
    - [Stylus](https://addons.mozilla.org/en-US/firefox/addon/styl-us/), so I can dark mode common websites
    - [Dark Reader](https://addons.mozilla.org/en-US/firefox/addon/darkreader), so I can dark mode every website I visit. Does have considerable overhead, so I prefer finding CSS through stylus for websites I visit often
    - [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) to block ads
  - I use [`lynx`](https://www.lynxproject.org/) to do quick `duckduckgo` searches [without leaving the terminal](https://sean.fish/d/duck?dark)
- I use [`newsboat`](https://newsboat.org/) RSS for youtube/news/blogs. I have a [script](https://sean.fish/d/youtube-user-id?dark) to grab a youtube users RSS feed, since youtube doesn't list that publicly. [`linkhandler`](https://sean.fish/d/linkhandler?dark) lets me open youtube videos from `newsboat` using [`mpvf`](https://github.com/seanbreckenridge/mpvf/) instead of visiting youtube in the browser
- For system backups, I use [`a script`](https://github.com/seanbreckenridge/raspi-backup) which `rsync`'s a bunch of directories to my raspberry pi
- to-do list - [`todotxt`](http://todotxt.org/) for todos, with a [rofi interface](https://sean.fish/d/todo-prompt?dark) as GUI, and [TUI](https://gitlab.com/seanbreckenridge/full_todotxt) for adding todos. The TUI I wrote forces me to specify a `deadline` for each todo, which I then get notified by [this](https://github.com/seanbreckenridge/todotxt_deadline_notify), which runs on my server
- [`calcurse`](https://github.com/lfos/calcurse) as a calendar, with my [`calcurse-load`](https://github.com/seanbreckenridge/calcurse-load) hooks to add Google Calendar and `todo.txt` to calcurse automatically
- a heavily customized [`ranger`](https://github.com/ranger/ranger) as my file manager. See [`rifle.conf`](https://sean.fish/d/rifle.conf?dark) (file handler) and [`scope.sh`](https://sean.fish/d/scope.sh?dark) (previewer)
- [`yadm`](https://yadm.io) to manage dotfiles. Once I have a terminal running, my [`bootstrap`](https://sean.fish/d/bootstrap?dark) script sets up my system entirely
- For basic image cropping, I use [`pinta`](https://www.pinta-project.com/). For general image manipulation tasks I create lots of small [`imagemagick`](https://imagemagick.org/index.php) scripts to do random resizes/converts. I have a larger script to [convert videos to gifs](https://sean.fish/d/gifme?dark), and use [`gifsicle`](https://github.com/kohler/gifsicle) for manipulating gifs
- Lots of small [`ffmpeg`](https://ffmpeg.org/) scripts to convert between video formats. For trimming video, I use an [edited version](https://sean.fish/d/slicing.lua?dark) of [this](https://github.com/Kagami/mpv_slicing) mpv plugin
- For previewing markdown/latex while I'm editing it, I have my own [`compile`](https://sean.fish/d/compile?dark) and [`live-render`](https://sean.fish/d/live-render?dark) scripts
- Use the `dict://` protocol with `curl` at `dict.org` as a dictionary with [this](https://sean.fish/d/dict?dark). [`moby`](https://github.com/words/moby) as a thesaurus
- On top of all the [git aliases](https://sean.fish/d/git_aliases?dark), one of my scripts I use most commonly are my [`giturl`](https://sean.fish/d/giturl?dark)/[`gitopen`](https://sean.fish/d/gitopen?dark) scripts, which will open the current git directory I'm in in my browser
- [`ix`](https://sean.fish/d/ix?dark) to create pastebin links from the command line
- To host files publicly and mirror video/audio, I use my [`remsync`](https://github.com/seanbreckenridge/vps/blob/master/remsync) and [`mediaproxy`](https://github.com/seanbreckenridge/vps/blob/master/mediaproxy) scripts. [`croc`](https://github.com/schollz/croc) is nice, but that assumes the other person has terminal literacy
- the [`mvlast`](https://sean.fish/d/mvlast?dark)/[`mvlastpic`](https://sean.fish/d/mvlastpic?dark)/[`lastdown`](https://sean.fish/d/lastdown?dark) collection of scripts, which lets me quickly move items from my Downloads/Screenshots to my current folder. Was taken from an <https://rwx.gg> stream; very basic but incredibly useful
- [`vipe`](https://linux.die.net/man/1/vipe), to quickly edit my clipboard in a vim buffer
- `curl "https://cheat.sh/$*"`, to access quick cheatsheets for unix tools
- [`dragon`](https://github.com/mwh/dragon), to be able to dragon and drop items from/to the terminal. Have my [`dragon-sink`](https://sean.fish/d/dragon-sink?dark) script, which accepts and `cp`/`mv`'s files from applications, and bindings in `ranger` to drag files into my browser. Also use [`draglastpic`](https://sean.fish/d/draglastpic) very often, which lets me drag the latest screenshot to some application
- [`ldm`](https://github.com/LemonBoy/ldm), to do basic drive mounting for external drives/USBs
- [my own password generator](https://github.com/seanbreckenridge/genpasswd)
- A bash script ([`bgproc`](https://github.com/seanbreckenridge/bgproc)) with an infinite loop which runs in the background instead of `cron` (uses my [`evry`](https://github.com/seanbreckenridge/evry) tool to schedule tasks)
- my `bash` [terminal playlist manager](https://github.com/seanbreckenridge/plaintext-playlist) using `fzf`/`mpv` to store playlists for local music in local text files
- my own [url shortener](https://github.com/seanbreckenridge/no-db-static-shorturl/) with [this script](https://github.com/seanbreckenridge/vps/blob/master/shorten)
- [`imgur-uploader`](https://pypi.org/project/imgur-uploader/) to quickly upload images online, with a [script](https://sean.fish/d/screenshot-to-imgur?dark) to upload my most recent screenshot to imgur
- `mpv`/`chatterino` to watch twitch, see [here](/post/how_i/watch_twitch/)
- [`fzf`](https://github.com/junegunn/fzf) everywhere, to fuzzy match in shell pipelines
- [`youtube-dl`](https://youtube-dl.org/) to download video/audio from hundreds of websites
- my `cat` is aliased to [`bat`](https://github.com/sharkdp/bat), a fancy cat clone which highlights text based on extension/mimetype.

---

### Other CLI Tools I use less often

- [`boxes`](https://boxes.thomasjensen.com/) to print fancy boxes in the terminal
- [`chafa`](https://github.com/hpjansson/chafa/) to print gifs in terminal
- [`datamash`](https://www.gnu.org/software/datamash/) to perform basic statistics on text files
- [`dex`](https://github.com/jceb/dex) to open `.desktop` files
- [`dust`](https://github.com/bootandy/dust); a fancy du clone
- [`entr`](https://eradman.com/entrproject/) for lots of small build scripts
- [`fd`](https://github.com/sharkdp/fd); a fancy find clone
- [`figlet`](http://www.figlet.org/) to print large letters
- [`glow`](https://github.com/charmbracelet/glow) to render markdown in the terminal
- [`hyperfine`](https://github.com/sharkdp/hyperfine) to do benchmarks
- [`imgur-uploader`](https://pypi.org/project/imgur-uploader/) to push images to imgur
- [`jpegtran`](http://jpegclub.org/jpegtran/) to compress JPEG files
- [`jq`](https://stedolan.github.io/jq/)/[`gron`](https://github.com/tomnomnom/gron) to process json streams
- [`linkcheck`](https://github.com/filiph/linkcheck) to check for broken links on websites
- [`lorem`](https://github.com/jamen/lorem) to create a bunch of lorem-ipsum
- [`misspell`](https://github.com/client9/misspell) corrects commonly misspelled words; my [`misspell-context`](https://sean.fish/d/misspell-context?dark) script to give mistakes in context
- [`ncdu`](https://dev.yorhel.nl/ncdu) to preview disk space interactively
- [`oh-my-stars`](https://github.com/wolfg1969/oh-my-stars) to search github stars offline
- [`optipng`](http://optipng.sourceforge.net/) to compress PNG files
- [`pastel`](https://github.com/sharkdp/pastel) to generate/pick color schemes/hex codes from the terminal
- [`pup`](https://github.com/ericchiang/pup) to parse HTML on the command line
- [`qr`](https://sean.fish/d/qr?dark) ([`qrencode`](https://fukuchi.org/works/qrencode/)), to create QR images from command line
- [`qrc`](https://github.com/fumiyas/qrc) to create QR codes in the terminal
- [`readability`](https://gitlab.com/gardenappl/readability-cli); cli tool for Mozilla's readability library, for parsing contents out of HTML
- [`screenkey`](https://gitlab.com/screenkey/screenkey) when recording demonstrations to display keys
- [`shellcheck`](https://github.com/koalaman/shellcheck) to check shell scripts for syntax errors
- [`speedtest-cli`](https://github.com/sivel/speedtest-cli) to test internet bandwidth
- [`sqleton`](https://github.com/inukshuk/sqleton) to visualize sqlite databases
- [`sxiv`](https://github.com/muennich/sxiv) as an image viewer for more complicated/macro-like tasks
- [`termdown`](https://github.com/trehn/termdown) to countdown in the terminal
- [`toilet`](https://github.com/cacalabs/toilet) is another implementation of figlet, gives fancy colors in the terminal
- [`up`](https://github.com/akavel/up) - to interactively explore/pipe text data. Especially useful when doing data wrangling, like when using tools like `jq`/`grep`/`cut` to extract some information from a data source
- [`whiptail`](https://en.wikibooks.org/wiki/Bash_Shell_Scripting/Whiptail) (libnewt) for fancy dialog prompts in scripts
- [`wuzz`](https://github.com/asciimoo/wuzz), a postman-like CLI application

---

### Other GUI Applications I use less often

- [`robomongo`](https://robomongo.org/) to explore mongoDB databases
- [`sqlitebrowser`](https://sqlitebrowser.org/) to explore sqlite databases
- [`simplescreenrecorder`](https://github.com/MaartenBaert/ssr) to do simple screen recordings; I use this to make demonstration gifs
