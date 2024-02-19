import { resolve } from "path";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
// https://docs.astro.build/en/guides/integrations-guide/sitemap/
import sitemap from "@astrojs/sitemap";
const isProd = import.meta.env.PROD;

// get base url from env

// https://astro.build/config
export default defineConfig({
  site: isProd ? "https://sean.fish/x/" : "http://localhost:4321/x/",
  prefetch: {
    defaultStrategy: "hover",
    prefetchAll: true, // on hover, pre fetch site links
  },
  base: "/x",
  // changing this breaks a bunch of the links
  // since import.meta.env.BASE_URL is used in the code
  // and trailingSlash being always means it has a `/`
  trailingSlash: "always",
  integrations: [mdx(), sitemap()],
  vite: {
    resolve: {
      alias: {
        // I have no clue why this is needed...
        $fonts: isProd ? resolve("/x/fonts") : resolve("./x/fonts"),
      },
    },
  },
});
