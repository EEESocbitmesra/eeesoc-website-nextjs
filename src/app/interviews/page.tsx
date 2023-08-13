import AllInterviews from "@/components/interviews/AllInterviews";
import InterviewsIntroduction from "@/components/interviews/InterviewsIntroduction";
import { pageTitle } from "@/data/constants";

export const metadata = {
  title: `${pageTitle} | Interviews`,
};

export default function Interviews() {
  return (
    <>
      <InterviewsIntroduction />
      <AllInterviews />
    </>
  );
}
