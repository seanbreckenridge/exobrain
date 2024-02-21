(async () => {
  // get slug from article if it exists
  const slugEl = document.querySelector("article[data-slug]");
  if (!slugEl) {
    return;
  }
  const slug = slugEl.getAttribute("data-slug");
  if (!slug) {
    return;
  }
  // check if server is up
  const resp = await fetch(`http://localhost:12593/ping`).catch(() => {});
  if (resp.status !== 200) {
    return;
  }

  const openInEditor = () =>
    fetch(`http://localhost:12593/launch?file=${slug}`);

  const title = document.querySelector("nav h2");
  // change the top-left button to open in editor
  title.innerText = "Editor";
  title.addEventListener("click", openInEditor);
  title.style.cursor = "pointer";
  title.style.textDecoration = "underline";
  title.role = "button";
})();
