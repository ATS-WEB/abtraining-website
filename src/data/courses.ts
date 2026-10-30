/**
 * Course catalog — the only file you need to edit for prices, dates, and checkout links.
 *
 * priceCad: Canadian dollars shown on this website. Leave null until confirmed.
 * currency: always "CAD". Do not enter a US-dollar amount in priceCad.
 * listedUsd: set only when Thinkific's public checkout page shows that USD price.
 * checkoutUrl: a Thinkific page that actually takes payment. Leave null otherwise.
 * nextDates: confirmed session dates as "YYYY-MM-DD". Leave [] if none are scheduled.
 *   Self-paced online courses can keep nextDates empty; the site then says "start anytime".
 *
 * TODO(owner): CAD prices are unknown for every course. Thinkific lists Basic at 99 USD and Advanced online at 249 USD. The old catalog also had USD amounts for three in-person courses (see comments). None of those are published as CAD.
 * TODO(owner): No confirmed session dates were available. The old site showed 1 November 2026 on every course; that placeholder is not used.
 */
export type CourseFormat = "online" | "in-person";
export type CourseType = "Regulation" | "Application";

export interface CourseExam {
  questions: number;
  minutes: number;
}

export interface Course {
  slug: string;
  name: string;
  type: CourseType;
  level: string;
  format: CourseFormat;
  priceCad: number | null;
  currency: "CAD";
  listedUsd: number | null;
  duration: string;
  checkoutUrl: string | null;
  nextDates: string[];
  description: string;
  ageRequirement: string;
  experienceRequirement: string;
  equipmentRequirement: string;
  documentRequirement: string;
  suggestedPreparation: string;
  included: string[];
  maxStudents: number | null;
  exam: CourseExam | null;
}

export const courses: Course[] = [

  // Drone Pilot Certificate – Basic Operations (Online)
  // TODO(owner): Confirm the CAD price. Thinkific currently lists 99 USD on this checkout. Do not
  // copy that number into priceCad unless you want it shown as Canadian dollars.
  // TODO(owner): Duration is self-paced, so no session date is published. Confirm that students can
  // start anytime.
  {
    "slug": "drone-pilot-certificate-basic-online",
    "name": "Drone Pilot Certificate – Basic Operations (Online)",
    "type": "Regulation",
    "level": "Basic",
    "format": "online",
    "priceCad": null,
    "currency": "CAD",
    "listedUsd": 99,
    "duration": "Self-paced",
    "checkoutUrl": "https://learn.abtraining.ca/courses/basic-exam-preparation",
    "nextDates": [],
    "description": "We prepare you for the Transport Canada Basic exam, online, at your own pace. You cover professional RPAS rules, safety, and what compliance looks like before exam day.",
    "ageRequirement": "Age 14+",
    "experienceRequirement": "None",
    "equipmentRequirement": "Computer with internet access",
    "documentRequirement": "Government-issued ID",
    "suggestedPreparation": "Review Transport Canada RPAS guidelines",
    "included": [
      "Transport Canada RPAS Basic Certificate preparation",
      "Comprehensive online learning modules",
      "Aviation regulations and airspace knowledge",
      "Safety protocols and risk management"
    ],
    "maxStudents": 20,
    "exam": {
      "questions": 35,
      "minutes": 60
    }
  },

  // Drone Pilot Certificate – Advanced Operations (Online)
  // TODO(owner): Confirm the CAD price. Thinkific currently lists 249 USD on this checkout. Do not
  // copy that number into priceCad unless you want it shown as Canadian dollars.
  // TODO(owner): Duration is self-paced, so no session date is published. Confirm that students can
  // start anytime.
  {
    "slug": "drone-pilot-certificate-advanced-online",
    "name": "Drone Pilot Certificate – Advanced Operations (Online)",
    "type": "Regulation",
    "level": "Advanced",
    "format": "online",
    "priceCad": null,
    "currency": "CAD",
    "listedUsd": 249,
    "duration": "Self-Paced",
    "checkoutUrl": "https://learn.abtraining.ca/courses/advanced-exam-preparation",
    "nextDates": [],
    "description": "Prepare online for advanced visual-line-of-sight flying, including the exam and night operations. You move through the material at your own pace.",
    "ageRequirement": "Age 16+",
    "experienceRequirement": "Basic Operations Certificate Recommended",
    "equipmentRequirement": "Laptop",
    "documentRequirement": "Government-issued ID",
    "suggestedPreparation": "Study Transport Canada Advanced Operations Guide",
    "included": [
      "Transport Canada RPAS Advanced Certificate preparation",
      "Complex airspace operations and controlled airspace procedures",
      "Night flight operations and lighting requirements",
      "Advanced risk assessment and mitigation strategies"
    ],
    "maxStudents": 15,
    "exam": {
      "questions": 50,
      "minutes": 60
    }
  },

  // Drone Pilot Certificate – Advanced Operations (In-Person)
  // TODO(owner): Confirm the CAD price. The old catalog stored 499 USD. That figure is not shown on
  // the site.
  // TODO(owner): Add the next in-person dates to nextDates (YYYY-MM-DD). The old site showed the
  // same placeholder for every course (1 November 2026). Those dates were not copied.
  // TODO(owner): There is a Thinkific product page, but it is not a checkout (it tells people to
  // email). It is intentionally not used as the Register link:
  // https://learn.abtraining.ca/courses/advanced-rpas-prep-1-on-1-training — confirm this is the
  // same course, then paste a real checkout URL into checkoutUrl if one exists.
  {
    "slug": "drone-pilot-certificate-advanced-in-person",
    "name": "Drone Pilot Certificate – Advanced Operations (In-Person)",
    "type": "Regulation",
    "level": "Advanced",
    "format": "in-person",
    "priceCad": null,
    "currency": "CAD",
    "listedUsd": null,
    "duration": "3 Days",
    "checkoutUrl": null,
    "nextDates": [],
    "description": "Sit with us for three days of advanced visual-line-of-sight training. You get direct instruction and time to work the problems out loud.",
    "ageRequirement": "Age 16+",
    "experienceRequirement": "Basic Operations Certificate recommended",
    "equipmentRequirement": "Laptop (Required) Drone and remote controller (Provided)",
    "documentRequirement": "Government-issued ID",
    "suggestedPreparation": "Review Basic Operations and Advanced Operations Guidelines",
    "included": [
      "Transport Canada RPAS Advanced Operations Examination preparation",
      "Controlled airspace procedures",
      "Night flight operations and lighting requirements",
      "Advanced risk assessment and mitigation strategies",
      "R-O-C Radio Operator Certificate"
    ],
    "maxStudents": 12,
    "exam": {
      "questions": 50,
      "minutes": 60
    }
  },

  // Transport Canada Flight Review - Advanced and Complex
  // TODO(owner): Confirm the CAD price. The old catalog stored 250 USD. That figure is not shown on
  // the site.
  // TODO(owner): Add the next flight-review dates to nextDates (YYYY-MM-DD). Placeholder 1 November
  // 2026 dates were not copied.
  // TODO(owner): Thinkific page https://learn.abtraining.ca/courses/book-flight-review-in-person is
  // not a checkout (it tells people to email). Paste a real checkout URL into checkoutUrl when one
  // exists.
  {
    "slug": "flight-review-advanced-and-complex",
    "name": "Transport Canada Flight Review - Advanced and Complex",
    "type": "Regulation",
    "level": "Advanced or Complex",
    "format": "in-person",
    "priceCad": null,
    "currency": "CAD",
    "listedUsd": null,
    "duration": "2 Hours",
    "checkoutUrl": null,
    "nextDates": [],
    "description": "This is the official two-hour flight review for an Advanced or Level 1 Complex certificate. A reviewer flies with you, checks your airspace work and your safety habits, and debriefs you before certification.",
    "ageRequirement": "Age 16 + (Advanced) or 18+ (Complex)",
    "experienceRequirement": "Small Remotely Piloted Aircraft System (RPAS) Examination or Level 1 Complex Examination",
    "equipmentRequirement": "Drone (Provided) and all associated flight documentation (Provided)",
    "documentRequirement": "Government-issued ID",
    "suggestedPreparation": "Study the Advanced Operations or Complex Operations Flight Review checklist and Transport Canada SFOC guidelines",
    "included": [
      "Live flight evaluation with certified reviewer",
      "Assessment of advanced or complex airspace navigation",
      "Verification of safety and compliance practices",
      "Debriefing and certification issuance"
    ],
    "maxStudents": null,
    "exam": {
      "questions": 50,
      "minutes": 60
    }
  },

  // Drone Pilot Certificate – Level 1 Complex Operations (In-Person)
  // TODO(owner): Confirm the CAD price. The old catalog stored 599 USD. That figure is not shown on
  // the site.
  // TODO(owner): Add the next course dates to nextDates (YYYY-MM-DD). Placeholder 1 November 2026
  // dates were not copied.
  // TODO(owner): Thinkific page https://learn.abtraining.ca/courses/complex1 is not a checkout (it
  // tells people to email). Confirm it is this Level 1 Complex course, then paste a real checkout
  // URL into checkoutUrl if one exists.
  {
    "slug": "drone-pilot-certificate-level-1-complex",
    "name": "Drone Pilot Certificate – Level 1 Complex Operations (In-Person)",
    "type": "Regulation",
    "level": "Complex",
    "format": "in-person",
    "priceCad": null,
    "currency": "CAD",
    "listedUsd": null,
    "duration": "5 Days",
    "checkoutUrl": null,
    "nextDates": [],
    "description": "Five days with us on complex missions, including beyond visual line of sight and Special Flight Operations Certificate procedures. You plan scenarios in the classroom, then take them to the field.",
    "ageRequirement": "Age 18+",
    "experienceRequirement": "Advanced Operations Certificate Required",
    "equipmentRequirement": "Laptop (Required) and Drone with extended range capability and VLOS line spotter (Provided)",
    "documentRequirement": "Government-issued ID",
    "suggestedPreparation": "Review Transport Canada Complex Operations regulations and SFOC process",
    "included": [
      "Expert-led classroom sessions",
      "Field demonstrations and simulations",
      "Complex operations scenario planning",
      "Hands-on compliance and safety exercises"
    ],
    "maxStudents": null,
    "exam": {
      "questions": 50,
      "minutes": 60
    }
  },

  // RPAS Mapping & Surveying Application Training
  // TODO(owner): Confirm the CAD price. The old catalog had no price for this course.
  // TODO(owner): Add the next course dates to nextDates (YYYY-MM-DD). Placeholder 1 November 2026
  // dates were not copied.
  // TODO(owner): Add a Thinkific checkout URL if this course can be bought online. Until then the
  // button goes to the contact form.
  // TODO(owner): The old database marked this course is_online=true, but the description is a field
  // course (aircraft, sensors, flight exercises). It is listed as in-person. Change format to
  // "online" if that is wrong.
  // TODO(owner): The old level text and the duration do not match (the level says a day range,
  // duration is a single length). Edit level or duration so they agree.
  {
    "slug": "rpas-mapping-and-surveying",
    "name": "RPAS Mapping & Surveying Application Training",
    "type": "Application",
    "level": "Beginner (2 Days)",
    "format": "in-person",
    "priceCad": null,
    "currency": "CAD",
    "listedUsd": null,
    "duration": "2 Days",
    "checkoutUrl": null,
    "nextDates": [],
    "description": "Turn a survey brief into a flight plan, a map, and numbers your project can use. You set ground sampling distance, overlap, and sidelap, and you work with RTK, PPK, or ground control. We cover coordinate systems, checks on orthomosaics and elevation models, and contours, cut-and-fill, and volumes for engineering, construction, and environmental work.",
    "ageRequirement": "Age 16+",
    "experienceRequirement": "Completion of ATS Advanced RPAS or equivalent",
    "equipmentRequirement": "ATS provided mapping drone (e.g. DJI Mavic 3 Enterprise) or approved equivalent",
    "documentRequirement": "Government-issued ID",
    "suggestedPreparation": "Review ATS Advanced RPAS course notes and bring any existing mapping needs or project ideas from your community.",
    "included": [
      "Hands-on mapping flight exercises",
      "Mission planning using real community scenarios",
      "Processing workflows in DJI Terra and QGIS",
      "Exporting orthomosaics, DEMs and volume reports"
    ],
    "maxStudents": null,
    "exam": null
  },

  // RPAS Photogrammetry Application Training
  // TODO(owner): Confirm the CAD price. The old catalog had no price for this course.
  // TODO(owner): Add the next course dates to nextDates (YYYY-MM-DD). Placeholder 1 November 2026
  // dates were not copied.
  // TODO(owner): Add a Thinkific checkout URL if this course can be bought online. Until then the
  // button goes to the contact form.
  // TODO(owner): The old database marked this course is_online=true, but the description is a field
  // course (aircraft, sensors, flight exercises). It is listed as in-person. Change format to
  // "online" if that is wrong.
  // TODO(owner): The old level text and the duration do not match (the level says a day range,
  // duration is a single length). Edit level or duration so they agree.
  {
    "slug": "rpas-photogrammetry",
    "name": "RPAS Photogrammetry Application Training",
    "type": "Application",
    "level": "Advanced (3-4 Days)",
    "format": "in-person",
    "priceCad": null,
    "currency": "CAD",
    "listedUsd": null,
    "duration": "3 Days",
    "checkoutUrl": null,
    "nextDates": [],
    "description": "Build a 3D model from drone photos, and know when you can trust it. You will see how camera geometry, focal length, sensor size, and ground sampling distance change accuracy. We plan nadir and oblique flights, handle image metadata, and walk through bundle adjustment, dense point clouds, meshes, and textured models. You learn to limit noise and doming, tie in ground control, and export orthomosaics, elevation models, and 3D models for GIS and CAD.",
    "ageRequirement": "Age 16+",
    "experienceRequirement": "Completion of an RPAS Advanced or equivalent operations course is recommended",
    "equipmentRequirement": "Multirotor or fixed-wing RPAS with mapping-grade RGB camera (or training fleet equivalent)",
    "documentRequirement": "Government-issued ID",
    "suggestedPreparation": "Review basic RPAS mapping concepts, coordinate systems, and have familiarity with at least one mapping or photogrammetry software package.",
    "included": [
      "Flight planning for nadir and oblique image capture",
      "Photogrammetry project setup and data management",
      "Dense point cloud, mesh and orthomosaic generation",
      "Quality control and accuracy assessment of photogrammetric outputs"
    ],
    "maxStudents": null,
    "exam": null
  },

  // RPAS LiDAR Application Training
  // TODO(owner): Confirm the CAD price. The old catalog had no price for this course.
  // TODO(owner): Add the next course dates to nextDates (YYYY-MM-DD). Placeholder 1 November 2026
  // dates were not copied.
  // TODO(owner): Add a Thinkific checkout URL if this course can be bought online. Until then the
  // button goes to the contact form.
  // TODO(owner): The old database marked this course is_online=true, but the description is a field
  // course (aircraft, sensors, flight exercises). It is listed as in-person. Change format to
  // "online" if that is wrong.
  // TODO(owner): The old level text and the duration do not match (the level says a day range,
  // duration is a single length). Edit level or duration so they agree.
  {
    "slug": "rpas-lidar",
    "name": "RPAS LiDAR Application Training",
    "type": "Application",
    "level": "Advanced (3-4 Days)",
    "format": "in-person",
    "priceCad": null,
    "currency": "CAD",
    "listedUsd": null,
    "duration": "4 Days",
    "checkoutUrl": null,
    "nextDates": [],
    "description": "Fly a LiDAR payload and come home with a point cloud you can defend. The sensor, GNSS, and IMU work together to place every return. You plan altitude, scan angle, overlap, and terrain following for the density the job needs. We classify ground and other returns in LAS and LAZ, build elevation models, read cross-sections, and check accuracy against control.",
    "ageRequirement": "Age 18+",
    "experienceRequirement": "Completion of ATS Advanced RPAS and Mapping & Surveying Applications (or equivalent experience)",
    "equipmentRequirement": "ATS LiDAR drone platform (e.g. Matrice with LiDAR payload) or approved equivalent",
    "documentRequirement": "Government-issued ID",
    "suggestedPreparation": "Review Advanced RPAS and Mapping & Surveying course materials and bring example areas where LiDAR data would be useful.",
    "included": [
      "LiDAR mission planning and flight exercises",
      "Hands-on point cloud processing (LAS/LAZ)",
      "Ground and vegetation classification workflows",
      "Creation of DEMs, DSMs and simple 3D analysis in QGIS and other tools"
    ],
    "maxStudents": null,
    "exam": null
  },

  // RPAS Thermal Imaging Application Training
  // TODO(owner): Confirm the CAD price. The old catalog had no price for this course.
  // TODO(owner): Add the next course dates to nextDates (YYYY-MM-DD). Placeholder 1 November 2026
  // dates were not copied.
  // TODO(owner): Add a Thinkific checkout URL if this course can be bought online. Until then the
  // button goes to the contact form.
  // TODO(owner): The old database marked this course is_online=true, but the description is a field
  // course (aircraft, sensors, flight exercises). It is listed as in-person. Change format to
  // "online" if that is wrong.
  // TODO(owner): The old level text and the duration do not match (the level says a day range,
  // duration is a single length). Edit level or duration so they agree.
  {
    "slug": "rpas-thermal-imaging",
    "name": "RPAS Thermal Imaging Application Training",
    "type": "Application",
    "level": "Advanced (3-4 Days)",
    "format": "in-person",
    "priceCad": null,
    "currency": "CAD",
    "listedUsd": null,
    "duration": "3 Days",
    "checkoutUrl": null,
    "nextDates": [],
    "description": "Learn to read heat from the air and to write a report someone can use. Thermal sensors differ from colour cameras in resolution, field of view, spectral range, and whether the data is radiometric. We cover emissivity, reflected temperature, weather, and how you set palette, gain, and level. You plan flights for roofs, solar arrays, industrial assets, and search, then pull out temperatures and anomalies.",
    "ageRequirement": "Age 18+",
    "experienceRequirement": "Completion of an RPAS Advanced or equivalent operations course is recommended",
    "equipmentRequirement": "RPAS platform with integrated or payload-mounted thermal sensor (or training fleet equivalent)",
    "documentRequirement": "Government-issued ID",
    "suggestedPreparation": "Review basic thermography concepts, manufacturer documentation for the thermal sensor in use, and any existing inspection or reporting standards relevant to your sector.",
    "included": [
      "Configuration and calibration of RPAS thermal sensors",
      "Flight paths and mission planning for thermal inspections",
      "Importing and analyzing thermal data for anomaly detection",
      "Producing structured thermal inspection reports for stakeholders"
    ],
    "maxStudents": null,
    "exam": null
  },

  // RPAS Environmental Monitoring Application Training
  // TODO(owner): Confirm the CAD price. The old catalog had no price for this course.
  // TODO(owner): Add the next course dates to nextDates (YYYY-MM-DD). Placeholder 1 November 2026
  // dates were not copied.
  // TODO(owner): Add a Thinkific checkout URL if this course can be bought online. Until then the
  // button goes to the contact form.
  // TODO(owner): The old database marked this course is_online=true, but the description is a field
  // course (aircraft, sensors, flight exercises). It is listed as in-person. Change format to
  // "online" if that is wrong.
  // TODO(owner): The old level text and the duration do not match (the level says a day range,
  // duration is a single length). Edit level or duration so they agree.
  {
    "slug": "rpas-environmental-monitoring",
    "name": "RPAS Environmental Monitoring Application Training",
    "type": "Application",
    "level": "Advanced (3-4 Days)",
    "format": "in-person",
    "priceCad": null,
    "currency": "CAD",
    "listedUsd": null,
    "duration": "3 Days",
    "checkoutUrl": null,
    "nextDates": [],
    "description": "Design a survey you can fly again, so change on land, water, and vegetation is visible. You choose RGB, multispectral, or thermal sensors, set ground sampling distance and overlap, and plan flights over sensitive ground and water. We log the field work, think about sampling, and bring the pictures into GIS as indices, classes, and change maps for assessment and compliance.",
    "ageRequirement": "Age 18+",
    "experienceRequirement": "Completion of an RPAS Advanced operations course is required",
    "equipmentRequirement": "RPAS platform capable of mapping flights with RGB (and optionally multispectral or thermal) sensors, or training fleet equivalent.",
    "documentRequirement": "Government-issued ID",
    "suggestedPreparation": "Review existing environmental monitoring standards or guidelines relevant to your sector and any previous mapping or monitoring projects you have participated in.",
    "included": [
      "Design of repeatable RPAS-based environmental monitoring surveys",
      "Acquisition of multi-temporal imagery for land, water and vegetation assessment",
      "Basic processing and change detection workflows in mapping/GIS software",
      "Preparation of environmental monitoring outputs suitable for technical reports"
    ],
    "maxStudents": null,
    "exam": null
  },

  // RPAS Greenhouse Gas Emissions Application Training
  // TODO(owner): Confirm the CAD price. The old catalog had no price for this course.
  // TODO(owner): Add the next course dates to nextDates (YYYY-MM-DD). Placeholder 1 November 2026
  // dates were not copied.
  // TODO(owner): Add a Thinkific checkout URL if this course can be bought online. Until then the
  // button goes to the contact form.
  // TODO(owner): The old database marked this course is_online=true, but the description is a field
  // course (aircraft, sensors, flight exercises). It is listed as in-person. Change format to
  // "online" if that is wrong.
  // TODO(owner): The old level text and the duration do not match (the level says a day range,
  // duration is a single length). Edit level or duration so they agree.
  {
    "slug": "rpas-greenhouse-gas-emissions",
    "name": "RPAS Greenhouse Gas Emissions Application Training",
    "type": "Application",
    "level": "Advanced (3-4 Days)",
    "format": "in-person",
    "priceCad": null,
    "currency": "CAD",
    "listedUsd": null,
    "duration": "3 Days",
    "checkoutUrl": null,
    "nextDates": [],
    "description": "Use a drone to find greenhouse gas leaks and to screen a site. You learn how the sensor and the plume behave, and how wind and aircraft stability change the plan. We set up leak detection, fence-line, and area surveys, including simple passes up through the plume and across the site. Then we calibrate, log concentration against GPS, and map what you found back to the equipment on the ground.",
    "ageRequirement": "Age 18+",
    "experienceRequirement": "Completion of an RPAS Advanced operations course is required",
    "equipmentRequirement": "RPAS platform with suitable GHG sensing payload (e.g. methane sensor) or training fleet equivalent, plus standard visual navigation camera.",
    "documentRequirement": "Government-issued ID",
    "suggestedPreparation": "Review any existing greenhouse gas monitoring requirements, facility diagrams and safety procedures for the types of sites you expect to survey.",
    "included": [
      "Configuration and operational checks for RPAS-mounted GHG sensors",
      "Flight planning for leak detection, fence-line and area-source surveys",
      "Data synchronization, profiling and anomaly mapping workflows",
      "Structuring GHG survey results for engineering, environmental or regulatory audiences"
    ],
    "maxStudents": null,
    "exam": null
  },

  // RPAS Search & Rescue Application Training
  // TODO(owner): Confirm the CAD price. The old catalog had no price for this course.
  // TODO(owner): Add the next course dates to nextDates (YYYY-MM-DD). Placeholder 1 November 2026
  // dates were not copied.
  // TODO(owner): Add a Thinkific checkout URL if this course can be bought online. Until then the
  // button goes to the contact form.
  // TODO(owner): The old database marked this course is_online=true, but the description is a field
  // course (aircraft, sensors, flight exercises). It is listed as in-person. Change format to
  // "online" if that is wrong.
  // TODO(owner): The old level text and the duration do not match (the level says a day range,
  // duration is a single length). Edit level or duration so they agree.
  {
    "slug": "rpas-search-and-rescue",
    "name": "RPAS Search & Rescue Application Training",
    "type": "Application",
    "level": "Advanced (3-4 Days)",
    "format": "in-person",
    "priceCad": null,
    "currency": "CAD",
    "listedUsd": null,
    "duration": "3 Days",
    "checkoutUrl": null,
    "nextDates": [],
    "description": "Plan a search from the air and hand a clear picture to the team on the ground. You will fly line and grid patterns, choose visual or thermal sensors, and feed live video and maps into search-and-rescue command. We cover airspace, communications, crew roles, checklists, evidence, deconfliction, and the debrief.",
    "ageRequirement": "Age 18+",
    "experienceRequirement": "Completion of an RPAS Advanced operations course is required; prior experience with low-level flight and basic night operations is recommended.",
    "equipmentRequirement": "RPAS platform with high-quality visual and/or thermal imaging system",
    "documentRequirement": "Government-issued ID",
    "suggestedPreparation": "Review local or organizational SAR procedures, RPAS aircraft manuals, and relevant airspace/NOTAM processes for emergency operations.",
    "included": [
      "Mission planning and search pattern design for RPAS-based SAR",
      "Live-flight SAR training scenarios with structured debriefs",
      "Use of mapping and live video tools to support ground teams and command",
      "Standardized checklists, logs and reporting templates for RPAS SAR deployments"
    ],
    "maxStudents": null,
    "exam": null
  },

];
