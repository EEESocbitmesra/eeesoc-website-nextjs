import NextImage from "../../layouts/NextImage";

export default function Introduction() {
  return (
    <div className="container mt-5">
      <h1 className="text-center fs-1">Project Programmes</h1>
      <div className="d-flex flex-column align-items-center flex-lg-row mt-5 justify-content-center gap-5">
        <div className="col-lg-5">
          <NextImage
            src="/projectProgrammes/project_programme.jpg"
            alt="Project Programme"
            width={540}
            height={405}
            priority
          />
        </div>

        <div className="col-lg-7">
          <p className="subheading">
            In collaboration with Mathworks, the Society conducts two major
            project programmes for First and Second-year students in every
            academic session. They are mentored by their seniors who constantly
            monitor the progress and provide technical guidance. Some of the
            best projects done by EEE students have, in fact, been done under
            the umbrella of these project programmes, for some years now these
            projects have filled the resumes of some of the best-placed students
            in our department. Many of these projects had not been attempted
            before and the knowledge that has been accumulated through research
            and hard work is being passed on to the juniors too.
          </p>
        </div>
      </div>
    </div>
  );
}
