import { Workshop } from "@/types/types";
import { getImageSrc } from "@/utils/getImageSrc";
import Image from "next/image";

interface Props {
  workshop: Workshop;
}

export default function WorkshopCard({ workshop }: Props) {
  return (
    <div className="shadow-container py-6 flex items-center flex-col col-span-3 md:col-span-1">
      <Image
        src={getImageSrc(workshop.cardImage)}
        alt={workshop.title + " thumbnail"}
        className="object-contain aspect-square w-3/4 h-full"
        width={200}
        height={200}
      />
      <h4 className="md:text-xl text-lg mt-4">{workshop.title}</h4>
    </div>
  );
}
