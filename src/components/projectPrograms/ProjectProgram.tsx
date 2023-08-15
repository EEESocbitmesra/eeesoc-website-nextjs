"use client";

import { IProjectProgram } from "@/types/types";
import { useId } from "react";
import ProjectCard from "./ProjectCard";

interface Props {
  program: IProjectProgram;
}

export default function ProjectProgram({ program }: Props) {
  const id = useId();

  return (
    <div className="p-8 rounded shadow-container">
      <h3>{program.title}</h3>
      <div className="mt-2 divider divider-small"></div>
      <p className="mt-4 text-justify">{program.description}</p>

      {program.yearWiseProjects.map((singleYearProjects) => (
        <div className="mt-16" key={singleYearProjects.year}>
          <h4>{singleYearProjects.year}</h4>

          <div className="grid justify-center w-full grid-cols-1 gap-8 mt-4 sm:grid-cols-2 xl:grid-cols-3">
            {singleYearProjects.projects.map((project) => (
              <ProjectCard key={id} project={project} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
