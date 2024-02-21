/*
 * urljoin - joins two url parts together
 * @param {string} baseURL
 * @param {string} relativeURL
 * @returns {string}
 */
function urljoin2(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "")
    : baseURL;
}

/**
 * urljoin - joins two url parts together
 * @param {...string} args - list of url parts
 * @returns {string}
 */
export default function urljoin(...args) {
  if (args.length < 2) {
    throw new Error("urljoin requires at least two arguments");
  }

  let newUrl = args.at(0);
  for (let i = 1; i < args.length; i++) {
    newUrl = urljoin2(newUrl, args.at(i));
  }
  return newUrl;
}
