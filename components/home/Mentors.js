import { mentorsInfo } from "../../data/mentorsInfo";
import MentorCard from "./MentorCard";

export default function Mentors() {
  return (
    <section className="bg-light-purple vertical-padding">
      <h4 className="text-center fs-2">Our Mentors</h4>
      <div className="container mt-5">
        <div className="d-flex justify-content-center gap-5 flex-md-row flex-column align-items-stretch">
          {mentorsInfo.map((mentor, index) => (
            <MentorCard key={mentor.name} index={index} mentor={mentor} />
          ))}
        </div>
      </div>
    </section>
  );
}
