// this is loaded in the header of the site,
// it sets up the search bar using stork
const wrapper = document.querySelector(".stork-wrapper-dark");
stork.register("search", wrapper.dataset.indexUrl);
const si = document.querySelector(".stork-input");
toggleSearch = () => {
  if (wrapper.classList.contains("hide")) {
    wrapper.classList.remove("hide");
    si.focus();
  } else {
    wrapper.classList.add("hide");
  }
};
document.querySelector(".search-icon").addEventListener("click", toggleSearch);
// check the URL for 'search' GET arg
// if its there, open the search bar
const url = new URL(window.location.href);
if (url.searchParams.get("search") !== null) {
  toggleSearch();
}
