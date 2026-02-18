"use client";

import { useRouter } from "next/router";
import type { FC } from "react";

const ProjectDetails: FC = () => {
  const router = useRouter();

  return <div>Projeto: {router.query.title}</div>;
};

export default ProjectDetails;
