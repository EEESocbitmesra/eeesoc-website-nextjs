import { Interview } from "@/types/types";
import InterviewCard from "./InterviewCard";

interface Props {
  interviews: Interview[];
  prefix: string;
  year: string;
}

export default function InterviewCards({ interviews, prefix, year }: Props) {
  return (
    <div className="mt-4 row justify-content-center">
      {interviews.map((interview, index) => {
        const id = prefix + year + index;
        return (
          <InterviewCard key={id} interview={interview} interviewId={id} />
        );
      })}
    </div>
  );
}
