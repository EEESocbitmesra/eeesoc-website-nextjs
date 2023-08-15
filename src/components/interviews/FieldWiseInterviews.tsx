import { FieldInterview } from "@/types/types";
import YearWiseInterviews from "./YearWiseInterviews";

interface Props {
  fieldWiseInterviews: FieldInterview;
}

export default function FieldWiseInterviews({ fieldWiseInterviews }: Props) {
  return (
    <div className="p-8 rounded shadow-container">
      <h3>{fieldWiseInterviews.field}</h3>
      <div className="my-3 divider divider-small"></div>
      <p className="text-justify">{fieldWiseInterviews.description}</p>

      <YearWiseInterviews
        yearWiseInterviews={fieldWiseInterviews.interviewCollections}
      />
    </div>
  );
}
