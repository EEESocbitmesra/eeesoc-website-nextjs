import { Workshop } from "@/types/types";
import { getImageSrc } from "@/utils/getImageSrc";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import styles from "./Workshop.module.css";

interface Props {
  workshop: Workshop;
  index: number;
}

export default function WorkshopItem({ workshop, index }: Props) {
  return (
    <div className="grid grid-cols-2 gap-20 md:flex-row items-center">
      <div
        className={`${
          index % 2 === 0 ? "order-first" : "order-first md:order-last"
        } col-span-2 md:col-span-1`}
      >
        <h1 className="mb-3 text-2xl md:text-3xl">{workshop.title}</h1>
        <div className={styles.workshopContent}>
          <ReactMarkdown>{workshop.content}</ReactMarkdown>
        </div>
      </div>

      <div
        className={`${
          index % 2 === 0 ? "order-first md:order-last" : "order-first"
        } col-span-2 md:col-span-1`}
      >
        <Image
          src={getImageSrc(workshop.contentImage)}
          alt={workshop.title}
          width={648}
          height={365}
          className="rounded object-contain"
        />
      </div>
    </div>
  );
}
