import type { FC } from "react";
import { RadioGroupItem } from "../ui/radio-group";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

interface GameQuestionsCardProps {
  value: string;
  label: string;
  selected: boolean;
  index: number;
}

const GameQuestionsCard: FC<GameQuestionsCardProps> = ({
  value,
  label,
  selected,
  index,
}) => {
  const letter = ["A", "B", "C", "D", "E"][index] ?? `${index + 1}`;

  return (
    <div className="relative">
      <RadioGroupItem value={value} id={value} className="sr-only" />

      <Label
        htmlFor={value}
        className={cn(
          "flex items-center gap-4 rounded-xl border p-4 cursor-pointer select-none",
          "transition-all hover:bg-muted/50",
          selected && "border-Myblue ring-2 ring-Myblue/20 bg-Myblue/5",
        )}
      >
        <span
          className={cn(
            "flex items-center justify-center w-9 h-9 rounded-lg border text-sm font-semibold",
            selected ? "border-Myblue text-Myblue" : "text-muted-foreground",
          )}
        >
          {letter}
        </span>

        <span className="text-base">{label}</span>

        <span
          className={cn(
            "ml-auto w-5 h-5 rounded-full border flex items-center justify-center",
            selected ? "border-Myblue" : "border-muted-foreground/30",
          )}
        >
          <span
            className={cn(
              "w-2.5 h-2.5 rounded-full transition",
              selected ? "bg-Myblue" : "bg-transparent",
            )}
          />
        </span>
      </Label>
    </div>
  );
};

export default GameQuestionsCard;
