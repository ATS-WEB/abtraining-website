import { courses, type Course } from "../data/courses";
import { page } from "./urls";

export function getCourse(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

export function enquiryPath(slug?: string): string {
  if (!slug) return "/contact/";
  return `/contact/?course=${encodeURIComponent(slug)}`;
}

export function registerHref(course: Course): string {
  return course.checkoutUrl ?? page(enquiryPath(course.slug));
}

export function formatLabel(course: Course): string {
  return course.format === "online" ? "Online" : "In person";
}

export function durationLabel(course: Course): string {
  return /self-paced/i.test(course.duration) ? "Self-paced" : course.duration;
}

export function summary(course: Course, max = 200): string {
  const text = course.description.trim();
  const dot = text.indexOf(". ");
  const sentence = dot > 40 ? text.slice(0, dot + 1) : text;
  if (sentence.length <= max) return sentence;
  const cut = sentence.slice(0, max - 1).replace(/\s+\S*$/, "");
  return `${cut}…`;
}

export type PriceMode = "cad" | "usd" | "ask";

export function priceLabel(course: Course): { text: string; mode: PriceMode } {
  if (course.priceCad != null) {
    return {
      text: `$${course.priceCad.toLocaleString("en-CA")} CAD`,
      mode: "cad",
    };
  }
  if (course.listedUsd != null && course.checkoutUrl) {
    return { text: `US$${course.listedUsd} at checkout`, mode: "usd" };
  }
  return { text: "Ask us for a price", mode: "ask" };
}

export function formatIsoDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("en-CA", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export function dateLabel(course: Course): { text: string; known: boolean } {
  if (course.nextDates.length > 0) {
    return {
      text: course.nextDates.map(formatIsoDate).join(", "),
      known: true,
    };
  }
  if (course.format === "online" && /self-paced/i.test(course.duration)) {
    return { text: "Self-paced — start anytime", known: true };
  }
  return { text: "Ask us for the next date", known: false };
}

export function timeRequired(duration: string): string | undefined {
  const days = duration.trim().toLowerCase().match(/^(\d+)\s+days?$/);
  if (days) return `P${days[1]}D`;
  const hours = duration.trim().toLowerCase().match(/^(\d+)\s+hours?$/);
  if (hours) return `PT${hours[1]}H`;
  return undefined;
}

export const courseCounts = {
  all: courses.length,
  regulation: courses.filter((course) => course.type === "Regulation").length,
  application: courses.filter((course) => course.type === "Application").length,
};
