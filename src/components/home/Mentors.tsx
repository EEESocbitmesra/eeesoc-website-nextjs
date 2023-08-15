import { mentorsInfo } from "@/data/mentorsInfo";
import MentorCard from "./MentorCard";

export default function Mentors() {
  return (
    <section className="flex flex-col items-center py-16 mt-20 bg-light-purple">
      <h2 className="text-center">Our Mentors</h2>

      <div className="grid items-stretch w-4/5 grid-cols-2 gap-8 mx-auto mt-10 xl:w-3/5">
        {mentorsInfo.map((mentor) => (
          <MentorCard key={mentor.name} mentor={mentor} />
        ))}
      </div>
    </section>
  );
}
