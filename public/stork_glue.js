// this is loaded in the header of the site,
// it sets up the search bar using stork
const indexUrl = document.querySelector(".stork-wrapper-dark").dataset.indexUrl;
stork.register("search", indexUrl);
const searchIcon = document.querySelector(".search-icon");
const wrapper = document.querySelector(".stork-wrapper-dark");
const sInput = document.querySelector(".stork-input");
toggleSearch = () => {
  if (wrapper.classList.contains("hide")) {
    wrapper.classList.remove("hide");
    sInput.focus();
  } else {
    wrapper.classList.add("hide");
  }
};
searchIcon.addEventListener("click", () => toggleSearch());
// check the URL for 'search' GET arg
// if its there, open the search bar
const url = new URL(window.location.href);
if (url.searchParams.get("search") !== null) {
  toggleSearch();
}
