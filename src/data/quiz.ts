/**
 * Transport Canada RPAS practice questions.
 * Each answer was checked against the source URL below. Do not add a question
 * without an official source. These are not the Transport Canada exam.
 *
 * TODO(owner): Add more questions from TP 15263 only after each one is checked
 * against the current guide or the Canadian Aviation Regulations.
 */

export type QuizLevel = "basic" | "advanced";

export interface QuizQuestion {
  id: string;
  level: QuizLevel;
  prompt: string;
  choices: [string, string, string, string];
  /** Index of the correct choice. */
  answer: 0 | 1 | 2 | 3;
  explanation: string;
  source: string;
  sourceUrl: string;
}

export const quizCourses = {
  basic: {
    label: "Basic operations",
    courseSlug: "drone-pilot-certificate-basic-online",
    checkoutUrl: "https://learn.abtraining.ca/courses/basic-exam-preparation",
  },
  advanced: {
    label: "Advanced operations",
    courseSlug: "drone-pilot-certificate-advanced-online",
    checkoutUrl: "https://learn.abtraining.ca/courses/advanced-exam-preparation",
  },
} as const;

export const quizQuestions: QuizQuestion[] = [
  {
    id: "basic-age",
    level: "basic",
    prompt: "How old must you be to get a Pilot Certificate – Basic Operations?",
    choices: ["12 years", "14 years", "16 years", "18 years"],
    answer: 1,
    explanation:
      "Transport Canada says you need to be 14 years old to get a Basic certificate. Advanced is 16. Level 1 Complex is 18.",
    source: "Transport Canada, Drone operation categories: Basic operations",
    sourceUrl:
      "https://tc.canada.ca/en/aviation/drone-safety/learn-rules-you-fly-your-drone/drone-operation-categories-pilot-certificates/basic-operations",
  },
  {
    id: "basic-distance",
    level: "basic",
    prompt:
      "Under basic operations, how far must you keep a small drone from any person, measured horizontally?",
    choices: [
      "More than 5 metres (16.4 feet)",
      "More than 30 metres (100 feet)",
      "More than 152.4 metres (500 feet)",
      "There is no minimum distance",
    ],
    answer: 1,
    explanation:
      "Basic operations stay more than 30 metres (100 feet) horizontally from any person. Canadian Aviation Regulations section 901.26 says that, unless the flight is under the advanced rules in Division V, a pilot must not fly a small remotely piloted aircraft in visual line of sight closer than 100 feet (30 m), measured horizontally, from any person not involved in the operation.",
    source: "Transport Canada, Basic operations; CAR 901.26",
    sourceUrl: "https://laws-lois.justice.gc.ca/eng/regulations/SOR-96-433/page-133.html",
  },
  {
    id: "basic-altitude",
    level: "basic",
    prompt:
      "What is the usual maximum altitude for a remotely piloted aircraft when no higher altitude has been authorized?",
    choices: [
      "200 feet (61 m) AGL",
      "400 feet (122 m) AGL",
      "500 feet (152 m) AGL",
      "1,000 feet (305 m) AGL",
    ],
    answer: 1,
    explanation:
      "Section 901.25 says a pilot must not fly higher than 400 feet (122 m) above ground level, or 100 feet (30 m) above a building or structure when less than 200 feet (61 m) horizontally from it. A higher altitude needs a Special Flight Operations Certificate — RPAS under section 903.03. In controlled airspace, an air traffic services authorization can also allow a higher altitude under section 901.71.",
    source: "Canadian Aviation Regulations, section 901.25",
    sourceUrl: "https://laws-lois.justice.gc.ca/eng/regulations/SOR-96-433/section-901.25.html",
  },
  {
    id: "basic-register",
    level: "basic",
    prompt: "Which drones must be registered with Transport Canada?",
    choices: [
      "Only drones heavier than 25 kg",
      "All drones weighing at least 250 g",
      "Only drones flown for paid work",
      "Only drones flown inside a city",
    ],
    answer: 1,
    explanation:
      "Transport Canada requires registration of all drones weighing at least 250 g, including custom-built and kit aircraft. A drone under 250 g does not need to be registered unless something attached to it brings the weight to 250 g or more. The registration number must be marked on the aircraft.",
    source: "Transport Canada, Registering your drone",
    sourceUrl: "https://tc.canada.ca/en/aviation/drone-safety/registering-your-drone",
  },
  {
    id: "basic-where",
    level: "basic",
    prompt: "Which flight fits basic operations?",
    choices: [
      "In controlled airspace, below 400 feet",
      "In uncontrolled airspace, always able to see the drone, and more than 30 m horizontally from any person",
      "Over people, with a basic certificate",
      "A medium drone, more than 25 kg, in uncontrolled airspace",
    ],
    answer: 1,
    explanation:
      "Transport Canada describes basic operations as: operating weight no more than 25 kg, flying where you can always see the drone, more than 30 m horizontally from any person, in uncontrolled airspace, and far enough from certified airports and heliports. If you do not meet those conditions, the flight is advanced or complex.",
    source: "Transport Canada, Basic operations",
    sourceUrl:
      "https://tc.canada.ca/en/aviation/drone-safety/learn-rules-you-fly-your-drone/drone-operation-categories-pilot-certificates/basic-operations",
  },
  {
    id: "adv-age",
    level: "advanced",
    prompt: "What is the minimum age for a Pilot Certificate – Advanced Operations?",
    choices: ["14 years", "16 years", "18 years", "21 years"],
    answer: 1,
    explanation:
      "Transport Canada’s category table sets the minimum age at 14 for Basic, 16 for Advanced, and 18 for Level 1 Complex.",
    source: "Transport Canada, Drone operation categories and pilot certificates",
    sourceUrl:
      "https://tc.canada.ca/en/aviation/drone-safety/learn-rules-you-fly-your-drone/drone-operation-categories-pilot-certificates",
  },
  {
    id: "adv-airspace",
    level: "advanced",
    prompt: "What do you need before flying a small drone in controlled airspace?",
    choices: [
      "A basic certificate is enough below 400 feet",
      "An advanced certificate, air traffic control authorization, and a drone declared for that operation",
      "Registration only",
      "No permission, if you stay more than 30 m from people",
    ],
    answer: 1,
    explanation:
      "Transport Canada says controlled-airspace flight needs at least an advanced pilot certificate, a drone with the appropriate safety declaration, and authorization from the air navigation service provider. Section 901.69 requires a declaration for a small remotely piloted aircraft in controlled airspace. Section 901.71 requires the air traffic services authorization, and it must be easy for the pilot to reach during the flight.",
    source: "Transport Canada, Where to fly your drone; CAR 901.69 and 901.71",
    sourceUrl: "https://tc.canada.ca/en/aviation/drone-safety/learn-rules-you-fly-your-drone/where-fly-your-drone",
  },
  {
    id: "adv-people",
    level: "advanced",
    prompt:
      "Flying a small drone in visual line of sight less than 30 m, but not less than 5 m, horizontally from a person not involved in the flight is:",
    choices: [
      "Allowed with a basic certificate",
      "An advanced operation that needs a declaration for that model of system",
      "Banned at every altitude",
      "Allowed for any registered drone",
    ],
    answer: 1,
    explanation:
      "Section 901.69 says a pilot must not fly a small remotely piloted aircraft at a distance of less than 100 feet (30 m) but not less than 16.4 feet (5 m), measured horizontally, from any person not involved in the operation unless a declaration has been made for that model against the applicable requirements in Standard 922. Transport Canada lists this as an advanced operation (Standard 922.05).",
    source: "Canadian Aviation Regulations, section 901.69; Transport Canada, Advanced operations",
    sourceUrl:
      "https://tc.canada.ca/en/aviation/drone-safety/learn-rules-you-fly-your-drone/drone-operation-categories-pilot-certificates/advanced-operations",
  },
  {
    id: "adv-bvlos",
    level: "advanced",
    prompt:
      "Which pilot certificate level can include beyond visual line-of-sight flight, when the aircraft and the operation meet the extra requirements?",
    choices: ["Basic", "Advanced", "Level 1 Complex", "Any pilot who is at least 16"],
    answer: 2,
    explanation:
      "Transport Canada’s category table marks beyond visual line-of-sight as not available at Basic or Advanced, and available at Level 1 Complex only when the extra safety requirements are met. The minimum age for Level 1 Complex is 18.",
    source: "Transport Canada, Drone operation categories and pilot certificates",
    sourceUrl:
      "https://tc.canada.ca/en/aviation/drone-safety/learn-rules-you-fly-your-drone/drone-operation-categories-pilot-certificates",
  },
  {
    id: "adv-weight",
    level: "advanced",
    prompt: "In Transport Canada’s size classes, a small drone weighs:",
    choices: [
      "Under 250 g",
      "At least 250 g but not more than 25 kg",
      "More than 25 kg but not more than 150 kg",
      "More than 150 kg",
    ],
    answer: 1,
    explanation:
      "Microdrones weigh under 250 g. Small drones weigh at least 250 g but not more than 25 kg. Medium drones weigh more than 25 kg but not more than 150 kg and are an advanced-or-above privilege, not basic. The weight of the remote control is not included. Anything attached or carried, such as a camera, is part of the operating weight.",
    source: "Transport Canada, Drone operation categories and pilot certificates",
    sourceUrl:
      "https://tc.canada.ca/en/aviation/drone-safety/learn-rules-you-fly-your-drone/drone-operation-categories-pilot-certificates",
  },
];
