"use client";

import { GameQuestions, QuestionType } from "@/app/helpers/game-question";
import { useEffect, useState } from "react";
import { RadioGroup } from "../ui/radio-group";
import { Button } from "../ui/button";
import { libre_baskerville, shantell_sans } from "../fonts";
import { cn } from "@/lib/utils";
import GameQuestionsCard from "../game/game-questions-card";
import { motion } from "motion/react";
import GameProgress from "../game/game-progress";
import { toast } from "sonner";

const GameContainer = () => {
  const [questions, setQuestions] = useState<QuestionType[]>(GameQuestions);

  const [questionNumber, setQuestionNumber] = useState(0);

  const [selectedOption, setSelectedOption] = useState<string>("");

  const [seeResult, setSeeResult] = useState(false);

  const isLastQuestion = questionNumber === questions.length - 1;
  const isCorrect = questions[questionNumber]?.isCorrect;

  const verifyAnswer = () => {
    if (!seeResult) {
      if (selectedOption === "") {
        toast.error("Selecione uma opção");
        return;
      }

      const correctAnswer = questions[questionNumber].options.find(
        (opt) => opt.correct === true,
      );

      const isCorrect = selectedOption === correctAnswer?.label;

      setQuestions((prev) => {
        const array = [...prev];
        array[questionNumber] = { ...array[questionNumber], isCorrect };
        return array;
      });

      setSeeResult(true);
      return;
    }

    if (isLastQuestion) {
      setQuestionNumber(0);
      setSeeResult(false);
      setSelectedOption("");
      return;
    }

    setSeeResult(false);
    setQuestionNumber((prev) => prev + 1);
  };

  const handleSelectedOptionChange = (value: string) => {
    setSelectedOption(value);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
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

        <GameProgress questionNumber={questionNumber} />
      </div>

      <div className="mt-6">
        {seeResult && (
          <div className="rounded-xl border p-5 text-center">
            <p className={cn(shantell_sans.className, "text-lg")}>
              {isCorrect ? "Acertouuu! 🎉" : "Erroooouu! 😅"}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {questions[questionNumber].explanation}
            </p>
          </div>
        )}

        {!seeResult && (
          <>
            <GameQuestionsCard
              question={questions[questionNumber]}
              selectedOption={selectedOption}
              setSelectedOption={handleSelectedOptionChange}
            />
          </>
        )}
      </div>

      <div className="mt-6 flex justify-center">
        <Button
          className="bg-Myblue text-white w-full md:w-64"
          onClick={verifyAnswer}
        >
          {isLastQuestion && seeResult
            ? "Tentar novamente!"
            : seeResult
              ? "Próxima"
              : "Verificar"}
        </Button>
      </div>
    </motion.div>
  );
};

export default GameContainer;
