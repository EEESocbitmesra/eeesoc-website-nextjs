import { ExecutiveBodyMember } from "@/types/types";
import { getImageSrc } from "@/utils/getImageSrc";
import Image from "next/image";

interface Props {
  member: ExecutiveBodyMember;
}

export default function ExecutiveBodyMember({ member }: Props) {
  return (
    <div className="flex flex-col items-center col-span-2 md:col-span-1">
      <Image
        src={getImageSrc(member.image)}
        alt={member.name}
        height={300}
        width={300}
        className="object-cover rounded-full aspect-square"
      />
      <h4 className="mt-8">
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
      </h4>
      <span className="mt-1 text-neutral-600">{member.designation}</span>
    </div>
  );

  // return (
  //   <div className="mt-6 col-lg-6 d-flex flex-column align-items-center mt-lg-4">
  //     <Image
  //       src={getImageSrc(member.image)}
  //       alt={member.name}
  //       height={300}
  //       width={300}
  //       style={{ objectFit: "cover" }}
  //       className={"img-fluid rounded-circle " + styles.avatarLarge}
  //     />
  //     <div className="p-3 mt-3 text-center">
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
