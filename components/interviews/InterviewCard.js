import NextImage from "../../layouts/NextImage";
import InterviewModal from "./InterviewModal";

export default function InterviewCard({ senior }) {
  return (
    <div className="col-lg-4 row-sm-6 mb-4 col-md-6">
      <div className="shadow-container p-4">
        {/* Image */}
        <div className="mb-3">
          <NextImage
            src={senior.photoUrl}
            alt={senior.name}
            height={333}
            width={333}
            layout="responsive"
            objectFit="contain"
          />
        </div>

        {/* Button to open interview modal */}
        <button
          type="button"
          className="btn btn-outline-info btn-sm"
          data-bs-toggle="modal"
          data-bs-target={`#${senior.id}`}
        >
          {senior.company}
        </button>

        {/* Interview Modal */}
        <InterviewModal senior={senior} />
      </div>
    </div>
  );
}
