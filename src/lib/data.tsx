import { Github, Linkedin } from "lucide-react";
import LogoJavascript from "/public/logos/icon-javascript.svg";
import LogoTypescript from "/public/logos/icon-typescript.svg";
import LogoReact from "/public/logos/icon-react.svg";
import LogoNextjs from "/public/logos/icon-nextjs.svg";
import LogoNodejs from "/public/logos/icon-nodejs.svg";
import LogoExpress from "/public/logos/icon-express.svg";
import LogoExpressLight from "/public/logos/icon-express-light.svg";
import LogoTailwindcss from "/public/logos/icon-tailwindcss.svg";
import LogoFigma from "/public/logos/icon-figma.svg";
import LogoGit from "/public/logos/icon-git.svg";

import { SkillsDetails, ProjectDetails } from "@/lib/types";

export const socialLinks = [
  {
    icon: <Linkedin />,
    url: "https://www.linkedin.com/in/brunocason/",
  },
  {
    icon: <Github />,
    url: "https://github.com/BrunoCason",
  },
];

export const skills: SkillsDetails[] = [
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "React",
    logo: LogoReact,
    url: "https://react.dev/",
  },
  {
    label: "Next.js",
    logo: LogoNextjs,
    url: "https://nextjs.org/",
  },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Express.js",
    logo: LogoExpress,
    darkLogo: LogoExpressLight,
    url: "https://expressjs.com/",
  },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    darkLogo: LogoExpressLight,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Figma",
    logo: LogoFigma,
    url: "https://www.figma.com/",
  },
  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
];

export const projects: ProjectDetails[] = [
  {
    name: "Wingie",
    description:
      "A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.",
    url: "https://www.wingie.com",
    technologies: [
      "React",
      "Typescript",
      "React Bootstrap",
      "Firebase",
      "Express.js",
      "PostgreSQL",
      "Styled Components",
      "Redux",
    ],
  },
  {
    name: "Fiskil",
    description:
      "A platform for accessing real-time open banking and energy data to help you grow your business, backed with scalable back-end infrastructure.",
    url: "https://fiskil.com.au",
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Material UI",
      "Redux Toolkit",
      "React Query",
      "Express.js",
      "PostgreSQL",
      "Firebase",
      "AWS Amplify",
      "Cypress",
      "Storybook",
    ],
  },
  {
    name: "Pepehousing",
    description:
      "A platform for renting a flat or room in Poland. You may browse hundreds of verified deals, contact the vendor, and pay online in a simple and secure manner.",
    url: "https://pepehousing.com",
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Tailwindcss",
      "Redux Toolkit",
      "React Query",
      "Storybook",
    ],
  },
];
