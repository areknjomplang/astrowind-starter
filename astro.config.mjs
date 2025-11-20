// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import lightningCSS from "vite-plugin-lightningcss";
import pkg from './package.json' with {type: "json"}

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      lightningCSS({
        browserslist: pkg.browserslist,
      }),
    ],
  },
});
