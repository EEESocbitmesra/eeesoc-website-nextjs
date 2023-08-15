"use client";

import { executiveMembersList } from "@/data/executiveMembersList";
import { useId } from "react";
import ExecutiveBodyMember from "./ExecutiveBodyMember";

export default function ExecutiveBody() {
  const id = useId();

  return (
    <section className="wrapper">
      <h2 className="text-center">Executive Body (2022-2023)</h2>

      <div className="grid items-center justify-center w-full grid-cols-2 gap-16 mt-16">
        {executiveMembersList.map((member) => (
          <ExecutiveBodyMember key={id} member={member} />
        ))}
      </div>
    </section>
  );
}
