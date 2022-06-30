import NextImage from "../../layouts/NextImage";
import styles from "./Home.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.overlay}>
        <div className="container">
          <div className="row">
            <div className="m-auto text-center col-lg-12 col-md-12">
              <div className={styles.bannerContent}>
                <h1 className="text-white display-4">
                  Electrical and Electronics Engineering Society
                </h1>
                <h1 className="text-white display-4 mt-5">
                  Birla Institute of Technology, Mesra
                </h1>
                <div className="col-sm-1 mt-5 col-md-12">
                  <NextImage
                    src="/home/bit_logo.png"
                    alt="BIT Mesra logo"
                    className="img-fluid"
                    objectFit="contain"
                    width={220}
                    height={220}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
