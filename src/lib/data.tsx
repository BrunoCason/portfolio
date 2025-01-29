import { Github, Linkedin } from 'lucide-react';
import LogoJavascript from '/public/logos/icon-javascript.svg';
import LogoTypescript from '/public/logos/icon-typescript.svg';
import LogoReact from '/public/logos/icon-react.svg';
import LogoNextjs from '/public/logos/icon-nextjs.svg';
import LogoNodejs from '/public/logos/icon-nodejs.svg';
import LogoExpress from '/public/logos/icon-express.svg';
// import LogoExpressLight from '/public/logos/icon-express-light.svg';
import LogoTailwindcss from '/public/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/logos/icon-figma.svg';
import LogoGit from '/public/logos/icon-git.svg';

export const navLinks = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Experience",
    href: "#experience",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const socialLinks = [
  {
    icon: <Github />,
    url: 'https://github.com/BrunoCason',
  },
  {
    icon: <Linkedin />,
    url: 'https://www.linkedin.com/in/brunocason/',
  }
];

export const Skills = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    url: 'https://expressjs.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];

export const experience = [
  {
    company: 'Freelancer',
    position: 'Full Stack Developer',
    startDate: new Date(2022, 9),
    currentlyWorkHere: true,
    summary: [
      'Worked for various clients like Fiskil, Shosho, Crowe MacKay LLP.',
      'Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.',
    ],
  },
  {
    company: 'Compass.Uol',
    position: 'Front End Developer',
    startDate: new Date(2024, 2),
    endDate: new Date(2025, 0),
    summary: [
      'Acted as team lead in different projects.',
      'Brainstormed new ideas & gathered requirements for internal projects.',
      'Designed architecture of different projects (frontend + backend).',
      'Worked on enterprise-level projects for a variety of clients.',
      'Handled sprint planning & task distribution.',
    ],
  },
];