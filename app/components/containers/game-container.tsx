"use client";

import { GameQuestion } from "@/app/helpers/game-question";
import { useMemo, useState } from "react";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { libre_baskerville, shantell_sans } from "../fonts";
import { cn } from "@/lib/utils";
import GameQuestionsCard from "../about/game-questions-card";

const GameContainer = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const question = GameQuestion[questionNumber];
  const total = GameQuestion.length;

  const progress = useMemo(() => {
    return Math.round(((questionNumber + 1) / total) * 100);
  }, [questionNumber, total]);

  const verifyAnswer = () => {
    // se já mostrou feedback, avança
    if (isCorrect !== null) {
      setQuestionNumber((prev) => prev + 1);
      setSelectedOption("");
      setIsCorrect(null);
      return;
    }

    const selectedOptionObj = question.options.find(
      (option) => option.label === selectedOption,
    );

    setIsCorrect(selectedOptionObj?.correct === true);
  };

  const isLastQuestion = questionNumber >= total - 1;

  return (
    <div
      className={cn(
        "sm:mx-auto max-w-200 h-137.5 flex flex-col justify-center rounded-2xl border bg-card shadow-sm backdrop-blur p-8",
      )}
    >
      <div className="space-y-2">
        <h1
          className={cn(
            libre_baskerville.className,
            "text-2xl text-center font-normal",
          )}
        >
          Quiz rápido!
        </h1>

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

      {/* Body */}
      <div className="mt-6">
        {isCorrect !== null ? (
          <div className="rounded-xl border p-5 text-center">
            <p className={cn(shantell_sans.className, "text-lg")}>
              {isCorrect ? "Acertouuu! 🎉" : "Erroooouu! 😅"}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {isCorrect
                ? "Boa! Você mandou bem."
                : "Sem problemas — próxima você acerta."}
            </p>
          </div>
        ) : (
          <>
            {/* Question */}
            <p className="flex items-center gap-3 text-base md:text-lg">
              <span
                className={cn(
                  shantell_sans.className,
                  "text-white bg-Myblue rounded-full w-8 h-8 flex items-center justify-center shrink-0",
                )}
              >
                {questionNumber + 1}
              </span>
              <span className="font-semibold">{question.question}</span>
            </p>

            {/* Options */}
            <RadioGroup
              className="mt-6 grid gap-3"
              value={selectedOption}
              onValueChange={setSelectedOption}
            >
              {question.options.map((opt, idx) => (
                <GameQuestionsCard
                  key={opt.label}
                  value={opt.label}
                  label={opt.label}
                  selected={selectedOption === opt.label}
                  index={idx}
                />
              ))}
            </RadioGroup>
          </>
        )}
      </div>

      <div className="mt-6 flex justify-center">
        <Button
          className="bg-Myblue text-white w-full md:w-64"
          onClick={verifyAnswer}
          disabled={isCorrect === null && !selectedOption}
        >
          {isCorrect === null
            ? "Verificar resposta"
            : isLastQuestion
              ? "Ver resultado"
              : "Próxima pergunta →"}
        </Button>
      </div>
    </div>
  );
};

export default GameContainer;
