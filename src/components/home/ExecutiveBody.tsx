import { executiveMembersList } from "@/data/executiveMembersList";
import ExecutiveBodyMember from "./ExecutiveBodyMember";

export default function ExecutiveBody() {
  return (
    <section className="wrapper">
      <h2 className="text-center">Executive Body (2022-2023)</h2>

      <div className="grid items-center justify-center w-full grid-cols-2 gap-16 mt-16">
        {executiveMembersList.map((member) => (
          <ExecutiveBodyMember
            key={member.name + member.designation}
            member={member}
          />
        ))}
      </div>
    </section>
  );

  // return (
  //   <section className="d-flex vertical-padding flex-column">
  //     <h4 className="text-center fs-2">Executive Body (2022 - 2023)</h4>
  //     <div className="container mt-4">
  //       <div className="row">
  //         {executiveMembersList.map((member) => (
  //           <ExecutiveBodyMember
  //             key={member.name + member.designation}
  //             member={member}
  //           />
  //         ))}
  //       </div>
  //     </div>
  //   </section>
  // );
}
