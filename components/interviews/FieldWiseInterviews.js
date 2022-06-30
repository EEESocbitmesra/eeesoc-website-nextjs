import YearWiseInterviews from "./YearWiseInterviews";

export default function FieldWiseInterviews({ fieldWiseInterviews }) {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="py-5 px-3 px-md-5 mb-12 rounded shadow-container">
          <h4>{fieldWiseInterviews.field}</h4>
          <div className="divider divider-small my-3"></div>
          <p className="text-start">{fieldWiseInterviews.description}</p>

          <YearWiseInterviews
            yearWiseInterviews={fieldWiseInterviews.interviewCollections}
          />
        </div>
      </div>
    </div>
  );
}
