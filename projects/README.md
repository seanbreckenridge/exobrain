---
Title: Programming Projects
---

This is kept up to date by some code [here](https://github.com/seanbreckenridge/projects)

### exobrain

[GitHub](https://github.com/seanbreckenridge/exobrain) | [GitLab](https://gitlab.com/seanbreckenridge/exobrain) | HTML/Bash

external brain -- uses [`pandoc`](https://pandoc.org/) to generate my blog/brain dump. See [here](https://exobrain.sean.fish/) for more info.

### ffexport

[GitHub](https://github.com/seanbreckenridge/ffexport) | [GitLab](https://gitlab.com/seanbreckenridge/ffexport) | [PyPi](https://pypi.org/project/ffexport/) | Python

export and interface with firefox history/visits and site metadata. Ensures I don't ever lose any of my browsing history, and lets me do larger analysis on my behaviours, though [`HPI`](https://github.com/seanbreckenridge/HPI).

### autotui

[GitHub](https://github.com/seanbreckenridge/autotui) | [GitLab](https://gitlab.com/seanbreckenridge/autotui) | [PyPi](https://pypi.org/project/autotui/) | Python

helpers to prompt, validate, and persist python objects to and from disk using type hints

### glue

[GitHub](https://github.com/seanbreckenridge/glue) | [GitLab](https://gitlab.com/seanbreckenridge/glue) | Elixir/TypeScript

Used to glue all of my web applications together. Simulates an old GUI interface, with desktop icons and draggable windows. Located at [sean.fish](https://sean.fish/).

### HPI

[GitHub](https://github.com/seanbreckenridge/HPI) | Python

Human Programming Interface. A way to unify, access and interact with all my personal data. It hides the [gory details](https://beepb00p.xyz/sad-infra.html#exports_are_hard) of locating data, parsing, error handling and caching. You simply 'import' your data and get to work with familiar Python types and data structures.

### no-db-static-shorturl

[GitHub](https://github.com/seanbreckenridge/no-db-static-shorturl) | [GitLab](https://gitlab.com/seanbreckenridge/no-db-static-shorturl) | Go

File based single-binary URL shortener server. Has no dependencies; doesn't require you to setup a database.

### plaintext-playlist

[GitHub](https://github.com/seanbreckenridge/plaintext-playlist) | [GitLab](https://gitlab.com/seanbreckenridge/plaintext-playlist) | Bash

Interactive terminal playlist manager, storing contents in readable text files. Was my first attempt at creating a relatively large bash application. Seems that most people tend to use spotify/apple music nowadays, but I still like having music locally. This lets me manage playlists locally without having to use one of the bulky GUI applications.

### bgproc

[GitHub](https://github.com/seanbreckenridge/bgproc) | [GitLab](https://gitlab.com/seanbreckenridge/bgproc) | Shell

bash loop to run tasks in the background. I use this instead of anacron/cron. uses a lockfile to make sure duplicate processes aren't running, and [`evry`](https://github.com/seanbreckenridge/evry) to schedule tasks periodically.

### raspi-backup

[GitHub](https://github.com/seanbreckenridge/raspi-backup) | [GitLab](https://gitlab.com/seanbreckenridge/raspi-backup) | Shell

script to periodically back up my machine to my raspberry pi. Is pretty minimal, just uses headless raspbian with an external 4TB that gets mounted on boot.

### mpvf

[GitHub](https://github.com/seanbreckenridge/mpvf) | [GitLab](https://gitlab.com/seanbreckenridge/mpvf) | Shell

Interface to select `youtube-dl` format for streaming videos with `mpv`

### subpath-serve

[GitHub](https://github.com/seanbreckenridge/subpath-serve) | [GitLab](https://gitlab.com/seanbreckenridge/subpath-serve) | Go

Serves text files from a directory by matching subpaths. I use this to serve my dotfiles [here](https://sean.fish/d/?dark). It also allows me to quickly send someone one of my scripts/configuration files from my dotfiles using [this script](https://sean.fish/d/give)

### xkcd-favorites

[GitHub](https://github.com/seanbreckenridge/xkcd-favorites) | [GitLab](https://gitlab.com/seanbreckenridge/xkcd-favorites) | HTML

A list of my favorite [xkcd](https://xkcd.com/)'s. Was initially rendered client-side with some JS, but I now use a [bash script](https://github.com/seanbreckenridge/xkcd-favorites/blob/master/ssg) to convert it to a static site. Hosted [here](https://sean.fish/xkcd/)

### evry

[GitHub](https://github.com/seanbreckenridge/evry) | [GitLab](https://gitlab.com/seanbreckenridge/evry) | [crates.io](https://crates.io/crates/evry) | Rust

A shell-script-centric task scheduler; uses exit codes to determine control flow.

### dotfiles

[GitHub](https://github.com/seanbreckenridge/dotfiles) | [GitLab](https://gitlab.com/seanbreckenridge/dotfiles) | Shell

My dotfiles; using [`yadm`](https://yadm.io/). Includes lots of my scripts, and my configuration files for everything. See [here](https://sean.fish/d/?dark) for an index.

Works on both Mac/Linux(Arch)

### ipgeocache

[GitHub](https://github.com/seanbreckenridge/ipgeocache) | [GitLab](https://gitlab.com/seanbreckenridge/ipgeocache) | [PyPi](https://pypi.org/project/ipgeocache/) | Python

A small cache layer for IP geolocation info

### url_metadata

[GitHub](https://github.com/seanbreckenridge/url_metadata) | [GitLab](https://gitlab.com/seanbreckenridge/url_metadata) | [PyPi](https://pypi.org/project/url_metadata/) | Python

A cache which saves URL metadata and summarizes content. Acts as an abstraction layer for fetching youtube subtitles, a summary of the HTML, opengraph information, links to images/videos.

### mpv-sockets

[GitHub](https://github.com/seanbreckenridge/mpv-sockets) | [GitLab](https://gitlab.com/seanbreckenridge/mpv-sockets) | Shell/Python

A collection of scripts to allow flexible and easier interaction with mpv sockets. Also contains a daemon, which connects to any active mpv instances, collecting metadata so I have a history of what movies/music I'm watching.

### aw-watcher-window

[GitHub](https://github.com/seanbreckenridge/aw-watcher-window) | Python

Cross-platform window watcher. This is a daemon that sits in the background, and logs what window I'm currently using, and for how long. Forked from ActivityWatch to log to a file instead

### ttt

[GitHub](https://github.com/seanbreckenridge/ttt) | [GitLab](https://gitlab.com/seanbreckenridge/ttt) | Go

Logs metadata for shell commands; an extension to my shell history.

### havecmd

[GitHub](https://github.com/seanbreckenridge/havecmd) | [GitLab](https://gitlab.com/seanbreckenridge/havecmd) | Shell

A template for my bash scripts, to provide a nicer interface to check for the presence of external commands on the users `$PATH`

### mint

[GitHub](https://github.com/seanbreckenridge/mint) | [GitLab](https://gitlab.com/seanbreckenridge/mint) | Python/Shell

Wrapper script/code to interact with mintable; to keep track of my accounts/transactions and create a personal budget.

### calories-fzf

[GitHub](https://github.com/seanbreckenridge/calories-fzf) | [GitLab](https://gitlab.com/seanbreckenridge/calories-fzf) | Shell

A fzf interface to [calories](https://github.com/zupzup/calories), to add something you've eaten in the past again.

### mal-unapproved

[GitHub](https://github.com/seanbreckenridge/mal-unapproved) | [GitLab](https://gitlab.com/seanbreckenridge/mal-unapproved) | Ruby

website that displays unapproved MAL (MyAnimeList) entries. MAL doesn't provide this functionality on their website, so its not easy to know if you're submitting a duplicate entry to the database.

### discord-countdown-bot

[GitHub](https://github.com/seanbreckenridge/discord-countdown-bot) | [GitLab](https://gitlab.com/seanbreckenridge/discord-countdown-bot) | Python

Discord bot to use for countdowns. I use this as an alternative to [`syncplay`](https://syncplay.pl/) -- to make sure everyone in a discord channel are all hitting play at the same time when watching movies/TV shows together.

### pushshift_comment_export

[GitHub](https://github.com/seanbreckenridge/pushshift_comment_export) | [GitLab](https://gitlab.com/seanbreckenridge/pushshift_comment_export) | [PyPi](https://pypi.org/project/pushshift-comment-export/) | Python

Exports all accessible reddit comments for an account using pushshift.

### pmark

[GitHub](https://github.com/seanbreckenridge/pmark) | [GitLab](https://gitlab.com/seanbreckenridge/pmark) | Perl

A hacky, markdown pre-processor. Uses code blocks to generate markdown, from within the markdown itself.

### tts

[GitHub](https://github.com/seanbreckenridge/tts) | [GitLab](https://gitlab.com/seanbreckenridge/tts) | Shell

CLI tool to convert text to speech using the StreamLabs API

### mal-id-cache

[GitHub](https://github.com/seanbreckenridge/mal-id-cache) | Python

An cache of MAL IDs updated whenever something is added to the database. See [here](https://github.com/seanbreckenridge/mal-id-cache#raison-d%C3%AAtre) for more info.

### lolexport

[GitHub](https://github.com/seanbreckenridge/lolexport) | [GitLab](https://gitlab.com/seanbreckenridge/lolexport) | Python

Exports League of Legends Match History metadata using the RiotGames API. I don't play league of legends that often anymore, this is to export my entire match history so I can do some analysis as part of [`HPI`](https://github.com/seanbreckenridge/HPI).


### calcurse-load

[GitHub](https://github.com/seanbreckenridge/calcurse-load) | [GitLab](https://gitlab.com/seanbreckenridge/calcurse-load) | Python

Personal hooks/scripts for calcurse. Sources events for calcurse from Google Calendar and todo.txt

### greasyfork_archive

[GitHub](https://github.com/seanbreckenridge/greasyfork_archive) | [GitLab](https://gitlab.com/seanbreckenridge/greasyfork_archive) | [PyPi](https://pypi.org/project/greasyfork_archive/) | Python

Scrapes data and code from a users [Greasyfork](https://greasyfork.org/en) account.

### vps

[GitHub](https://github.com/seanbreckenridge/vps) | [GitLab](https://gitlab.com/seanbreckenridge/vps) | Shell

Scripts used for installing/managing/restarting/monitoring processes on my server (and my server). Wraps [supervisor](https://github.com/Supervisor/supervisor) to handle process crashing. Includes other misc scripts ([mediaproxy](https://github.com/seanbreckenridge/vps/blob/master/mediaproxy)/[remsync](https://github.com/seanbreckenridge/vps/blob/master/remsync)) to provide FTP/Proxy-like functionality.

### jikan_ex

[GitHub](https://github.com/seanbreckenridge/jikan_ex) | [GitLab](https://gitlab.com/seanbreckenridge/jikan_ex) | [Hex](https://hex.pm/packages/jikan_ex) | Elixir

An elixir wrapper for the [Jikan](https://jikan.moe/) API.

### shortcuts

[GitHub](https://github.com/seanbreckenridge/shortcuts) | [GitLab](https://gitlab.com/seanbreckenridge/shortcuts) | Ruby

Converts a `toml` file into shell scripts. I use this to convert short/one-liner shell commands into individual files. This makes my scripts easier to share with others, not dependent on shell-specific syntax (e.g. `exported bash functions`), and makes scripts accessible to other scripts/launchers like `rofi`/`dmenu`.

### albums

[GitHub](https://github.com/seanbreckenridge/albums) | [GitLab](https://gitlab.com/seanbreckenridge/albums) | Python/SQL

An amalgamation of acclaimed album lists. This is my replacement for [RateYourMusic](https://rateyourmusic.com/).

This was started years ago, before I knew how databases worked, so my database is a [google sheet](https://sean.fish/s/albums). I then learnt SQL, so it also has code to [convert the google sheet to a `MySQL` schema](https://github.com/seanbreckenridge/albums/tree/master/SQL)

Also includes an API that lets me list recently listened albums on my [media feed](https://sean.fish/feed)

### keepassxc-pwned

[GitHub](https://github.com/seanbreckenridge/keepassxc-pwned) | [GitLab](https://gitlab.com/seanbreckenridge/keepassxc-pwned) | [PyPi](https://pypi.org/project/keepassxc_pwned) | Python

Checks a [keepassxc](https://keepassxc.org/) database against previously breached [haveibeenpwned](https://haveibeenpwned.com/) passwords.

### wca_userinfo

[GitHub](https://github.com/seanbreckenridge/wca_userinfo) | [GitLab](https://gitlab.com/seanbreckenridge/wca_userinfo) | Rust

A tiny web server that scrapes information for a user from [`worldcubeassosiation.org`](https://www.worldcubeassociation.org/). Web scraping in rust is a bit cumbersome, but it was some nice exposure to using `Result`s and error handling. I scrape my page from the `WCA` website once per week, and use it to generate [this page](https://sean.fish/cubing) on my website.

### xqc-dvd

[GitHub](https://github.com/seanbreckenridge/xqc-dvd) | [GitLab](https://gitlab.com/seanbreckenridge/xqc-dvd) | Elm

A browser DVD logo animation/game. Was a project for learning Elm; Hosted [here](https://sean.fish/dvd/)

### tinspire

[GitHub](https://github.com/seanbreckenridge/tinspire) | [GitLab](https://gitlab.com/seanbreckenridge/tinspire) | TI-BASIC

programs I wrote on my ti-nspire cx back in the day

### animeshorts

[GitHub](https://github.com/seanbreckenridge/animeshorts) | [GitLab](https://gitlab.com/seanbreckenridge/animeshorts) | Python

Code for generating and maintaining my (static) site for anime short films/series. Generates the html with the generic [`yattag`](https://www.yattag.org/) package, doesn't use a full SSG framework.

### steamscraper

[GitHub](https://github.com/seanbreckenridge/steamscraper) | [GitLab](https://gitlab.com/seanbreckenridge/steamscraper) | Python

Scrapes personal game/achievement data from steams website.

### blizzard_gdpr_parser

[GitHub](https://github.com/seanbreckenridge/blizzard_gdpr_parser) | [GitLab](https://gitlab.com/seanbreckenridge/blizzard_gdpr_parser) | Python

Parses date-related information from my blizzard GDPR export.

### forum_parser

[GitHub](https://github.com/seanbreckenridge/forum_parser) | [GitLab](https://gitlab.com/seanbreckenridge/forum_parser) | Python

Parses post/metadata from random forums I used in the past

### bootstrap

[GitHub](https://github.com/seanbreckenridge/bootstrap) | [GitLab](https://gitlab.com/seanbreckenridge/bootstrap) | Shell

A script to setup a new bash VPS/servers with defaults I like. This is one of the first things I do whenever I setup a new server, so I have all my `vi` bindings and aliases.

### cube-scramble-cli

[GitHub](https://github.com/seanbreckenridge/cube-scramble-cli) | [GitLab](https://gitlab.com/seanbreckenridge/cube-scramble-cli) | [PyPi](https://pypi.org/project/cube-scramble-cli/) | Python

A CLI for `pyTwistyScrambler`, to generate random states for twisty puzzles.

### docker-jikan

[GitHub](https://github.com/seanbreckenridge/docker-jikan) | [GitLab](https://gitlab.com/seanbreckenridge/docker-jikan) | Dockerfile

  Personal [Jikan](https://jikan.moe/) setup; so I don't have to compile PHP 7.3 on new servers.

### dotfiles-index

[GitHub](https://github.com/seanbreckenridge/dotfiles-index) | [GitLab](https://gitlab.com/seanbreckenridge/dotfiles-index) | TypeScript

SSG to display my scripts/configuration files from my dotfiles. I replaced this with [subpath-serve](https://github.com/seanbreckenridge/subpath-serve), `next.js`'s core is great, but its missing some of the auxiliary tooling (specifying a different base path easily) to let me host this on my site easily.

### exists

[GitHub](https://github.com/seanbreckenridge/exists) | [GitLab](https://gitlab.com/seanbreckenridge/exists) | C

Pipe to test if files exist. Got tired of doing the unreadable: `xargs -I {} sh -c "[ -e \"{}\" ] && echo \"{}\""` when doing shell one-liners, so this simplifies that.

### foreverjs-list

[GitHub](https://github.com/seanbreckenridge/foreverjs-list) | [GitLab](https://gitlab.com/seanbreckenridge/foreverjs-list) | JavaScript

Express API to get information about [`forever.js`](https://github.com/foreversd/forever) processes. I used to use this to ping my server every 10 minutes to make sure my processes were still running. I use [my fork of superhooks](https://github.com/seanbreckenridge/superhooks) to do that now.

### superhooks

[GitHub](https://github.com/seanbreckenridge/superhooks) | [GitLab](https://gitlab.com/seanbreckenridge/superhooks) | Python

Posts supervisor event data as an embed to a discord server. This sends me notifications whenever some process on my server crashes/restarts.

### genpasswd

[GitHub](https://github.com/seanbreckenridge/genpasswd) | [GitLab](https://gitlab.com/seanbreckenridge/genpasswd) | C++

Yet another Password Generator. Theres lots of these out there, but writing my own means the flags match exactly what I want.

### greasyfork_repo_generator

[GitHub](https://github.com/seanbreckenridge/greasyfork_repo_generator) | [GitLab](https://gitlab.com/seanbreckenridge/greasyfork_repo_generator) | Elixir

Archives a users Greasyfork account and creates a Github repo from the information. Uses my [greasyfork_archive](https://github.com/seanbreckenridge/greasyfork_archive) package.

### keyvol

[GitHub](https://github.com/seanbreckenridge/keyvol) | [GitLab](https://gitlab.com/seanbreckenridge/keyvol) | Go

An interactive terminal interface for `pamixer`/`pactl` to control system volume. I use this on my laptop when I'm using my external keyboard to change volume so I don't have to reach to the volume keys. Also means I don't have to leave home row to change my volume.

### largechar

[GitHub](https://github.com/seanbreckenridge/largechar) | [GitLab](https://gitlab.com/seanbreckenridge/largechar) | JavaScript

Displays large characters on your screen. Was a replacement for [this Alfred feature](https://www.alfredapp.com/help/features/large-type/), and an excuse to do some GUI programming with electron (if one can call it that)

### mal-notify-bot

[GitHub](https://github.com/seanbreckenridge/mal-notify-bot) | [GitLab](https://gitlab.com/seanbreckenridge/mal-notify-bot) | Python

Discord bot that checks the MAL (MyAnimeList) "Just Added" page, reporting newly added entries.

### poly-project-euler

[GitHub](https://github.com/seanbreckenridge/poly-project-euler) | [GitLab](https://gitlab.com/seanbreckenridge/poly-project-euler) | ???

Solutions to Project Euler, using distinct languages. I really like learning new languages, so this was an excuse to do that.

### proxy-jikan

[GitHub](https://github.com/seanbreckenridge/proxy-jikan) | [GitLab](https://gitlab.com/seanbreckenridge/proxy-jikan) | Python

Self-signed (HTTPS) token-authenticated proxy for [Jikan](https://jikan.moe/). Used so I quell my paranoia of being IP banned. Can also act as a generic proxy.

### mac-dotfiles

[GitHub](https://github.com/seanbreckenridge/mac-dotfiles) | [GitLab](https://gitlab.com/seanbreckenridge/mac-dotfiles) | Shell

My old dotfiles for Mac. Has now been combined into my single [dotfiles](https://github.com/seanbreckenridge/dotfiles) repo

### pythonanywhere-3-months

[GitHub](https://github.com/seanbreckenridge/pythonanywhere-3-months) | [GitLab](https://gitlab.com/seanbreckenridge/pythonanywhere-3-months) | Python

Clicks the 'Run until 3 months from today' button on [pythonanywhere](https://www.pythonanywhere.com/), so your website doesn't deactivate automatically.

### MALUserVsAverage

[GitHub](https://github.com/seanbreckenridge/MALUserVsAverage) | [GitLab](https://gitlab.com/seanbreckenridge/MALUserVsAverage) | Python

generate a graph that shows correlation between the user and average score on MyAnimeList

### reddit-wallpaper-scraper

[GitHub](https://github.com/seanbreckenridge/reddit-wallpaper-scraper) | [GitLab](https://gitlab.com/seanbreckenridge/reddit-wallpaper-scraper) | Python

Scrapes the top posts from wallpaper subreddits. I'm not huge into collecting wallpapers, but I wanted to have a couple hundred in my rotation. This scraped and classified ~7500 images in about 15 hours.

### random_shmup

[GitHub](https://github.com/seanbreckenridge/random_shmup) | [GitLab](https://gitlab.com/seanbreckenridge/random_shmup) | Python

An old pygame shoot 'em up space game

### selenium-shutterfly-scraper

[GitHub](https://github.com/seanbreckenridge/selenium-shutterfly-scraper) | [GitLab](https://gitlab.com/seanbreckenridge/selenium-shutterfly-scraper) | Python

(At least when I did this), there was no way to download all of your images off of a `shutterfly` account. This used a combination of `selenium` and `pyautogui` to do that.

### full_todotxt

[GitHub](https://github.com/seanbreckenridge/full_todotxt) | [GitLab](https://gitlab.com/seanbreckenridge/full_todotxt) | Python

A todotxt interactive interface that forces you to specify certain attributes. Used in combination with `todotxt_deadline_notify`, to allow me to quickly create todos and have notifications to remind me to do them!

### todotxt_deadline_notify

[GitHub](https://github.com/seanbreckenridge/todotxt_deadline_notify) | [GitLab](https://gitlab.com/seanbreckenridge/todotxt_deadline_notify) | Elixir

Sends me reminders in discord when deadlines for my todos are approaching. Syncs from my list of local todos (a text file, following the [todo.txt](http://todotxt.org/) standard) up to my server.

### twitchlive

[GitHub](https://github.com/seanbreckenridge/twitchlive) | [GitLab](https://gitlab.com/seanbreckenridge/twitchlive) | Go

A CLI tool to list which Twitch channels you follow are currently live.

### wait-for-internet

[GitHub](https://github.com/seanbreckenridge/wait-for-internet) | [GitLab](https://gitlab.com/seanbreckenridge/wait-for-internet) | Rust

Command line utility that waits till you have an internet connection. I use this multiple times daily since the I have multiple routers at my house depending on whether or not I'm connecting to my NAS/am upstairs or downstairs. Often like `wait-for-internet && <some command that requires an external connection>`

### fuji

[GitHub](https://github.com/seanbreckenridge/fuji) | [GitLab](https://gitlab.com/seanbreckenridge/fuji) | Python

When it was still allowed, automated the process of creating an free trial account on ForJoyTV using selenium, to watch Japanese TV.

### cookiecutter-template

[GitHub](https://github.com/seanbreckenridge/cookiecutter-template) | [GitLab](https://gitlab.com/seanbreckenridge/cookiecutter-template) | Python

cookiecutter template for new python projects, using `pipenv`, `pytest`, and `mypy`

### cookiecutter-lib

[GitHub](https://github.com/seanbreckenridge/cookiecutter-lib) | [GitLab](https://gitlab.com/seanbreckenridge/cookiecutter-lib) | Python

Cookiecutter template for a basic python library. Is meant for packages I don't intend to push to pypi, includes seutptools to install some python code I want to have globally installed, and basic installation method to install from my github.

### vimbuffer

[GitHub](https://github.com/seanbreckenridge/vimbuffer) | [GitLab](https://gitlab.com/seanbreckenridge/vimbuffer) | [PyPi](https://pypi.org/project/vimbuffer/) | Python

Lets me edit files and strings in temporary vim (or some other console editor) buffers. I've mostly replaced this with my heavy use of a customized [ranger](https://github.com/ranger/ranger)

### oh-my-stars

[GitHub](https://github.com/seanbreckenridge/oh-my-stars) | Python

An offline CLI tool to search your GitHub Stars. Forked from [here](https://github.com/wolfg1969/oh-my-stars) to have a simpler interface and also index all of my repositories, in addition to any stars.

### sonic_pi_music

[GitHub](https://github.com/seanbreckenridge/sonic_pi_music) | Ruby

some music created using sonic pi



