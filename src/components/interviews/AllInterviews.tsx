import { compiledInterviews } from "@/data/compiledInterviews";
import FieldWiseInterviews from "./FieldWiseInterviews";

export default function AllInterviews() {
  return (
    <section className="py-4 bg-light-purple">
      <div className="gap-8 wrapper">
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
