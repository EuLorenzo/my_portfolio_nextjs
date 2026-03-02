export type QuestionType = {
  id: number;
  question: string;
  options: {
    label: string;
    correct: boolean;
  }[];
  explanation: string;
  isCorrect: boolean | null;
};

export const GameQuestions: QuestionType[] = [
  {
    id: 1,
    question: "Qual é minha stack mais forte hoje?",
    options: [
      { label: "Angular + C#", correct: false },
      { label: "React + TypeScript", correct: true },
      { label: "Vue + Ruby", correct: false },
    ],
    explanation:
      "Tenho vários projetos focados em React e TypeScript no GitHub.",
    isCorrect: null,
  },
  {
    id: 2,
    question: "O que eu curto construir?",
    options: [
      { label: "Só algoritmos competitivos", correct: false },
      { label: "Só design (sem código)", correct: false },
      { label: "Interfaces, apps e produtos", correct: true },
    ],
    explanation:
      "Gosto de projetos completos com interface e funcionalidade real.",
    isCorrect: null,
  },
  {
    id: 3,
    question: "Onde meus projetos aparecem mais?",
    options: [
      { label: "Games 3D", correct: false },
      { label: "Web e Mobile", correct: true },
      { label: "IoT industrial", correct: false },
    ],
    explanation: "Tenho apps em React e também projetos em React Native.",
    isCorrect: null,
  },
];
