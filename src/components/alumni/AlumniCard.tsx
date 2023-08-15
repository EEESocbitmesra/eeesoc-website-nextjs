import { Alumni } from "@/types/types";
import styles from "./Alumni.module.css";
import Image from "next/image";
import { getImageSrc } from "@/utils/getImageSrc";

interface Props {
  senior: Alumni;
  year: number;
}

export default function AlumniCard({ senior, year }: Props) {
  return (
    <div className="w-full py-4 md:w-1/3">
      <a
        href={senior.linkedinUrl ?? "#"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.content}>
          <Image
            src={getImageSrc(senior.image)}
            alt={senior.name}
            height={375}
            width={375}
            className="rounded"
          />
          <div
            className={`${styles.contentDetails} sm-hidden rounded md:flex flex-col justify-center ${styles.fadeInBottom}`}
          >
            <h3>{senior.name}</h3>
            <p>{senior.workplace ?? `${year - 4} PASS OUT`}</p>
            <p>{senior?.position}</p>
          </div>
        </div>
      </a>
      <div className={`text-center lg:hidden mt-3 ${styles.visibleDetails}`}>
        <h4>{senior.name}</h4>
        <h6 className="font-normal">
          {senior.workplace ?? `${year - 4} PASS OUT`}
        </h6>
        <h6 className="font-normal text-neutral-500">{senior?.position}</h6>
      </div>
    </div>
  );
}
