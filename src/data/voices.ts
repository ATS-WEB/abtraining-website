/**
 * Student and community voices. Quotes are copied from the previous website's
 * Google reviews. Do not invent quotes, outcomes, or video.
 *
 * TODO(owner): Set `video` to a file in public/media/ when you have a short
 * story from that person, with their permission. Leave it empty until then.
 */

export interface Voice {
  id: string;
  name: string;
  when: string;
  quote: string;
  /** Public media path, or empty when no footage exists. */
  video: string;
  poster: string;
}

export const voices: Voice[] = [
  {
    id: "justin-goldstein",
    name: "Justin Goldstein",
    when: "Google review, 2 years ago",
    quote:
      "Ola and the team did a great job preparing me for the Advanced RPAS exam. Highly recommend!",
    video: "",
    poster: "",
  },
  {
    id: "jt-smith",
    name: "JT Smith",
    when: "Google review, 2 years ago",
    quote:
      "I'm currently taking this course and it's so much fun. Thank you to Ola, Darcy and Chris for making it easy and fun to understand the course. So much visual and hands-on throughout the course. Chris was also very helpful through the practices and lectures. I would definitely recommend to learn from these awesome guys. I'm so grateful to learn about drones and more.",
    video: "",
    poster: "",
  },
  {
    id: "daniel-pele",
    name: "Daniel Pele",
    when: "Google review, 3 years ago",
    quote:
      "I recently completed the advanced drone course with Aboriginal Training Services Ltd., and it was an excellent experience from start to finish. The instructors were knowledgeable, approachable, and made complex topics easy to understand. The course was well-organized, combining theory with hands-on flying, which helped build both confidence and skill. I highly recommend Aboriginal Training Services Ltd. to anyone looking to advance their drone expertise!",
    video: "",
    poster: "",
  },
  {
    id: "tim",
    name: "Tim",
    when: "Google review, posted as T M, 2 years ago",
    quote:
      "I highly recommend Aboriginal Training Services for all your drone training needs! The team, led by Darcy, is exceptional. Magid and Milly were phenomenal facilitators who made the learning experience engaging and enjoyable. Olaolu was a great instructor, providing clear and concise guidance throughout the course. Had a blast learning how to fly and operate a drone. Lena also did an outstanding job. What truly sets Aboriginal Training Services apart is that it is 100% Indigenous-owned, which adds a unique and valuable perspective to their training programs. The commitment to excellence and community is evident in every aspect of their service. Thank you ATS! – Tim",
    video: "",
    poster: "",
  },
];

/** Career lines taken from the ATS & HK portfolio. Not placement statistics. */
export const careerLines = [
  "Leaders, innovators, entrepreneurs, and strong youth within Indigenous communities.",
  "Jobs, skills, self-determination, and environmental protection.",
  "500+ students trained across Indigenous communities, government, and industry.",
] as const;
