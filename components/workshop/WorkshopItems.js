import { Fragment } from "react";
import { workshopsList } from "../../data/workshopsList";
import WorkshopItem from "./WorkshopItem";

export default function WorkshopItems() {
  return (
    <div className="d-flex flex-column gap-5 vertical-padding pb-0">
      {workshopsList.map((workshop, index) => (
        <Fragment key={workshop.heading}>
          <WorkshopItem index={index} workshop={workshop} />

          {/* Remove divider for last element */}
          {index !== workshopsList.length - 1 && (
            <div className="divider"></div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
