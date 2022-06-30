import NextImage from "../../layouts/NextImage";
import ProjectDescriptionModal from "./ProjectDescriptionModal";

export default function ProjectCard({ project }) {
  return (
    <div className="mb-4 col-md-6 col-lg-4">
      <div className="d-flex flex-column justify-content-between shadow-container p-3 h-100">
        <figure style={{ height: "260px" }} className="position-relative">
          <NextImage
            src={project.img}
            alt={project.name + " thumbnail"}
            objectFit="contain"
            layout="fill"
          />
        </figure>

        {/* Button trigger modal change value of data-target  */}
        <button
          className="btn btn-outline-info btn-sm"
          data-bs-toggle="modal"
          data-bs-target={`#${project.id}`}
        >
          {project.name}
        </button>

        {/* Modal Content */}
        <ProjectDescriptionModal project={project} />
      </div>
    </div>
  );
}
