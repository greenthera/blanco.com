import clinicConsultation from "../assets/clinic-consultation-room.webp";
import clinicChairPortrait from "../assets/clinic-dental-chair-portrait.webp";
import clinicEntrance from "../assets/clinic-entrance-night.webp";
import clinicOperatory from "../assets/clinic-operatory-glass-room.webp";
import clinicTreatmentChair from "../assets/clinic-treatment-chair.webp";
import clinicTreatmentWide from "../assets/clinic-treatment-room-wide.webp";
import patientSmile01 from "../assets/patient-smile-restoration-01.webp";
import patientSmile02 from "../assets/patient-smile-restoration-02.webp";
import patientSmile03 from "../assets/patient-smile-restoration-03.webp";
import patientSmile04 from "../assets/patient-smile-restoration-04.webp";
import patientSmile05 from "../assets/patient-smile-restoration-05.webp";
import patientSmile06 from "../assets/patient-smile-restoration-06.webp";

export const clinic = {
  phoneHref: "tel:+918401797331",
  phoneDisplay: "+91 84017 97331",
  whatsappNumber: "918401797331",
  mapsUrl: "https://share.google/9D399bR1phLrPRklu",
  instagramUrl: "https://www.instagram.com/blanco.dentalsurat/",
} as const;

export const navigationItems = [
  "About",
  "Treatments",
  "Doctor",
  "Gallery",
  "Instagram",
  "Contact",
] as const;

export const serviceGroups = [
  {
    number: "01",
    title: "Everyday Care",
    services: [
      "Consultation",
      "RVG (Dental X-ray)",
      "Scaling and Polishing",
      "Filling and Restoration",
      "Extraction",
      "Wisdom Teeth Extraction",
    ],
  },
  {
    number: "02",
    title: "Restore & Replace",
    services: [
      "Root Canal",
      "Dental Crowns and Bridges",
      "Ceramic Crowns",
      "Dental Implants",
      "Dentures",
      "Artificial Teeth",
    ],
  },
  {
    number: "03",
    title: "Cosmetic Dentistry",
    services: [
      "Smile Designing",
      "Veneers",
      "Bleaching",
      "Teeth Whitening",
      "Cosmetic Dentistry",
      "Tooth Jewellery",
    ],
  },
  {
    number: "04",
    title: "Specialist Care",
    services: ["Braces", "Gum Surgery"],
  },
] as const;

export const serviceOptions = serviceGroups.flatMap((group) => group.services);

export type GalleryImage = { src: string; alt: string; caption: string };

export const clinicImages: GalleryImage[] = [
  {
    src: clinicEntrance,
    alt: "Blanco The Dental House illuminated clinic entrance",
    caption: "Welcome to Blanco",
  },
  {
    src: clinicTreatmentWide,
    alt: "Bright Blanco dental treatment room",
    caption: "Treatment room",
  },
  {
    src: clinicConsultation,
    alt: "Blanco private consultation room",
    caption: "Consultation space",
  },
  {
    src: clinicChairPortrait,
    alt: "Modern dental chair and equipment at Blanco",
    caption: "Modern equipment",
  },
  {
    src: clinicOperatory,
    alt: "Glass-partitioned Blanco dental operatory",
    caption: "Clinical care",
  },
  {
    src: clinicTreatmentChair,
    alt: "Blanco dental chair prepared for treatment",
    caption: "Comfort-led care",
  },
];

export const patientImages: GalleryImage[] = [
  {
    src: patientSmile01,
    alt: "Blanco patient smile restoration case one",
    caption: "Smile restoration",
  },
  {
    src: patientSmile02,
    alt: "Blanco patient smile restoration case two",
    caption: "Smile restoration",
  },
  {
    src: patientSmile03,
    alt: "Blanco patient smile restoration case three",
    caption: "Full smile rehabilitation",
  },
  {
    src: patientSmile04,
    alt: "Blanco patient smile restoration case four",
    caption: "Fixed dental restoration",
  },
  {
    src: patientSmile05,
    alt: "Blanco patient smile restoration case five",
    caption: "Dental rehabilitation",
  },
  {
    src: patientSmile06,
    alt: "Blanco patient laminate treatment case",
    caption: "Laminates",
  },
];

export const galleryImages = [...clinicImages, ...patientImages];
