import WorkshopCard from "@/components/workshop/WorkshopCard";
import WorkshopItem from "@/components/workshop/WorkshopItem";
import { pageTitle } from "@/data/constants";
import { workshopsList } from "@/data/workshopsList";
import { Fragment } from "react";

export const metadata = {
  title: `${pageTitle} | Workshops`,
};

export default function Workshop() {
  return (
    <div className="items-stretch wrapper">
      <section>
        <h2 className="text-center">Workshops</h2>
        <p className="mt-4 text-justify">
          The society aims in imparting branch specific technical knowledge to
          the students of EEE. We conduct various workshops related to various
          fields of Electrical Engineering such as MATLAB, SIMULINK, Machine
          Learning, and Image processing workshop.
        </p>
      </section>

      {/* <section className="grid items-center grid-cols-3 gap-8 mt-8 sm:grid-cols-2 xl:grid-cols-3">
        {workshopsList.map((workshop) => (
          <WorkshopCard key={workshop.title} workshop={workshop} />
        ))}
      </section> */}

      <div className="flex flex-col gap-5 pb-20 mt-16">
        {workshopsList.map((workshop, index) => (
          <Fragment key={workshop.title}>
            <WorkshopItem index={index} workshop={workshop} />

            {/* Remove divider for last element */}
            {index !== workshopsList.length - 1 && (
              <div className="divider bg-light-gray my-8 w-full h-[2px]"></div>
            )}
          </Fragment>
        ))}
      </div>
    </div>
  );
}
