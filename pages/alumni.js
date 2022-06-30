import AlumniCards from "../components/alumni/AlumniCards";
import { alumniList } from "../data/alumniList";
import Layout from "../layouts/Layout";

export default function Alumni() {
  return (
    <Layout title="Alumni">
      <div className="vertical-padding">
        <h1 className="mt-5 text-center fs-1">Our Alumni</h1>
        {alumniList.map((batchWiseAlumni) => (
          <AlumniCards
            key={batchWiseAlumni.heading ?? `class of ${batchWiseAlumni.year}`}
            batchWiseAlumni={batchWiseAlumni}
          />
        ))}
      </div>
    </Layout>
  );
}
