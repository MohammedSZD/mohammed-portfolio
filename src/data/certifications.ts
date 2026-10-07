import type { Certification } from "@/lib/types";

/** Add new certifications to the top or bottom of this list — order is display order. */
export const certifications: Certification[] = [
  { id: "graphic-design", title: "Graphic Design Certified", issuer: "Development & Training Academy", year: "2024" },
  { id: "itil4", title: "ITIL 4 Foundation" },
  { id: "responsive-web", title: "Responsive Web Design", issuer: "freeCodeCamp", year: "2023" },
  { id: "cwdsa", title: "Certified Web Designer (CWDSA)", issuer: "HET Programming Academy", year: "2020" },
];
