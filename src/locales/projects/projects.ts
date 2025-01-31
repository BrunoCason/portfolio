import { ProjectDetailsLanguage } from "./types";

export const title = {
  en: "Projects",
  pt: "Projetos",
};

export const description = {
  en: "Some of the noteworthy projects I have built:",
  pt: "Alguns dos projetos notáveis ​​que construí:",
};

export const project: ProjectDetailsLanguage = {
  en: [
    {
      name: "SushiTech",
      image: "images/sushitech.png",
      description:
        "Web-based order management system for Japanese restaurants. Key features: product, table, order, and profile management, along with an intuitive shopping cart to enhance the user experience.",
      url: "https://github.com/BrunoCason/SushiTech",
      technologies: [
        "React",
        "Typescript",
        "Tailwindcss",
        "Redux Toolkit",
        "Node.js",
        "Express.js",
        "Firebase",
      ],
    },
    {
      name: "Furniro",
      image: "images/furniro.png",
      description:
        "Development project for a furniture store website. The main goal is to faithfully recreate the original design of the mentioned pages, following the model established in Figma, providing enjoyable user experience.",
      url: "https://github.com/BrunoCason/Funiro",
      technologies: [
        "React",
        "Typescript",
        "Tailwindcss",
        "Redux",
        "AWS",
        "Axios",
        "Zod",
      ],
    },
    {
      name: "Plant Peace",
      image: "images/plant-peace.png",
      description:
        "Development project for a plant store website. The project includes a range of advanced features, such as user authentication, plant data management, dynamic product display, among others.",
      url: "https://github.com/BrunoCason/PlantPeace",
      technologies: [
        "React",
        "Typescript",
        "Tailwindcss",
        "Redux",
        "Babel",
        "Axios",
        "Firebase",
      ],
    },
  ],
  pt: [
    {
      name: "SushiTech",
      image: "images/sushitech.png",
      description:
        "Sistema web para gerenciamento de pedidos em restaurantes japoneses. Principais funcionalidades: gerenciamento de produtos, mesas, pedidos e perfil, além de um carrinho de compras intuitivo para facilitar a experiência do usuário.",
      url: "https://github.com/BrunoCason/SushiTech",
      technologies: [
        "React",
        "Typescript",
        "Tailwindcss",
        "Redux Toolkit",
        "Node.js",
        "Express.js",
        "Firebase",
      ],
    },
    {
      name: "Funiro",
      image: "images/furniro.png",
      description:
        "Projeto de desenvolvimento de site para uma loja de móveis, construído em React. O objetivo principal é recriar fielmente o design original das páginas mencionadas, seguindo o modelo estabelecido no Figma, proporcionando uma experiência de usuário intuitiva e agradável.",
      url: "https://github.com/BrunoCason/Funiro",
      technologies: [
        "React",
        "Typescript",
        "Tailwindcss",
        "Redux",
        "AWS",
        "Axios",
        "Zod",
      ],
    },
    {
      name: "Plant Peace",
      image: "images/plant-peace.png",
      description:
        "Projeto de desenvolvimento de um site para uma loja de plantas. O projeto inclui uma série de recursos avançados, como autenticação de usuários, gerenciamento de dados da planta, exibição dinâmica de produtos, entre outros.",
      url: "https://github.com/BrunoCason/PlantPeace",
      technologies: [
        "React",
        "Typescript",
        "Tailwindcss",
        "Redux",
        "Babel",
        "Axios",
        "Firebase",
      ],
    },
  ],
};
