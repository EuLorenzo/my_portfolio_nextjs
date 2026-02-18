import { Tooltip } from "../tooltip";
import { cn } from "@/lib/utils";

const LandPageContainer = () => {
  return (
    <div
      className={cn(
        "flex text-4xl text-Mydark-blue w-full px-5",
        "",
        "md:px-0",
      )}
    >
      <div className="flex flex-col text-4xl gap-4 margin-auto leading-11">
        <h1>
          Olá, como vai? Eu sou o{" "}
          <Tooltip imageSrc="/lorenzo/main.jpg" placement="right-start">
            <span className="highlitedSpan">Lorenzo</span>
          </Tooltip>
          .
        </h1>
        <h1>
          <Tooltip imageSrc="/gifs/cat_coding.gif" placement="left-start">
            <span className="highlitedSpan">Desenvolvedor Full-Stack</span>
          </Tooltip>{" "}
          e cursando Engenharia de Software.
        </h1>
        <h1>
          Também um grande fã de{" "}
          <Tooltip
            imageSrc="/gifs/basketball_guy.gif"
            placement="bottom-start"
            width={250}
          >
            <span className="highlitedSpan">basquetebol</span>
          </Tooltip>
          .
        </h1>
      </div>
    </div>
  );
};

export default LandPageContainer;
