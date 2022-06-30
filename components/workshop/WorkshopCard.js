import NextImage from "../../layouts/NextImage";

export default function WorkshopCard({ workshop }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="shadow-container p-3 mb-5">
        <div style={{ height: "250px" }} className="position-relative">
          <NextImage
            src={workshop.cardImage}
            alt={workshop.heading + " thumbnail"}
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h5 className="mt-4">{workshop.heading}</h5>
      </div>
    </div>
  );
}
