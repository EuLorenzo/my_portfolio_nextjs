"use client";

import FooterContainer from "./components/containers/footer-container";
import LandPageContainer from "./components/containers/land-page-container";
import ProjectsContainer from "./components/containers/projects-container";

export default function Home() {
  return (
    <div>
      <div className="w-225 m-auto">
        <div className="mt-20">
          <LandPageContainer />
        </div>

        <div className="mt-20 ">
          <ProjectsContainer howManyItems={3} />
        </div>
      </div>
    </div>
  );
}
