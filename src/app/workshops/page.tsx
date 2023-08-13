import WorkshopCard from "@/components/workshop/WorkshopCard";
import WorkshopIntroduction from "@/components/workshop/WorkshopIntroduction";
import WorkshopItems from "@/components/workshop/WorkshopItems";
import { pageTitle } from "@/data/constants";
import { workshopsList } from "@/data/workshopsList";

export const metadata = {
  title: `${pageTitle} | Workshops`,
};

export default function Workshop() {
  return (
    <div className="mt-16 w-5/6 md:w-4/5 mx-auto">
      <WorkshopIntroduction />
      <section className="grid grid-cols-3 mt-8 gap-8 items-center">
        {workshopsList.map((workshop) => (
          <WorkshopCard key={workshop.title} workshop={workshop} />
        ))}
      </section>
      <WorkshopItems />
    </div>
  );
}
