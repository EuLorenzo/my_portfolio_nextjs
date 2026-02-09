export const projectsArray: ProjectType[] = [
  {
    title: "Miniblog",
    description:
      "Uma aplicação web de blog construída com React, permitindo criar, editar e visualizar posts. Usada para praticar estrutura de componentes, gerenciamento de estado e integração com APIs (backend pode ser fictício ou real).",
    imagesSrc: ["/projects/pixar_lamp.png"],
    imagePosition: "right",
    skills: [
      "Firebase",
      "React",
      "Componentes funcionais",
      "JavaScript",
      "Hooks",
      "TypeScript",
      "Integração API",
      "Pesquisas",
    ],
    link: "https://miniblog.vercel.app/",
  },
  {
    title: "Santander Dev Week 2025",
    description:
      "API REST em Java criada durante a Santander Dev Week 2025 para praticar Spring Framework, modelando um domínio bancário e preparando o projeto para deploy em uma plataforma PaaS (via Procfile).",
    imagesSrc: ["/projects/java_logo.png"],
    imagePosition: "right",
    skills: [
      "Java",
      "Spring Framework",
      "API REST",
      "Modelagem de domínio",
      "UML (Diagrama de Classes)",
      "Gradle",
      "Deploy (Procfile)",
      "Backend",
    ],
    link: "https://github.com/EuLorenzo/santander-dev-week-2025",
  },
  {
    title: "Weather App",
    description:
      "Aplicativo web de clima construído com React, que consulta uma API de previsão do tempo com base na localização ou cidade digitada pelo usuário.",
    imagesSrc: ["/projects/sun.png"],
    imagePosition: "left",
    skills: [
      "TypeScript",
      "Hooks",
      "Responsividade",
      "consumo de APIs externas",
      "React",
    ],
    link: "https://miniblog.vercel.app/",
  },
  {
    title: "Sudoku_java",
    description:
      "Jogo de Sudoku desenvolvido em Java durante o Bootcamp Back-End com Java (Santander 2025), com foco em lógica do jogo, validações de jogadas e prática de Programação Orientada a Objetos.",
    imagesSrc: ["/projects/brain.png"],
    imagePosition: "left",
    skills: [
      "Java",
      "POO",
      "Estruturas de dados",
      "Lógica de programação",
      "Validação de regras do Sudoku",
      "Tratamento de entradas",
    ],
    link: "https://github.com/EuLorenzo/Sudoku_java",
  },
  {
    title: "Nlw Experts",
    description:
      "Projeto desenvolvido durante a Next Level Week (Rocketseat), com foco em iniciação no desenvolvimento web usando JavaScript e páginas dinâmicas.",
    imagesSrc: ["/projects/computer.png"],
    imagePosition: "right",
    skills: ["HTML", "CSS", "JavaScript"],
    link: "https://miniblog.vercel.app/",
  },
];

export interface ProjectType {
  title: string;
  description: string;
  imagesSrc: string[];
  imagePosition: "left" | "right";
  skills: string[];
  link: string;
}
