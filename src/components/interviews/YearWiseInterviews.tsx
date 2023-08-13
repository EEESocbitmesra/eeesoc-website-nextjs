import { BatchInterview } from "@/types/types";
import InterviewCards from "./InterviewCards";

interface Props {
  yearWiseInterviews: BatchInterview[];
}

export default function YearWiseInterviews({ yearWiseInterviews }: Props) {
  return (
    <div className="mt-5">
      {yearWiseInterviews.map((singleYearInterviews) => (
        <div className="mb-5" key={singleYearInterviews.year}>
          <h3>{singleYearInterviews.year}</h3>
          <div className="divider divider-small"></div>

          <InterviewCards
            year={singleYearInterviews.year}
            prefix={singleYearInterviews.prefix}
            interviews={singleYearInterviews.interviews}
          />
        </div>
      ))}
    </div>
  );
}
