import { GameQuestions, QuestionType } from "@/app/helpers/game-question";
import { useMemo, type FC } from "react";

interface GameProgressProps {
  questionNumber: number;
}

const GameProgress: FC<GameProgressProps> = ({ questionNumber }) => {
  const total = GameQuestions.length;

  const progress = useMemo(() => {
    return Math.round(((questionNumber + 1) / total) * 100);
  }, [questionNumber, total]);

  return (
    <div>
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>
          Pergunta {questionNumber + 1} de {total}
        </span>
        <span>{progress}%</span>
      </div>

      <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
        <div
          className="h-full rounded-full bg-Myblue transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default GameProgress;
