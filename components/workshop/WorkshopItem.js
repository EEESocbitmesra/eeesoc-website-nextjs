import NextImage from "../../layouts/NextImage";
import ReactMarkdown from "react-markdown";
import styles from "./Workshop.module.css";

export default function WorkshopItem({ workshop, index }) {
  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="d-flex flex-column gap-5 flex-lg-row flex-nowrap align-items-center">
          <div
            className={`${
              index % 2 === 0 ? "order-lg-1" : "order-lg-2"
            } col-lg-6`}
          >
            <h1 className="mb-3">{workshop.heading}</h1>
            <div className={styles.workshopContent}>
              <ReactMarkdown>{workshop.content}</ReactMarkdown>
            </div>
          </div>

          <div
            className={`${
              index % 2 === 0 ? "order-lg-2" : "order-lg-1"
            } col-lg-6`}
          >
            <NextImage
              src={workshop.contentImage}
              alt={workshop.heading}
              width={648}
              height={365}
              objectFit="contain"
              className="rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
