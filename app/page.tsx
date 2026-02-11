"use client";

import { useEffect } from "react";
import LandPageContainer from "./components/containers/land-page-container";
import ProjectsContainer from "./components/containers/projects-container";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (hash === "contato") {
      const el = document.getElementById("contato-footer");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [searchParams]);

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
