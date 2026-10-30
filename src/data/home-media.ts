/**
 * Every photo and video slot on the home page, plus the survey stills used on Services.
 *
 * Owner photographs are pre-sized AVIF and WebP files in `public/media/stills/`.
 * `src/data/photo-manifest.json` lists the widths. Captions stay generic:
 * no names of people, Nations, or communities, and no statistics.
 */

import manifest from "./photo-manifest.json";

export type MediaKind = "image" | "video" | "placeholder";

export interface MediaVariant {
  width: number;
  avif: string;
  webp: string;
}

export interface MediaItem {
  id: string;
  kind: MediaKind;
  /** Fallback still under `public/`, or null for an empty slot. */
  src: string | null;
  /** Poster path for video. Null for stills and placeholders. */
  poster: string | null;
  alt: string;
  caption: string;
  width: number | null;
  height: number | null;
  variants: readonly MediaVariant[];
  /** CSS object-position used when the frame crops the photo. */
  focus: string;
}

type PhotoId = keyof typeof manifest;

function still(id: PhotoId) {
  const entry = manifest[id];
  return {
    kind: "image" as const,
    src: entry.src,
    poster: null,
    width: entry.width,
    height: entry.height,
    variants: entry.variants,
  };
}

export const homeMedia = [
  {
    id: "survey-oblique",
    ...still("survey-oblique"),
    alt: "Oblique aerial view across a work site, fields, and a clouded sky",
    caption: "Oblique survey",
    focus: "center 58%",
  },
  {
    id: "survey-nadir",
    ...still("survey-nadir"),
    alt: "Nadir aerial view of vehicles and equipment at a work site",
    caption: "Nadir survey",
    focus: "center",
  },
  {
    id: "thermal-solar",
    ...still("thermal-solar"),
    alt: "Thermal image of solar panels on a rooftop",
    caption: "Thermal inspection",
    focus: "center",
  },
  {
    id: "winter-flight",
    ...still("winter-flight"),
    alt: "Two people on a snowy field with a multirotor and marker cones",
    caption: "Field training",
    focus: "center 40%",
  },
  {
    id: "graduates-field",
    ...still("graduates-field"),
    alt: "A group in high-visibility vests holding certificates beside a multirotor",
    caption: "Graduates",
    focus: "center 32%",
  },
  {
    id: "graduates-aircraft",
    ...still("graduates-aircraft"),
    alt: "A group holding certificates behind a large multirotor on a field",
    caption: "Graduates",
    focus: "center 30%",
  },
  {
    id: "ground-school",
    ...still("ground-school"),
    alt: "An instructor standing with a seated class in a training room",
    caption: "Ground school",
    focus: "center",
  },
  {
    id: "classroom",
    ...still("classroom"),
    alt: "Instructors and a class seated at tables in a ground school room",
    caption: "Ground school",
    focus: "center",
  },
  {
    id: "flight-line",
    ...still("flight-line"),
    alt: "People on a field with cones and a landing pad during flight training",
    caption: "Flight line",
    focus: "center 42%",
  },
  {
    id: "field-crew",
    ...still("field-crew"),
    alt: "A crew posed with a large multirotor on grass",
    caption: "Field crew",
    focus: "center 36%",
  },
  {
    id: "class-group",
    ...still("class-group"),
    alt: "A training group posed indoors with a multirotor",
    caption: "Training group",
    focus: "center",
  },
  {
    id: "gym-practice",
    ...still("gym-practice"),
    alt: "People practicing with small aircraft inside a gymnasium",
    caption: "Indoor practice",
    focus: "center",
  },
  {
    id: "indoor-group",
    ...still("indoor-group"),
    alt: "A training group standing with a large multirotor indoors",
    caption: "Training group",
    focus: "center 42%",
  },
  {
    id: "heavy-lift",
    ...still("heavy-lift"),
    alt: "A large multirotor on display indoors",
    caption: "Heavy-lift aircraft",
    focus: "center 46%",
  },
  {
    id: "field-team",
    ...still("field-team"),
    alt: "A field team posed on a gravel bar beside a river and a cliff",
    caption: "Field team",
    focus: "center 46%",
  },
  {
    id: "footage",
    kind: "video",
    src: "/media/hero-reel.mp4",
    poster: "/media/hero-poster.webp",
    alt: "Aerial view of a river, a white arched bridge, and a gathering on a field",
    caption: "Drone footage",
    width: 1280,
    height: 720,
    variants: [],
    focus: "center",
  },
  {
    id: "artwork",
    kind: "placeholder",
    src: null,
    poster: null,
    alt: "Empty frame reserved for artwork supplied by the academy",
    caption: "Reserved for approved artwork",
    width: null,
    height: null,
    variants: [],
    focus: "center",
  },
] as const satisfies readonly MediaItem[];

export type MediaId = (typeof homeMedia)[number]["id"];

export function mediaSlot(id: MediaId): MediaItem {
  const item = homeMedia.find((entry) => entry.id === id);
  if (!item) throw new Error(`Missing home media slot: ${id}`);
  return item;
}
