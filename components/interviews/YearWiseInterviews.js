import InterviewCards from "./InterviewCards";

export default function YearWiseInterviews({ yearWiseInterviews }) {
  return (
    <div className="mt-5">
      {yearWiseInterviews.map((singleYearInterviews) => (
        <div className="mb-5" key={singleYearInterviews.year}>
          <h3>{singleYearInterviews.year}</h3>
          <div className="divider divider-small"></div>

          <InterviewCards
            year={singleYearInterviews.year}
            prefix={singleYearInterviews.prefix}
            interviews={singleYearInterviews.interviewsList}
          />
        </div>
      ))}
    </div>
  );
}
