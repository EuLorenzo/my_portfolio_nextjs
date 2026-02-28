import type { FC } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
import { QuestionType } from "@/app/helpers/game-question";
import GameAnswers from "./game-answers";

interface GameQuestionsCardProps {
  question: QuestionType;
  selectedOption: string;
  setSelectedOption: (value: string) => void;
}

const GameQuestionsCard: FC<GameQuestionsCardProps> = ({
  question,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <RadioGroup
      className="mt-6 grid gap-3"
      value={selectedOption}
      onValueChange={setSelectedOption}
    >
      {question.options.map((opt, idx) => (
        <GameAnswers
          key={opt.label}
          value={opt.label}
          label={opt.label}
          selected={selectedOption === opt.label}
          index={idx}
        />
      ))}
    </RadioGroup>
  );
};

export default GameQuestionsCard;
