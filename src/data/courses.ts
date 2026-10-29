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
    "description": "Essential online regulatory training covering professional RPAS regulations, safety protocols, and basic compliance requirements. Excellent preparation for the Drone Pilot Certificate - Basic Operations examination.",
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
    "description": "Comprehensive online regulatory training for advanced VLOS operations including examination preparation questions and night operations.",
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
    "description": "In-person advanced regulatory training for VLOS operations with expert instruction and interactive learning.",
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
    "description": "An official 2-hour flight review assessment required for either the Drone Pilot Certificate - Advanced Operations or the Drone Pilot Certificate - Level 1 Complex Operations certifications under Transport Canada regulations.",
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
    "description": "In-person training focused on operational readiness for complex RPAS missions, including BVLOS and SFOC-based procedures.",
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
    "description": "A technical applications course focused on end-to-end RPAS mapping workflows. Students learn how to translate survey specifications into flight plans, select ground sampling distance (GSD), configure overlap and sidelap, and work with RTK/PPK or ground control points for accuracy control. The course covers coordinate reference systems, datum and projection choices, quality checks on orthomosaics and elevation models, and the generation of contours, cut/fill maps and volume calculations suitable for engineering, construction and environmental projects.",
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
    "description": "A detailed applications course on image-based 3D reconstruction using RPAS platforms. Students learn how camera geometry, focal length, sensor size and GSD influence accuracy and model quality, and how to design flight plans for nadir and oblique capture. The course covers image organization, EXIF and metadata handling, bundle adjustment concepts, dense point cloud generation, mesh and textured model creation, and strategies to minimize noise, doming and reconstruction artifacts. Emphasis is placed on quality control, ground control integration, and exporting orthomosaics, DEM/DSM and 3D models for use in GIS and CAD environments.",
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
    "description": "An advanced applications course centered on LiDAR-equipped RPAS platforms. Students learn how LiDAR sensors, GNSS and IMU systems work together to generate georeferenced point clouds, how to plan missions for required point density and swath overlap, and how to manage flight altitude, scan angle and terrain following. The course introduces LAS/LAZ data management, classification of ground and non-ground returns, generation of high-resolution DEM/DSM products, cross-section and profile analysis, and techniques for validating accuracy against control points or reference surfaces.",
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
    "description": "A technical applications course focused on RPAS-based thermal imaging. Students learn how thermal sensors differ from RGB cameras, including resolution, field of view, spectral range and radiometric vs non-radiometric data. The course covers emissivity, reflected apparent temperature, environmental effects on measurements, and configuration of palettes, gain and level settings. Practical modules address flight planning for roof inspections, solar array inspection, industrial asset monitoring and search scenarios, as well as importing thermal datasets into analysis software to extract temperature statistics, identify anomalies and generate clear, defensible reports.",
    "ageRequirement": "Age 18+",
    "experienceRequirement": "Completion of an RPAS Advanced or equivalent operations course is recommended",
    "equipmentRequirement": "RPAS platform with integrated or payload-mounted thermal sensor (or training fleet equivalent)",
    "documentRequirement": "Government-issued ID",
    "suggestedPreparation": "Review basic thermography concepts, manufacturer documentation for the thermal sensor in use, and any existing inspection or reporting standards relevant to your sector.",
    "included": [
      "Configuration and calibration of RPAS thermal sensors",
      "Flight profiles and mission planning for thermal inspections",
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
    "description": "An advanced applications course focused on the use of RPAS for environmental monitoring of land, water and vegetation. Students learn how to design repeatable survey campaigns, select appropriate sensors (RGB, multispectral and thermal), set GSD and overlap for change detection, and plan flights over sensitive terrain and water bodies. The course covers field data logging, basic sampling design, time-series acquisition, and integration of drone products into GIS workflows to generate indices, classifications and change maps that support environmental assessment and compliance reporting.",
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
    "description": "An advanced applications course focused on the use of RPAS platforms for greenhouse gas (GHG) emission surveys. Students learn the fundamentals of gas sensing payloads, plume behavior, wind and stability considerations, and how to design flight plans for leak detection, fence-line surveys and area-source screening. The course covers sensor warm-up and calibration procedures, logging and synchronizing concentration data with GPS, basic vertical and horizontal profiling techniques, and post-processing workflows to map anomalies, correlate readings with site infrastructure and generate structured findings for technical stakeholders.",
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
    "description": "An advanced applications course focused on the use of RPAS in search and rescue operations. Students learn mission planning for line, and grid patterns, sensor selection and configuration for visual and thermal detection, and integration of live video and mapping products into SAR command workflows. The course covers airspace and communications considerations, crew roles, checklists, evidence handling, deconfliction, and post-mission debriefing to improve operational effectiveness.",
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
