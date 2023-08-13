import { Fragment } from "react";
import WorkshopItem from "./WorkshopItem";
import { workshopsList } from "@/data/workshopsList";

export default function WorkshopItems() {
  return (
    <div className="flex flex-col gap-5 mt-32 pb-20">
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
  );
}
