import InterviewsIntroduction from "../components/interviews/InterviewsIntroduction";
import AllInterviews from "../components/interviews/AllInterviews";
import Layout from "../layouts/Layout";

export default function Interviews() {
  return (
    <Layout title="Interviews">
      <InterviewsIntroduction />
      <AllInterviews />
    </Layout>
  );
}
