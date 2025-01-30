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
        "Developed an order management system for Japanese restaurants, featuring functionalities such as a shopping cart and management of products, tables, and orders.",
        "Created customized landing pages for different market niches, focusing on responsive design and conversion optimization.",
      ],
    },
    {
      company: "Compass.Uol",
      position: "Front End Developer",
      startDate: new Date(2024, 2),
      endDate: new Date(2025, 0),
      currentlyWorkHere: false,
      summary: [
        "Worked with the client Natura, focusing on improving and solving issues in the Social Commerce project.",
        "Main responsibility: optimizing existing systems by resolving technical issues and implementing adjustments to enhance both performance and user experience.",
        "Collaborated with cross-functional teams to identify, prioritize, and resolve issues, ensuring the delivery of efficient and high-quality systems.",
        "Worked in alignment with the client's needs, using performance metrics and feedback to implement continuous improvements.",
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
        "Desenvolvi um sistema de gerenciamento de pedidos para restaurantes japoneses, com funcionalidades comocarrinho de compras e gerenciamento de produtos, mesas e pedidos.",
        "Desenvolvi landing pages personalizadas para diferentes nichos de mercado, focando em design responsivo e otimização de conversões",
      ],
    },
    {
      company: "Compass.Uol",
      position: "Desenvolvedor Front End",
      startDate: new Date(2024, 2),
      endDate: new Date(2025, 0),
      currentlyWorkHere: false,
      summary: [
        "Trabalhei com o cliente Natura, focando na melhoria e resolução de problemas do projeto de Social Commerce.",
        "Principal responsabilidade: otimizar os sistemas existentes, resolvendo questões técnicas e implementando ajustes para aprimorar tanto o desempenho quanto a experiência do usuário.",
        "Colaborei com equipes multifuncionais para identificar, priorizar e solucionar problemas, garantindo a entrega de sistemas eficientes e de alta qualidade.",
        "Atuação em alinhamento com as necessidades do cliente, utilizando métricas de desempenho e feedback para implementar melhorias contínuas.",
      ],
    },
  ],
};
