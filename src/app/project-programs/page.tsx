import ProjectProgram from "@/components/projectPrograms/ProjectProgram";
import ProjectProgramIntroduction from "@/components/projectPrograms/ProjectProgramIntroduction";
import { pageTitle } from "@/data/constants";
import { smpProjects } from "@/data/smpProjects";
import { sppProjects } from "@/data/sppProjects";

export const metadata = {
  title: `${pageTitle} | Project Programs`,
};

export default function ProjectProgrammes() {
  return (
    <>
      <div className="wrapper">
        <ProjectProgramIntroduction />
      </div>

      <section className="py-16 mx-auto mt-20 bg-light-purple">
        <div className="flex flex-col items-stretch w-full gap-8 mx-auto md:w-4/5">
          <ProjectProgram program={sppProjects} />
          <ProjectProgram program={smpProjects} />
        </div>
      </section>
    </>
  );
}
