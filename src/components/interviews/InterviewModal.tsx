import { Interview } from "@/types/types";
import parse from "html-react-parser";

interface Props {
  interview: Interview;
  interviewId: string;
}

export default function InterviewModal({ interview, interviewId }: Props) {
  return (
    <div
      className="modal fade"
      id={interviewId}
      tabIndex={-1}
      role="dialog"
      aria-labelledby={`${interviewId}-label`}
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h5 className="modal-title" id={`${interviewId}-title`}>
              {interview.name}
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          {/* Main interview */}
          <div className="modal-body text-start">
            <p>{parse(interview.interviewContent)}</p>
          </div>

          {/* Link to interview's facebook link */}
          <h5>Links:</h5>
          <a
            className="text-purple mb-3"
            href={interview.facebookInterviewLink ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook Link
          </a>

          {/* Modal footer */}
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
