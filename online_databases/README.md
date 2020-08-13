---
Title: Online Databases
---

*Why use online databases?*

For example, MAL, IMDB, Letterboxd

At a higher level. Its all.

* metadata
* community

## Reasons to use online databases:

Granularly:

* Share your list with others~ and be social!
* You (hopefully) get a nice interface which shows who images, descriptions, etc.
* Some of the benefits of a RDBMS, where you can filter/see who worked on what/search (depending on how much the website chooses to display)
* [IF AN API EXISTS, AND IS FREE] API access to the information, information on episodes/images (e.g. Trakt API info to TVDB)
* Discover new entries (in general), and based on recommendations that the system/other users give

## Reasons to not use online databases:

* Downtime
* If no API, no way to query your list. However, your own local list/spreadsheet means without a bunch of work, no access to metadata to filter your personal list
* Using a website in general:
  * Not owning your information (especially since this is a personal list, and not being able to export it easily means if the site dissapears, your list/community disappears)
  * Being advertised to
  * Being the product

## Using a personal system (like CSV/google sheets)

* If no metadata, cant do fun things like:
  * query by genre
  * connect by people who worked on two projects
  * anything else metadata and an RDMBS lets you do
* share/compare you lists to others (but how much do I care about this.... ? Could just create a SSG against local data and host that on my website instead of investing in another content silo). Or.... get/maintain a list of entries/IDs and back-fill info into the databases based on local changes. Local First, then update remotely to maintain the community aspect.

My general sentiment is, I want to move closer to what I did with my [music/albums](https://github.com/seanbreckenridge/albums) solution, but using local CSV/Sqlite files instead of google sheets. Create static site generators based on the local databases, and run those on my server whenever a git repo gets updated

## databases I use

Generally Good Metadata, have APIs which I use:

* Trakt - for <https://sean.fish/feed>
* Discogs - for <https://sean.fish/s/albums> (my google sheet/SQL system using discogs metadata)

Generally good metadata:

* <https://letterboxd.com>
* <https://www.grouvee.com>

Average metadata, tons of downtime, generally not a great experience:

* <https://myanimelist.net/> - however, im personally invested a lot and have a lot of the domain knowledge of how the site works here, and am friends with a lot of the power users. Moving away from MAL is something that Im actively working on.
