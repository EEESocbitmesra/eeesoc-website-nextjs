import { codingInterviews } from "./codingInterviews";
import { consultancyInterviews } from "./consultancyInterviews";
import { electricalInterviews } from "./electricalInterviews";
import { electronicsInterviews } from "./electronicsInterviews";

export const compiledInterviews = [
  {
    field: "Electrical Core",
    description:
      "EEE alumni are placed in companies like TATA Steel, etc which are Electrical Core companies. They were recruited based on their knowledge in Core Subjects and Projects. Read their Interview experiences and what they have to say.",
    interviewCollections: electricalInterviews,
  },
  {
    field: "Consultancy",
    description:
      "EEE alumni are placed in companies like PWC, ZS Associates, Deloitte, etc which are Consultancy companies. They were recruited based on their Projects and Aptitude. Read their Interview experiences and what they have to say.",
    interviewCollections: consultancyInterviews,
  },
  {
    field: "Electronics Core",
    description:
      "EEE alumni are placed in companies like Infineon, Synopsys, etc which are Electronics Core companies. They were based on their knowledge in Electronics Core Subjects and Projects. Read their Interview experiences and what they have to say.",
    interviewCollections: electronicsInterviews,
  },
  {
    field: "Coding",
    description:
      "EEE alumni are placed in companies like Adobe, Oyo Rooms, Walmart, etc which are Coding companies. They were on in CP and their Projects. Read their Interview experiences and what they have to say.",
    interviewCollections: codingInterviews,
  },
];
