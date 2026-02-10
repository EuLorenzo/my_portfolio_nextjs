import type { FC } from "react";
import AboutContainer from "../components/containers/about-container";
import GameContainer from "../components/containers/game-container";

interface AboutProps {}

const About: FC<AboutProps> = () => {
  return (
    <div className="">
      <AboutContainer />

      <div className="mt-10">
        <GameContainer />
      </div>
    </div>
  );
};

export default About;
