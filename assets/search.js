(() => {
  function createResultDiv(resultItem) {
    // from Fuse results
    let url = resultItem.item.url;
    let contents = resultItem.item.text;

    // entire result div
    let resultDiv = document.createElement("div");
    resultDiv.className = "searchresult-row";

    // title
    let resultTitle = document.createElement("span");
    resultTitle.className = "searchresults-title";

    // link for title
    let resultLink = document.createElement("a");
    resultLink.href = url;
    resultLink.append(document.createTextNode(url));

    // contents
    let resultContents = document.createElement("div");
    resultContents.className = "searchresults-contents";

    resultContents.append(document.createTextNode(contents.substring(0, 200)));

    // construct
    resultTitle.append(resultLink);
    resultDiv.append(resultTitle);
    resultDiv.append(resultContents);

    resultDiv.onmouseup = function (a) {
      if (a.ctrlKey || a.metaKey || a.button == 4) {
        a.preventDefault(); // prevent middle click from opening tab, so it doesnt open twice.
        window.open(url, "_blank"); // new tab
      } else {
        window.location = url;
      }
    };

    return resultDiv;
  }

  let fuseOptions = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    ignoreLocation: false, // dont care about where this is in the search text
    // ignoreFieldNorm: false,
    keys: ["url", "text"],
  };

  // globla references
  let searchField = document.getElementById("search");
  let searchDiv = document.getElementById("searchresults");

  // initialize data
  searchDiv.innerHTML = "Loading Search Index...";
  let jsonData = null;
  let fuse = null;

  // send request to load index
  // use XHR for compability, since I'm not using babel
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "/search_index.json");
  xhr.onreadystatechange = function () {
    // request complete
    if (xhr.readyState !== 4) return;
    if (xhr.status >= 400) {
      searchDiv.innerHTML = "Couldn't load search index...";
      console.error(xhr);
    } else {
      // success!
      jsonData = JSON.parse(this.responseText);
      searchDiv.innerHTML = "...";
      fuse = new Fuse(jsonData, fuseOptions);
    }
  };
  xhr.send();

  // attach onchange function for input
  function updateResults() {
    if (fuse === null) {
      searchDiv.innerHTML = "Loading Search Index..."; // make sure
      return;
    }
    // clear previous results
    searchDiv.innerHTML = "...";
    results = fuse.search(searchField.value.toLowerCase());
    if (results.length == 0) {
      searchDiv.innerHTML = "Nothing found...";
    } else {
      searchDiv.innerHTML = results.length.toString() + " results:";
      for (let i = 0; i < results.length; i++) {
        searchDiv.append(createResultDiv(results[i]));
      }
    }
  }

  searchField.addEventListener("input", updateResults);
  searchField.addEventListener("propertychange", updateResults); // for IE8
})();
