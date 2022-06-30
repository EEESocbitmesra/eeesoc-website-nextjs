import InterviewCard from "./InterviewCard";

export default function InterviewCards({ interviews, prefix, year }) {
  return (
    <div className="mt-4 row justify-content-center">
      {interviews.map((senior, index) => {
        const id = prefix + year + index;
        return (
          <InterviewCard
            key={id}
            senior={{
              id,
              ...senior,
            }}
          />
        );
      })}
    </div>
  );
}
