import WorkshopCards from "../components/workshop/WorkshopCards";
import WorkshopIntroduction from "../components/workshop/WorkshopIntroduction";
import WorkshopItems from "../components/workshop/WorkshopItems";
import Layout from "../layouts/Layout";

export default function Workshop() {
  return (
    <Layout title="Workshops">
      <div className="vertical-padding">
        <WorkshopIntroduction />
        <WorkshopCards />
        <WorkshopItems />
      </div>
    </Layout>
  );
}
