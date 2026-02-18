"use client";

import { useEffect, useState } from "react";
import LandPageContainer from "./components/containers/land-page-container";
import ProjectsContainer from "./components/containers/projects-container";
import { useSearchParams } from "next/navigation";
import MobileDialog from "./components/mobile-dialog";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  //const searchParams = useSearchParams();

  /*useEffect(() => {
    const hash = window.location.hash.replace("#", "");

    if (hash === "contato") {
      const el = document.getElementById("contato-footer");
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
    }, [searchParams]);*/

  useEffect(() => {
    if (window.innerWidth < 900) {
      setIsOpen(true);
    } else {
      setIsOpen(true);
    }
  }, []);

  return (
    <div>
      <div className="max-w-225 m-auto">
        <div className="mt-20">
          <LandPageContainer />
          <MobileDialog isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>

        <div className="mt-20">
          <ProjectsContainer howManyItems={3} />
        </div>
      </div>
    </div>
  );
}
