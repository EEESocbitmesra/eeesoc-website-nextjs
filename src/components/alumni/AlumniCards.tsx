"use client";

import { BatchAlumni } from "@/types/types";
import { useId } from "react";
import AlumniCard from "./AlumniCard";

interface Props {
  batchWiseAlumni: BatchAlumni;
}

export default function AlumniCards({ batchWiseAlumni }: Props) {
  const id = useId();

  return (
    <>
      <section className="w-full mt-10">
        <h3 className="text-center">Class of {batchWiseAlumni.year}</h3>
        <div className="flex flex-wrap items-center justify-center w-full">
          {batchWiseAlumni.alumni.map((senior) => (
            <AlumniCard key={id} senior={senior} year={batchWiseAlumni.year} />
          ))}
        </div>
      </section>

      <div className="mt-10 divider divider-small"></div>
    </>
  );
}
