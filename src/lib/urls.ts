import { basePath, canonicalOrigin, siteOrigin } from "../../site.config";

function splitQuery(path: string): { pathname: string; query: string } {
  const [pathname, query = ""] = path.split("?");
  return { pathname, query };
}

function withSlash(pathname: string): string {
  if (pathname === "" || pathname === "/") return "/";
  const p = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return p.endsWith("/") ? p : `${p}/`;
}

/** Site path including the GitHub Pages base, for links inside the site. */
export function page(path: string): string {
  const { pathname, query } = splitQuery(path);
  const base = basePath === "/" ? "" : basePath.replace(/\/$/, "");
  const href = `${base}${withSlash(pathname)}`;
  return query ? `${href}?${query}` : href;
}

/** File under /public, including the base path. */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  return `${base}${path.replace(/^\//, "")}`;
}

/** Absolute URL on the host that is actually serving the site. */
export function absoluteAsset(path: string): string {
  const base = basePath === "/" ? "" : basePath.replace(/\/$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${siteOrigin}${base}${p}`;
}

/** Preferred public URL. Always the custom domain, even before DNS is moved. */
export function canonical(path: string): string {
  const { pathname, query } = splitQuery(path);
  const href = `${canonicalOrigin}${withSlash(pathname)}`;
  return query ? `${href}?${query}` : href;
}
