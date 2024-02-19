import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
const isProd = import.meta.env.PROD;

// get base url from env

// https://astro.build/config
export default defineConfig({
  site: isProd ? "https://sean.fish/x/" : "http://localhost:4321/x/",
  base: "/x",
  trailingSlash: "ignore",
  integrations: [mdx(), sitemap()],
});
