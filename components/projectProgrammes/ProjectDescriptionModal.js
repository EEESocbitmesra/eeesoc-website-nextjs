export default function ProjectDescriptionModal({ project }) {
  return (
    <div
      className="modal fade"
      id={project.id}
      tabIndex="-1"
      role="dialog"
      aria-labelledby={`${project.id}-title`}
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{project.title}</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div className="modal-body">
            <p className="text-start">{project.about}</p>
          </div>

          {project.reportLink && (
            <>
              <h5>Useful Links:</h5>
              <a
                className="text-purple mb-3"
                href={project.reportLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Report
              </a>
            </>
          )}

          {project.githubLink && (
            <a
              className="text-purple mb-3"
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Github Link
            </a>
          )}

          {project.demoLink && (
            <a
              className="text-purple mb-3"
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo Link
            </a>
          )}
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-outline-danger btn-sm"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
