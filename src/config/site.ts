/**
 * Business details used across the site. Edit this file to change contact info.
 *
 * Official contact lines are from the ATS & HK brochure and portfolio.
 *
 * TODO(owner): The brochure prints "T5L 2M5" on the Maskwacis line as well as on
 * the Edmonton street address. Maskwacis is shown here as P.O. Box 116 only.
 * Confirm the postal code before adding it to the Maskwacis address.
 * TODO(owner): The previous website published 98% success, 50+ corporate clients,
 * 11+ years, and 570+ flight hours. Those figures are not in the brochure or
 * portfolio, so they are not shown. Add them here if they are still accurate.
 * TODO(owner): Portfolio page 15 lists Series B funding, a 30% revenue beat, 45%
 * user engagement, and 15 new regions. Those lines are not repeated elsewhere and
 * are not published. Confirm before they go on the site.
 * TODO(owner): Land acknowledgement text is not in the supplied materials. Fill
 * `landAcknowledgement` and it will replace the reserved slot. Do not leave a
 * drafted acknowledgement in git if it is not the one you want public.
 * TODO(owner): Partner logos and any Nation-specific or artist artwork are not
 * extracted from the portfolio backgrounds. Put approved files in public/media
 * and point `artwork` at them.
 * TODO(owner): A real photograph of the KISIK eVTOL was not in the PDFs (the
 * portfolio page is a rendered aircraft). Add a photo before showing the airframe.
 * TODO(owner): formEndpoint is empty, so the contact form opens the visitor's email
 * app. Paste a form endpoint URL here if you add one later.
 * TODO(owner): LinkedIn was not in the brochure. The public company page is linked.
 * Remove `linkedin` if you do not want it.
 */

export const business = {
  name: "Aboriginal Training Services",
  legalName: "Aboriginal Training Services Ltd.",
  partnerName: "HK Drone Service",
  tagline: "Keepers of the Land, the Data, and the Environment",
  motto: "Training for the Future",
  positioning: "Leading Indigenous Drone (RPAS) Academy",
  email: "darcy@abtraining.ca",
  partnerEmail: "darcy@hkdroneservice.com",
  partnerUrl: "https://www.hkdroneservice.com",
  phoneDisplay: "+1 (403) 615-8083",
  phoneTel: "+14036158083",
  phoneSchema: "+1-403-615-8083",
  streetAddress: "14410 118 Ave NW",
  city: "Edmonton",
  region: "Alberta",
  regionCode: "AB",
  postalCode: "T5L 2M5",
  country: "Canada",
  countryCode: "CA",
  facebook: "https://www.facebook.com/abdronetraining",
  linkedin: "https://www.linkedin.com/company/aboriginaltrainingservicesltd",
  studentPortal: "https://learn.abtraining.ca/users/sign_in",
  formEndpoint: "",
  googleRating: "5.0",
  googleReviewCount: 100,
  /** Empty until the owner supplies the wording. */
  landAcknowledgement: "",
};

export const phones = [
  { display: "+1 (403) 615-8083", tel: "+14036158083" },
  { display: "+1 (587) 524-0275", tel: "+15875240275" },
] as const;

export const locations = [
  {
    name: "Edmonton",
    detail: "14410 118 Ave NW, Edmonton, AB T5L 2M5",
    maps: "14410 118 Ave NW, Edmonton, AB T5L 2M5",
  },
  {
    name: "Maskwacis",
    detail: "P.O. Box 116, Maskwacis, AB",
    maps: "Maskwacis, Alberta",
  },
] as const;

/** Figures printed in the ATS & HK brochure and portfolio. */
export const publishedStats = [
  { value: "500+", label: "Students trained" },
  { value: "25+", label: "Indigenous communities" },
  { value: "100%", label: "Indigenous owned and operated" },
] as const;

/**
 * Named in the portfolio slide "Traction & Partnerships".
 * The site does not describe the kind of relationship beyond that list.
 */
export const portfolioPartners = [
  "Indian Resource Council",
  "Canadian Council for Aboriginal Business",
  "NAIT",
  "Edmonton Chamber of Commerce",
  "Edmonton Police Service",
  "National Defence",
  "Transport Canada",
  "Aerial Evolution Association of Canada",
  "EPCOR",
  "Suncor",
  "NASA",
  "Northquest College",
] as const;

export function addressLines(): string[] {
  return [
    business.streetAddress,
    `${business.city}, ${business.regionCode} ${business.postalCode}`,
    business.country,
  ];
}

export function mapsHref(query: string = locations[0].maps): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
