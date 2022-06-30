import { getProjectId } from "../../utils/getProjectId";
import ProjectCard from "./ProjectCard";

export default function ProjectCards({ projects, year }) {
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
            project={{ id: projectId, ...project }}
          />
        );
      })}
    </div>
  );
}
