import type { FC } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";
import { QuestionType } from "@/app/helpers/game-question";
import GameAnswers from "./game-answers";
import { shantell_sans } from "../fonts";

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
    <div>
      <p className="flex items-center gap-3 text-base md:text-lg">
        <span
          className={cn(
            shantell_sans.className,
            "text-white bg-Myblue rounded-full w-8 h-8 flex items-center justify-center shrink-0",
          )}
        >
          {question.id}
        </span>
        <span className="font-semibold">{question.question}</span>
      </p>
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
    </div>
  );
};

export default GameQuestionsCard;
