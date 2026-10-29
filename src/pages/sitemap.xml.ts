import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { canonicalOrigin } from "../../site.config";
import { courses } from "../data/courses";

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog");
  const paths = [
    "/",
    "/training/",
    "/services/",
    "/indigenous-relations/",
    "/about/",
    "/contact/",
    "/quiz/",
    "/voices/",
    "/blog/",
    ...courses.map((course) => `/training/${course.slug}/`),
    ...posts.map((post) => `/blog/${post.id}/`),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map((path) => `  <url><loc>${canonicalOrigin}${path}</loc></url>`)
  .join("\n")}
</urlset>
`;
  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
