import { Mentor } from "@/types/types";
import { getImageSrc } from "@/utils/getImageSrc";
import Image from "next/image";

interface Props {
  mentor: Mentor;
}

export default function MentorCard({ mentor }: Props) {
  return (
    <div className="flex flex-col items-center col-span-2 p-8 xl:col-span-1 shadow-container">
      <Image
        src={getImageSrc(mentor.image)}
        alt={mentor.name}
        height={150}
        width={150}
        className="object-contain rounded"
      />
      <div className="mt-6">
        <h4>
          {mentor.profileLink ? (
            <a href={mentor.profileLink}>{mentor.name}</a>
          ) : (
            mentor.name
          )}
        </h4>
        <div className="mt-4">{mentor.designation}</div>
        <div>{mentor.department}</div>
        <p className="mt-4">
          <strong>Areas of interest: </strong>
          {mentor.areasOfInterest.join(", ")}
        </p>
      </div>
    </div>
  );
}
