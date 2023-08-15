import Markdown from "markdown-to-jsx";

import { Workshop } from "@/types/types";
import { getImageSrc } from "@/utils/getImageSrc";
import Image from "next/image";

interface Props {
  workshop: Workshop;
  index: number;
}

export default function WorkshopItem({ workshop, index }: Props) {
  return (
    <div className="grid items-center grid-cols-2 gap-20 xl:flex-row">
      <div
        className={`${
          index % 2 === 0 ? "order-first" : "order-first xl:order-last"
        } col-span-2 xl:col-span-1`}
      >
        <h2 className="mb-3">{workshop.title}</h2>
        <div className="text-justify">
          <Markdown
            options={{
              overrides: {
                ul: { props: { className: "list-square my-2" } },
                ol: { props: { className: "list-decimal my-2" } },
                li: { props: { className: "list-inside" } },
              },
            }}
          >
            {workshop.content}
          </Markdown>
        </div>
      </div>

      <div
        className={`${
          index % 2 === 0 ? "order-first xl:order-last" : "order-first"
        } col-span-2 xl:col-span-1`}
      >
        <Image
          src={getImageSrc(workshop.contentImage)}
          alt={workshop.title}
          width={648}
          height={365}
          className="object-contain mx-auto rounded"
        />
      </div>
    </div>
  );
}
