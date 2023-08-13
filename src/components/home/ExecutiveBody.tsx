import { executiveMembersList } from "@/data/executiveMembersList";
import ExecutiveBodyMember from "./ExecutiveBodyMember";

export default function ExecutiveBody() {
  return (
    <section className="my-20 flex flex-col items-center w-5/6 md:w-4/5 mx-auto">
      <h2 className="text-2xl md:text-3xl text-center">
        Executive Body (2022-2023)
      </h2>

      <div className="grid grid-cols-2 justify-center w-full mt-16 gap-16 items-center">
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
