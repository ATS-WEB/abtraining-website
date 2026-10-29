/**
 * Pins for the work map. Only places named in the brochure, portfolio, or site stories.
 *
 * TODO(owner): The portfolio says 25+ Indigenous communities and shows unnamed pins.
 * Add a pin here only when you can name the community and the work. Do not invent one.
 * TODO(owner): Loon River is labelled on the portfolio skills-gap map. It is not
 * listed as a completed project, so it is not shown. Confirm if it should be a pin.
 * TODO(owner): The Construction Foundation of BC story does not name a city.
 * The pin is provincial until you add the community.
 */

export interface WorkPlace {
  id: string;
  name: string;
  region: string;
  /** Position on the stylized western-Canada map, in viewBox units. */
  x: number;
  y: number;
  story: string;
  /** Empty string until a photo of this place is available. */
  photo: string;
  photoAlt: string;
  source: string;
}

export const places: WorkPlace[] = [
  {
    id: "edmonton",
    name: "Edmonton",
    region: "Alberta",
    x: 318,
    y: 248,
    story:
      "Academy headquarters at 14410 118 Ave NW. Ground school, flight training, and the NAIT partnership are based here. The drone footage on this site is a pass over the North Saskatchewan River valley.",
    photo: "/media/aerial-river.webp",
    photoAlt: "Drone view of the North Saskatchewan River and the Edmonton river valley",
    source: "ATS & HK brochure and portfolio; NAIT story on this site",
  },
  {
    id: "maskwacis",
    name: "Maskwacis",
    region: "Alberta",
    x: 332,
    y: 292,
    story:
      "HK Drone Service publishes a Maskwacis address: P.O. Box 116. The brochure pairs that office with Aboriginal Training Services in Edmonton.",
    photo: "/media/hk-crew.webp",
    photoAlt: "HK Drone Service crew with a heavy-lift multirotor, from the company brochure",
    source: "ATS & HK brochure and portfolio contact slide",
  },
  {
    id: "cfbc",
    name: "Construction Foundation of BC",
    region: "British Columbia",
    x: 168,
    y: 210,
    story:
      "Training with the Construction Foundation of British Columbia took people from first flights to community-ready operations. The published story does not name the community.",
    photo: "",
    photoAlt: "",
    source: "Site story, CFBC Success Story, 4 December 2024",
  },
];
