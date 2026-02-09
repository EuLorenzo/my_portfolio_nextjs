import { GameQuestion } from "@/app/helpers/game-question";
import { useState, type FC } from "react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { libre_baskerville, shantell_sans } from "../fonts";

interface GameContainerProps {}

const GameContainer: FC<GameContainerProps> = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const question = GameQuestion[questionNumber];

  const verifyAnswer = () => {
    if (isCorrect !== null) {
      setQuestionNumber(questionNumber + 1);
      setIsCorrect(null);

      return;
    }

    const selectedOptionObj = question.options.find(
      (option) => option.label === selectedOption,
    );

    if (selectedOptionObj?.correct === true) {
      console.log("Cheguei linha 24");
      setIsCorrect(true);
    } else {
      console.log("Cheguei linha 27");
      setIsCorrect(false);
    }
  };

  return (
    <div className="w-225 m-auto">
      <h1
        className={`${libre_baskerville.className} text-2xl text-center font-normal`}
      >
        Quiz rápido!
      </h1>

      {isCorrect !== null ? (
        <div>
          <h1>{isCorrect === true ? "Acertouuu !" : "Erroooouu !"}</h1>
        </div>
      ) : (
        <div className="mt-5">
          <p className="flex items-center gap-2">
            <span
              className={`${shantell_sans.className} text-white bg-Myblue rounded-full w-7.5 h-7.5 flex items-center justify-center`}
            >
              {questionNumber + 1}.
            </span>{" "}
            {question.question}
          </p>

          <RadioGroup
            className="mt-5 flex flex-col gap-5"
            onValueChange={(e) => setSelectedOption(e)}
          >
            <RadioGroupContainer label={question.options[0].label} />

            <RadioGroupContainer label={question.options[1].label} />

            <RadioGroupContainer label={question.options[2].label} />
          </RadioGroup>
        </div>
      )}

      <div className="flex justify-center mt-5">
        <Button className="bg-Myblue text-white" onClick={() => verifyAnswer()}>
          {isCorrect === null ? "Verificar resposta" : "Próxima pergunta"}
        </Button>
      </div>
    </div>
  );
};

const RadioGroupContainer = ({ label }: { label: string }) => {
  return (
    <div className="flex items-center gap-2">
      <RadioGroupItem value={label} />
      <Label className="text-base">{label}</Label>{" "}
    </div>
  );
};

export default GameContainer;
