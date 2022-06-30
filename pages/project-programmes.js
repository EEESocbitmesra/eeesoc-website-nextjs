import Introduction from "../components/projectProgrammes/Introduction";
import ProjectProgram from "../components/projectProgrammes/ProjectProgram";
import { smpProjects } from "../data/smpProjects";
import { sppProjects } from "../data/sppProjects";
import Layout from "../layouts/Layout";

function ProjectProgrammes() {
  return (
    <Layout title="Project Programmes">
      <div className="vertical-padding">
        <Introduction />
      </div>

      <section className="bg-light-purple vertical-padding">
        <div className="container">
          <div className="row">
            <ProjectProgram program={sppProjects} />
            <ProjectProgram program={smpProjects} />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ProjectProgrammes;
