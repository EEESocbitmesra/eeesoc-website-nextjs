import AlumniCards from "@/components/alumni/AlumniCards";
import { alumniList } from "@/data/alumniList";
import { pageTitle } from "@/data/constants";

export const metadata = {
  title: `${pageTitle} | Alumni`,
};

export default function Alumni() {
  return (
    <div className="vertical-padding">
      <h1 className="mt-5 text-center fs-1">Our Alumni</h1>
      {alumniList.map((batchWiseAlumni) => (
        <AlumniCards
          key={`Class of ${batchWiseAlumni.year}`}
          batchWiseAlumni={batchWiseAlumni}
        />
      ))}
    </div>
  );
}
