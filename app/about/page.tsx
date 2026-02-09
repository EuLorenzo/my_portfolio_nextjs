import type { FC } from "react";
import AboutContainer from "../components/containers/about-container";

interface AboutProps {
  propName: type;
}

const About: FC<AboutProps> = ({ propName }) => {
  return (
    <div className="">
      <AboutContainer />
    </div>
  );
};

export default About;
