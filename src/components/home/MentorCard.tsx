import { Mentor } from "@/types/types";
import { getImageSrc } from "@/utils/getImageSrc";
import Image from "next/image";
import Link from "next/link";

interface Props {
  mentor: Mentor;
}

export default function MentorCard({ mentor }: Props) {
  return (
    <div className="col-span-2 md:col-span-1 flex p-8 flex-col items-center shadow-container">
      <Image
        src={getImageSrc(mentor.image)}
        alt={mentor.name}
        height={150}
        width={150}
        className="object-contain rounded"
      />
      <div className="mt-4">
        <h3 className="text-xl">
          {mentor.profileLink ? (
            <a href={mentor.profileLink}>{mentor.name}</a>
          ) : (
            mentor.name
          )}
        </h3>
        <div className="mt-4">{mentor.designation}</div>
        <div>{mentor.department}</div>
        <p className="mt-4">
          <strong>Areas of interest: </strong>
          {mentor.areasOfInterest.join(", ")}
        </p>
      </div>
    </div>
  );

  // return (
  //   <div className="col-span-1">
  //     <div className="shadow-container py-5 px-3">
  //       <Image
  //         src={getImageSrc(mentor.image)}
  //         alt={mentor.name}
  //         height={150}
  //         width={150}
  //         style={{ objectFit: "contain" }}
  //         className="img-fluid"
  //       />
  //       <div className="mt-4">
  //         <h4 className="mb-3">
  //           {mentor.profileLink ? (
  //             <a
  //               href={mentor.profileLink}
  //               target="_blank"
  //               rel="noopener noreferrer"
  //             >
  //               {mentor.name}
  //             </a>
  //           ) : (
  //             mentor.name
  //           )}
  //         </h4>
  //         <p>
  //           {mentor.designation}
  //           <br />
  //           {mentor.department}
  //         </p>
  //         <p>
  //           <strong>Areas of Interest</strong>:{" "}
  //           {mentor.areasOfInterest.join(", ")}
  //         </p>
  //       </div>
  //     </div>
  //   </div>
  // );
}
