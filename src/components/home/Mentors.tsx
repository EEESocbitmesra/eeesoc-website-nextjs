import { mentorsInfo } from "@/data/mentorsInfo";
import MentorCard from "./MentorCard";

export default function Mentors() {
  return (
    <section className="bg-light-purple mt-20 py-16 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl text-center">Our Mentors</h2>

      <div className="grid grid-cols-2 w-4/5 md:w-3/5 gap-8 mt-10 mx-auto items-stretch">
        {mentorsInfo.map((mentor) => (
          <MentorCard key={mentor.name} mentor={mentor} />
        ))}
      </div>
    </section>
  );

  // return (
  //   <section className="bg-light-purple vertical-padding">
  //     <h4 className="text-center fs-2">Our Mentors</h4>
  //     <div className="container mt-5">
  //       <div className="d-flex justify-content-center gap-5 flex-md-row flex-column align-items-stretch">
  //         {mentorsInfo.map((mentor) => (
  //           <MentorCard key={mentor.name} mentor={mentor} />
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
}
