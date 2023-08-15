import Image from "next/image";

export default function ProjectProgramIntroduction() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center">Project Programs</h1>
      <div className="grid grid-cols-12 gap-10 mt-8">
        <Image
          src="/images/project_programs/project_program.jpg"
          alt="Project Programme"
          className="object-cover w-full col-span-12 rounded md:col-span-6"
          width={540}
          height={405}
          priority
        />

        <p className="col-span-12 text-justify md:col-span-6">
          In collaboration with Mathworks, the Society conducts two major
          project programmes for First and Second-year students in every
          academic session. They are mentored by their seniors who constantly
          monitor the progress and provide technical guidance. Some of the best
          projects done by EEE students have, in fact, been done under the
          umbrella of these project programmes, for some years now these
          projects have filled the resumes of some of the best-placed students
          in our department. Many of these projects had not been attempted
          before and the knowledge that has been accumulated through research
          and hard work is being passed on to the juniors too.
        </p>
      </div>
    </div>
  );
}
