import { workshopsList } from "../../data/workshopsList";
import WorkshopCard from "./WorkshopCard";

export default function WorkshopCards() {
  return (
    <section className="mt-4 p-4">
      <div className="container">
        <div className="row">
          {workshopsList.map((workshop) => (
            <WorkshopCard key={workshop.heading} workshop={workshop} />
          ))}
        </div>
      </div>
    </section>
  );
}
