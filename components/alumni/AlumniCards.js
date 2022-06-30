import { getAlumniId } from "../../utils/getAlumniId";
import AlumniCard from "./AlumniCard";

export default function AlumniCards({ batchWiseAlumni }) {
  return (
    <>
      <section>
        <div className="container">
          <h4 className="text-center mt-5 fs-4">
            {batchWiseAlumni.heading ?? `Class of ${batchWiseAlumni.year}`}
          </h4>
          <div className="row">
            {batchWiseAlumni.alumni.map((senior, index) => {
              const seniorId = getAlumniId({
                seniorName: senior.name,
                year: batchWiseAlumni.year,
                index,
              });

              return (
                <AlumniCard
                  key={seniorId}
                  senior={senior}
                  year={batchWiseAlumni.year}
                />
              );
            })}
          </div>
        </div>
      </section>

      {batchWiseAlumni.heading !== "Other Alumni" && (
        <div className="divider divider-small mt-5"></div>
      )}
    </>
  );
}
