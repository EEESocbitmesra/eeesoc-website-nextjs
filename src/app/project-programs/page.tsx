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
      <div className="vertical-padding">
        <ProjectProgramIntroduction />
      </div>

      <section className="bg-light-purple vertical-padding">
        <div className="container">
          <div className="row">
            <ProjectProgram program={sppProjects} />
            <ProjectProgram program={smpProjects} />
          </div>
        </div>
      </section>
    </>
  );
}
