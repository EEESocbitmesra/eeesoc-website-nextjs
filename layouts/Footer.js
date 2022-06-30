import { currentPresident } from "../data/currentPresident";
import {
  emailUrl,
  facebookUrl,
  linkedinUrl,
  mediumUrl,
} from "../data/socialLinks";
import styles from "./Footer.module.css";
import NextImage from "../layouts/NextImage";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="vertical-padding pb-4">
      <div className={styles.bgWrap}>
        <NextImage
          src="/images/footer_bg.png"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="container">
        <h4 className="text-center fs-2">Connect with us</h4>
        <div className="divider divider-small" />

        <div className="row mt-5">
          <div className="col-lg-4 text-center">
            <h4>Find us here</h4>
            <address className="mt-4">
              Department of Electrical and Electronics Engineering,
              <br />
              Birla Institute of Technology, Mesra
              <br />
              Ranchi, Jharkhand.
              <br />
              Pin Code - 835215.
            </address>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0 text-center">
            <h4>Mail us at</h4>
            <p className="mt-4">
              <a className="link-dark" href="mailto:eeesoc@bitmesra.ac.in">
                eeesoc@bitmesra.ac.in
              </a>
            </p>
          </div>

          <div className="col-lg-4 mt-4 mt-lg-0 text-center">
            <h4>Call us at</h4>
            <p className="mt-4">{currentPresident.mobile}</p>
          </div>

          <div className="mt-4">
            <h4 className="text-center">Social Links</h4>
            <div className="d-flex justify-content-center gap-4 mt-4">
              <div>
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-facebook-f fa-lg text-dark"></i>
                </a>
              </div>
              <div>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-linkedin fa-lg text-dark"></i>
                </a>
              </div>
              <div>
                <a href={emailUrl}>
                  <i className="fa-solid fa-envelope fa-lg text-dark"></i>
                </a>
              </div>
              <div>
                <a href={mediumUrl} target="_blank" rel="noopener noreferrer">
                  <i className="fa-brands fa-medium fa-lg text-dark"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerCopyright}>
        Copyright &#169; {currentYear}.
      </div>
    </footer>
  );
}
