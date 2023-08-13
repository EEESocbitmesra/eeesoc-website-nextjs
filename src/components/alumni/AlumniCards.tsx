import { BatchAlumni } from "@/types/types";
import AlumniCard from "./AlumniCard";
import { getAlumniId } from "@/utils/getAlumniId";

interface Props {
  batchWiseAlumni: BatchAlumni;
}

export default function AlumniCards({ batchWiseAlumni }: Props) {
  return (
    <>
      <section>
        <div className="container">
          <h4 className="text-center mt-5 fs-4">
            Class of {batchWiseAlumni.year}
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

      <div className="divider divider-small mt-5"></div>
    </>
  );
}
