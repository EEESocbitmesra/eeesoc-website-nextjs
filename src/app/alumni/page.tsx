import AlumniCards from "@/components/alumni/AlumniCards";
import { alumniList } from "@/data/alumniList";
import { pageTitle } from "@/data/constants";

export const metadata = {
  title: `${pageTitle} | Alumni`,
};

export default function Alumni() {
  return (
    <div className="wrapper">
      <h1 className="text-center">Our Alumni</h1>
      {alumniList.map((batchWiseAlumni) => (
        <AlumniCards
          key={`Class of ${batchWiseAlumni.year}`}
          batchWiseAlumni={batchWiseAlumni}
        />
      ))}
    </div>
  );
}
