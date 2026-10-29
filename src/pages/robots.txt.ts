import type { APIRoute } from "astro";
import { basePath, siteOrigin } from "../../site.config";

export const GET: APIRoute = () => {
  const base = basePath === "/" ? "" : basePath.replace(/\/$/, "");
  const sitemap = `${siteOrigin}${base}/sitemap.xml`;
  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemap}\n`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
