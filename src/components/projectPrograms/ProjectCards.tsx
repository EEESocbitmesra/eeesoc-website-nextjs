import { Project } from "@/types/types";
import ProjectCard from "./ProjectCard";
import { getProjectId } from "@/utils/getProjectId";

interface Props {
  projects: Project[];
  year: number;
}

export default function ProjectCards({ projects, year }: Props) {
  return (
    <div className="row justify-content-center">
      {projects.map((project, index) => {
        const projectId = getProjectId({
          projectName: project.name,
          index,
          year,
        });

        return (
          <ProjectCard
            key={projectId}
            projectId={projectId}
            project={project}
          />
        );
      })}
    </div>
  );
}
