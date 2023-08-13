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
    <div className="py-4 col-lg-4 mb-3 mb-lg-0 col-md-6">
      <a
        href={senior.linkedinUrl ?? "#"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className={styles.content}>
          {/* <div className={styles.contentOverlay} /> */}
          <Image
            src={getImageSrc(senior.image)}
            alt={senior.name}
            height={375}
            width={375}
          />
          <div
            className={`${styles.contentDetails} d-sm-none d-md-flex flex-column justify-content-center ${styles.fadeInBottom}`}
          >
            <h3>{senior.name}</h3>
            <p>{senior.workplace ?? `${year - 4} PASS OUT`}</p>
            <p>{senior?.position}</p>
          </div>
        </div>
      </a>
      <div className={`text-center d-lg-none mt-3 ${styles.visibleDetails}`}>
        <h3 className="fs-5">{senior.name}</h3>
        <h6 className="fw-normal">
          {senior.workplace ?? `${year - 4} PASS OUT`}
        </h6>
        <h6 className="fw-normal text-muted">{senior?.position}</h6>
      </div>
    </div>
  );
}
