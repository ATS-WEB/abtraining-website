/**
 * Site hosting settings.
 *
 * To serve the site at https://www.abtraining.ca, change `customDomain` to true
 * and redeploy. Canonical URLs already use that domain. See the README.
 */
export const customDomain = false;

export const canonicalOrigin = "https://www.abtraining.ca";
export const githubPagesOrigin = "https://ats-web.github.io";
export const githubPagesBase = "/abtraining-website";

export const siteOrigin = customDomain ? canonicalOrigin : githubPagesOrigin;
export const basePath = customDomain ? "/" : githubPagesBase;
