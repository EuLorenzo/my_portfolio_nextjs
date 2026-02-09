export type GameType = {
  question: string;
  options: {
    label: string;
    correct: boolean;
  }[];
  explanation: string;
};

export const GameQuestion = [
  {
    question: "Qual é minha stack mais forte hoje?",
    options: [
      { label: "React + TypeScript", correct: true },
      { label: "Angular + C#", correct: false },
      { label: "Vue + Ruby", correct: false },
    ],
    explanation:
      "Tenho vários projetos focados em React e TypeScript no GitHub.",
  },
  {
    title: "O que eu curto construir?",
    options: [
      { label: "Interfaces, apps e produtos", correct: true },
      { label: "Só algoritmos competitivos", correct: false },
      { label: "Só design (sem código)", correct: false },
    ],
    explanation:
      "Gosto de projetos completos com interface e funcionalidade real.",
  },
  {
    title: "Onde meus projetos aparecem mais?",
    options: [
      { label: "Web e Mobile", correct: true },
      { label: "Games 3D", correct: false },
      { label: "IoT industrial", correct: false },
    ],
    explanation: "Tenho apps em React e também projetos em React Native.",
  },
];
