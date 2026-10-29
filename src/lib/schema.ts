import { business } from "../config/site";
import type { Course } from "../data/courses";
import { absoluteAsset, canonical } from "./urls";
import { enquiryPath, timeRequired } from "./courses";

export function organizationId(): string {
  return `${canonical("/")}#organization`;
}

export function organizationSchema(): Record<string, unknown> {
  const address: Record<string, string> = {
    "@type": "PostalAddress",
    addressLocality: business.city,
    addressRegion: business.regionCode,
    addressCountry: business.countryCode,
  };
  if (business.streetAddress.trim()) address.streetAddress = business.streetAddress.trim();
  if (business.postalCode.trim()) address.postalCode = business.postalCode.trim();

  const sameAs = [business.facebook, business.linkedin, business.partnerUrl].filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    "@id": organizationId(),
    name: business.name,
    legalName: business.legalName,
    url: canonical("/"),
    logo: absoluteAsset("/brand/logo.png"),
    image: absoluteAsset("/brand/logo.png"),
    telephone: business.phoneSchema,
    email: business.email,
    address,
    areaServed: { "@type": "Country", name: "Canada" },
    sameAs,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.googleRating,
      reviewCount: String(business.googleReviewCount),
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function courseSchema(course: Course): Record<string, unknown> {
  const offerUrl = course.checkoutUrl ?? canonical(enquiryPath(course.slug));
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    url: canonical(`/training/${course.slug}/`),
    provider: { "@id": organizationId() },
    inLanguage: "en-CA",
    courseMode: course.format === "online" ? "online" : "onsite",
    offers: {
      "@type": "Offer",
      url: offerUrl,
      availability: "https://schema.org/InStock",
      ...(course.priceCad != null
        ? { price: course.priceCad, priceCurrency: "CAD" }
        : {}),
    },
  };
  const duration = timeRequired(course.duration);
  if (duration) schema.timeRequired = duration;
  if (course.nextDates.length > 0) {
    schema.hasCourseInstance = course.nextDates.map((startDate) => ({
      "@type": "CourseInstance",
      courseMode: course.format === "online" ? "online" : "onsite",
      startDate,
      inLanguage: "en-CA",
    }));
  }
  return schema;
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonical(item.path),
    })),
  };
}
