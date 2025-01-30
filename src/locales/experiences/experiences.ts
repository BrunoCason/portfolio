import { ExperienceDetailsLanguage } from "./types";

export const title = {
  en: "Experiences",
  pt: "Experiências",
};

export const description = {
  en: "Here is a quick summary of my most recent experiences:",
  pt: "Aqui está um rápido resumo das minhas experiências mais recentes:",
};

export const experience: ExperienceDetailsLanguage = {
  en: [
    {
      company: "Freelancer",
      position: "Full Stack Developer",
      startDate: new Date(2022, 9),
      currentlyWorkHere: true,
      summary: [
        "Worked for various clients like Fiskil, Shosho, Crowe MacKay LLP.",
        "Worked with a variety of technologies, including React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, and others.",
      ],
    },
    {
      company: "Compass.Uol",
      position: "Front End Developer",
      startDate: new Date(2024, 2),
      endDate: new Date(2025, 0),
      currentlyWorkHere: false,
      summary: [
        "Acted as team lead in different projects.",
        "Brainstormed new ideas & gathered requirements for internal projects.",
        "Designed architecture of different projects (frontend + backend).",
        "Worked on enterprise-level projects for a variety of clients.",
        "Handled sprint planning & task distribution.",
      ],
    },
  ],
  pt: [
    {
      company: "Freelancer",
      position: "Desenvolvedor Full Stack",
      startDate: new Date(2022, 9),
      currentlyWorkHere: true,
      summary: [
        "Trabalhei para diversos clientes como Fiskil, Shosho, Crowe MacKay LLP.",
        "Trabalhei com uma variedade de tecnologias, incluindo React, Next.js, Typescript, Express.js, PostgreSQL, Tailwindcss, Mui, Firebase, Storybook, Cypress, entre outras.",
      ],
    },
    {
      company: "Compass.Uol",
      position: "Desenvolvedor Front End",
      startDate: new Date(2024, 2),
      endDate: new Date(2025, 0),
      currentlyWorkHere: false,
      summary: [
        "Atuei como líder de equipe em diferentes projetos.",
        "Brainstormed novas ideias e reuni requisitos para projetos internos.",
        "Projetei a arquitetura de diferentes projetos (frontend + backend).",
        "Trabalhei em projetos de grande porte para diversos clientes.",
        "Liderei o planejamento de sprints e distribuição de tarefas.",
      ],
    },
  ],
};
