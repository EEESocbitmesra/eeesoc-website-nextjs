import { Workshop } from "@/types/types";
import { getImageSrc } from "@/utils/getImageSrc";
import Image from "next/image";

interface Props {
  workshop: Workshop;
}

export default function WorkshopCard({ workshop }: Props) {
  return (
    <div className="flex flex-col items-center col-span-3 py-6 sm:col-span-1 shadow-container">
      <Image
        src={getImageSrc(workshop.cardImage)}
        alt={workshop.title + " thumbnail"}
        className="object-contain w-3/4 h-full aspect-square"
        width={200}
        height={200}
      />
      <h4 className="mt-4">{workshop.title}</h4>
    </div>
  );
}
