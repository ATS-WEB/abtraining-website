/**
 * Pins for the work map. Only places we can name.
 *
 * Provenance (not shown on the site):
 * - Edmonton: academy address, NAIT story on this site, river-valley aerial.
 * - Maskwacis: HK Drone Service P.O. Box 116, paired with the Edmonton academy.
 * - Construction Foundation of BC: site story, 4 December 2024. The story does not
 *   name a city, so the pin is provincial.
 *
 * TODO(owner): The portfolio says 25+ Indigenous communities and shows unnamed pins.
 * Add a pin here only when you can name the community and the work. Do not invent one.
 * TODO(owner): Loon River is labelled on the portfolio skills-gap map. It is not
 * listed as a completed project, so it is not shown. Confirm if it should be a pin.
 * TODO(owner): The Construction Foundation of BC story does not name a city.
 * The pin is provincial until you add the community.
 * TODO(owner): CFBC has no photograph. Set `photo` when you have one. Leave it
 * empty until then; the site renders nothing in that slot.
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
}

export const places: WorkPlace[] = [
  {
    id: "edmonton",
    name: "Edmonton",
    region: "Alberta",
    x: 318,
    y: 248,
    story:
      "Our headquarters is at 14410 118 Ave NW. Ground school, flight training, and the NAIT partnership run from here. The photograph is a drone pass over the North Saskatchewan River valley.",
    photo: "/media/aerial-river.webp",
    photoAlt: "Drone view of the North Saskatchewan River and the Edmonton river valley",
  },
  {
    id: "maskwacis",
    name: "Maskwacis",
    region: "Alberta",
    x: 332,
    y: 292,
    story:
      "HK Drone Service is at P.O. Box 116 in Maskwacis. We run the academy from Edmonton and we work with that office.",
    photo: "/media/hk-crew.webp",
    photoAlt: "HK Drone Service crew standing with a heavy-lift multirotor",
  },
  {
    id: "cfbc",
    name: "Construction Foundation of BC",
    region: "British Columbia",
    x: 168,
    y: 210,
    story:
      "We trained with the Construction Foundation of British Columbia. People went from first flights to operations a community can run.",
    photo: "",
    photoAlt: "",
  },
];
