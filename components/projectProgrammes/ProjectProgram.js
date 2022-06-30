import ProjectCards from "./ProjectCards";

export default function ProjectProgram({ program }) {
  return (
    <div className="py-5 px-3 px-md-5 rounded shadow-container">
      <h4>{program.title}</h4>
      <div className="divider divider-small my-3"></div>
      <p className="text-start">{program.description}</p>

      {program.yearWiseProjects.map((singleYearProjects) => (
        <div className="mt-5" key={singleYearProjects.year}>
          <h4 className="mt-5 mb-3">{singleYearProjects.year}</h4>

          <ProjectCards
            projects={singleYearProjects.projects}
            year={singleYearProjects.year}
          />
        </div>
      ))}
    </div>
  );
}
