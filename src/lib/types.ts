import type { StaticImageData } from "next/image";

export type SkillsDetails = {
  label: string;
  logo: string | StaticImageData;
  darkLogo?: string | StaticImageData;
  url: string;
};

export type ProjectDetails = {
  name: string;
  description: string;
  url: string;
  technologies: string[];
};
