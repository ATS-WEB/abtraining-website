/**
 * Business details used across the site. Edit this file to change contact info.
 *
 * TODO(owner): Confirm the public email. darcy@abtraining.ca is used because it
 * is the address on every page of the previous site. The project brief also
 * mentioned admin@abtraining.ca and malkayd@abtraining.ca, which were not in the
 * exported pages.
 * TODO(owner): Confirm the street address. The brief lists both "11652 145 St NW"
 * and "14410 118 Ave NW", Edmonton. The exported site only published
 * "Edmonton, Alberta, Canada", so no street is shown until you fill streetAddress.
 * TODO(owner): Confirm the postal code and add it below if you want it public.
 * TODO(owner): The old footer also listed Chicago, Illinois and Karachi, Sindh.
 * Those are not shown. Say if either is a real office.
 * TODO(owner): Confirm the Google review count. The brief says 5.0 from 100 reviews.
 * The page export included a 5.0 rating and 34 written reviews, not a count field.
 * TODO(owner): Confirm the published stats (500+ students, 98% success, and the rest).
 * TODO(owner): LinkedIn was not in the site export. The public company page is linked
 * below. Remove `linkedin` if you do not want it.
 * TODO(owner): Confirm membership in the Canadian Council for Aboriginal Business.
 * That claim is on the Thinkific basic course page.
 * TODO(owner): formEndpoint is empty, so the contact form opens the visitor's email
 * app. Paste a form endpoint URL here if you add one later. Do not put a secret in
 * this file if the endpoint needs one.
 */

export const business = {
  name: "Aboriginal Training Services",
  legalName: "Aboriginal Training Services Ltd.",
  tagline:
    "Keepers of the land, keepers of the data, and keepers of the environment",
  motto: "Training for the Future",
  email: "darcy@abtraining.ca",
  phoneDisplay: "+1 (587) 524-0275",
  phoneTel: "+15875240275",
  phoneSchema: "+1-587-524-0275",
  streetAddress: "",
  city: "Edmonton",
  region: "Alberta",
  regionCode: "AB",
  postalCode: "",
  country: "Canada",
  countryCode: "CA",
  facebook: "https://www.facebook.com/abdronetraining",
  linkedin: "https://www.linkedin.com/company/aboriginaltrainingservicesltd",
  studentPortal: "https://learn.abtraining.ca/users/sign_in",
  formEndpoint: "",
  googleRating: "5.0",
  googleReviewCount: 100,
  ccabMember: true,
};

export const publishedStats = [
  { value: "500+", label: "Students trained" },
  { value: "98%", label: "Success rate" },
  { value: "50+", label: "Corporate clients" },
  { value: "11+", label: "Years of experience" },
  { value: "25+", label: "Indigenous communities served" },
  { value: "570+", label: "Flight hours" },
] as const;

export function addressLines(): string[] {
  const street = business.streetAddress.trim();
  const cityLine = [business.city, business.region, business.postalCode]
    .filter(Boolean)
    .join(", ");
  return [street, cityLine, business.country].filter(Boolean);
}

export function mapsHref(): string {
  const query = addressLines().join(", ");
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}
