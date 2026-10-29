import { defineConfig } from "astro/config";
import { basePath, siteOrigin } from "./site.config";

export default defineConfig({
  site: siteOrigin,
  base: basePath,
  trailingSlash: "always",
  compressHTML: true,
});
