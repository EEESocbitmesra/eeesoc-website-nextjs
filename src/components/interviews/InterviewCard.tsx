import { Interview } from "@/types/types";
import { getImageSrc } from "@/utils/getImageSrc";
import Image from "next/image";
import InterviewModal from "./InterviewModal";

interface Props {
  interview: Interview;
  interviewId: string;
}

export default function InterviewCard({ interview, interviewId }: Props) {
  return (
    <div className="col-lg-4 row-sm-6 mb-4 col-md-6">
      <div className="shadow-container p-4">
        {/* Image */}
        <div className="mb-3">
          <Image
            src={getImageSrc(interview.image)}
            alt={interview.name}
            height={333}
            width={333}
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Button to open interview modal */}
        <button
          type="button"
          className="btn btn-outline-info btn-sm"
          data-bs-toggle="modal"
          data-bs-target={`#${interviewId}`}
        >
          {interview.company}
        </button>

        {/* Interview Modal */}
        <InterviewModal interview={interview} interviewId={interviewId} />
      </div>
    </div>
  );
}
