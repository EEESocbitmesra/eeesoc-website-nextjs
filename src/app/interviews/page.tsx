import AllInterviews from "@/components/interviews/AllInterviews";
import { pageTitle } from "@/data/constants";

export const metadata = {
  title: `${pageTitle} | Interviews`,
};

export default function Interviews() {
  return (
    <>
      <div className="wrapper">
        <h1 className="text-center">EEE Interviews</h1>
        <p className="mt-4">
          The society aims in passing on the interview knowledge of our alumni.
          Every year many students from EEE are placed in different companies
          related to Electrical, Electronics, Consultancy, Coding, etc. They
          share their interview experience, guiding a path for others as to how
          to prepare for interviews.
        </p>
      </div>
      <AllInterviews />
    </>
  );
}
