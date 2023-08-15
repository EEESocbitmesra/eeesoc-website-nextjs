"use client";

import { BatchInterview } from "@/types/types";
import { useId } from "react";
import InterviewCard from "./InterviewCard";

interface Props {
  yearWiseInterviews: BatchInterview[];
}

export default function YearWiseInterviews({ yearWiseInterviews }: Props) {
  const id = useId();

  return (
    <div className="mt-10">
      {yearWiseInterviews.map((singleYearInterviews) => (
        <div className="w-full mt-20 mb-5" key={singleYearInterviews.year}>
          <h4>{singleYearInterviews.year}</h4>
          <div className="mt-2 divider divider-small"></div>

          <div className="flex flex-wrap items-stretch justify-center w-full gap-4 mt-8">
            {singleYearInterviews.interviews.map((interview) => (
              <InterviewCard key={id} interview={interview} interviewId={id} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
