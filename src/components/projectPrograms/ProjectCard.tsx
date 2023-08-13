import { Project } from "@/types/types";
import ProjectDescriptionModal from "./ProjectDescriptionModal";
import Image from "next/image";
import { getImageSrc } from "@/utils/getImageSrc";

interface Props {
  project: Project;
  projectId: string;
}

export default function ProjectCard({ project, projectId }: Props) {
  return (
    <div className="mb-4 col-md-6 col-lg-4">
      <div className="d-flex flex-column justify-content-between shadow-container p-3 h-100">
        <figure style={{ height: "260px" }} className="position-relative">
          <Image
            src={getImageSrc(project.image)}
            alt={project.name + " thumbnail"}
            style={{ objectFit: "contain" }}
            fill={true}
          />
        </figure>

        {/* Button trigger modal change value of data-target  */}
        <button
          className="btn btn-outline-info btn-sm"
          data-bs-toggle="modal"
          data-bs-target={`#${projectId}`}
        >
          {project.name}
        </button>

        {/* Modal Content */}
        <ProjectDescriptionModal project={project} projectId={projectId} />
      </div>
    </div>
  );
}
