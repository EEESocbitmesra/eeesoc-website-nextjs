import NextImage from "../../layouts/NextImage";

export default function MentorCard({ mentor }) {
  return (
    <div className="col-lg-4">
      <div className="shadow-container py-5 px-3">
        <NextImage
          src={mentor.imgUrl}
          alt={mentor.name}
          height={150}
          width={150}
          objectFit="contain"
          className="img-fluid"
        />
        <div className="mt-4">
          <h4 className="mb-3">
            {mentor.profile ? (
              <a
                href={mentor.profile}
                target="_blank"
                rel="noopener noreferrer"
              >
                {mentor.name}
              </a>
            ) : (
              mentor.name
            )}
          </h4>
          <p>
            {mentor.designation}
            <br />
            {mentor.department}
          </p>
          <p>
            <strong>Areas of Interest</strong>:{" "}
            {mentor.areasOfInterest.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
}
