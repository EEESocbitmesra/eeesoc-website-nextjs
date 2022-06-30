import { compiledInterviews } from "../../data/compiledInterviews";
import FieldWiseInterviews from "./FieldWiseInterviews";

export default function AllInterviews() {
  return (
    <section className="bg-light-purple vertical-padding">
      <div className="container">
        {compiledInterviews.map((fieldWiseInterviews) => (
          <FieldWiseInterviews
            key={fieldWiseInterviews.field}
            fieldWiseInterviews={fieldWiseInterviews}
          />
        ))}
      </div>
    </section>
  );
}
