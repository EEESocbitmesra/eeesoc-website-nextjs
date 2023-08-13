import { ExecutiveBodyMember } from "@/types/types";
import styles from "./Home.module.css";
import Image from "next/image";
import { getImageSrc } from "@/utils/getImageSrc";

interface Props {
  member: ExecutiveBodyMember;
}

export default function ExecutiveBodyMember({ member }: Props) {
  return (
    <div className="col-span-2 md:col-span-1 flex flex-col items-center">
      <Image
        src={getImageSrc(member.image)}
        alt={member.name}
        height={300}
        width={300}
        className="rounded-full aspect-square object-cover"
      />
      <h3 className="text-xl mt-8">
        {member.linkedinUrl ? (
          <a
            href={member.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {member.name}
          </a>
        ) : (
          member.name
        )}
      </h3>
      <span className="mt-3">{member.designation}</span>
    </div>
  );

  // return (
  //   <div className="col-lg-6 d-flex flex-column align-items-center mt-6 mt-lg-4">
  //     <Image
  //       src={getImageSrc(member.image)}
  //       alt={member.name}
  //       height={300}
  //       width={300}
  //       style={{ objectFit: "cover" }}
  //       className={"img-fluid rounded-circle " + styles.avatarLarge}
  //     />
  //     <div className="text-center mt-3 p-3">
  //       <h4>
  //         {member.linkedinUrl ? (
  //           <a
  //             href={member.linkedinUrl}
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             {member.name}
  //           </a>
  //         ) : (
  //           member.name
  //         )}
  //       </h4>
  //       <p>{member.designation}</p>
  //     </div>
  //   </div>
  // );
}
