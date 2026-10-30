/**
 * Every photo and video slot on the home page.
 *
 * Drop a real file in `public/` and set `src` (and `poster` for video).
 * Leave `kind` as `"placeholder"` and `src` as null until that file exists.
 * Captions stay generic: no names, places, or events.
 */

export type MediaKind = "image" | "video" | "placeholder";

export interface MediaItem {
  id: string;
  kind: MediaKind;
  /** Path under `public/`, or null for an empty slot. */
  src: string | null;
  /** Poster path for video. Null for stills and placeholders. */
  poster: string | null;
  alt: string;
  caption: string;
  width: number | null;
  height: number | null;
}

export const homeMedia = [
  {
    id: "hero",
    kind: "video",
    src: "/media/hero-reel.mp4",
    poster: "/media/hero-poster.webp",
    alt: "Aerial view of a river, a white arched bridge, and a gathering on a field",
    caption: "Drone footage",
    width: 1280,
    height: 720,
  },
  {
    id: "aerial-river",
    kind: "image",
    src: "/media/aerial-river.webp",
    poster: null,
    alt: "Aerial view of a river, a white arched bridge, autumn trees, and a distant skyline",
    caption: "Aerial view",
    width: 1400,
    height: 788,
  },
  {
    id: "aerial-gathering",
    kind: "image",
    src: "/media/aerial-gathering.webp",
    poster: null,
    alt: "Aerial view of people gathered on a grassy field, with tents and a tipi",
    caption: "Aerial view",
    width: 1400,
    height: 788,
  },
  {
    id: "ground-school",
    kind: "image",
    src: "/media/ground-school.webp",
    poster: null,
    alt: "An instructor standing with a seated class in a training room",
    caption: "Ground school",
    width: 1100,
    height: 619,
  },
  {
    id: "classroom",
    kind: "image",
    src: "/media/classroom-crew.webp",
    poster: null,
    alt: "A training group posed with small multirotors in a classroom",
    caption: "Ground school",
    width: 1100,
    height: 514,
  },
  {
    id: "flight-line",
    kind: "image",
    src: "/media/flight-line.webp",
    poster: null,
    alt: "People in high-visibility vests standing with a small multirotor on a landing pad",
    caption: "Flight line",
    width: 800,
    height: 600,
  },
  {
    id: "field",
    kind: "image",
    src: "/media/field-winter.webp",
    poster: null,
    alt: "People preparing a large multirotor on a snowy field",
    caption: "Field training",
    width: 1200,
    height: 900,
  },
  {
    id: "community",
    kind: "image",
    src: "/media/community-crew.webp",
    poster: null,
    alt: "A group of people standing with a large multirotor on grass",
    caption: "Training group",
    width: 1100,
    height: 514,
  },
  {
    id: "crew",
    kind: "image",
    src: "/media/hk-crew.webp",
    poster: null,
    alt: "A crew standing with a multirotor beside a trailer and a vehicle",
    caption: "Field crew",
    width: 600,
    height: 450,
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
  },
] as const satisfies readonly MediaItem[];

export type MediaId = (typeof homeMedia)[number]["id"];

export function mediaSlot(id: MediaId): MediaItem {
  const item = homeMedia.find((entry) => entry.id === id);
  if (!item) throw new Error(`Missing home media slot: ${id}`);
  return item;
}
