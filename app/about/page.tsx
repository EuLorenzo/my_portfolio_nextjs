import type { FC } from "react";
import AboutContainer from "../components/containers/about-container";
import GameContainer from "../components/containers/game-container";

interface AboutProps {
  propName: type;
}

const About: FC<AboutProps> = ({ propName }) => {
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
