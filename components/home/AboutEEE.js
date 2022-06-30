import NextImage from "../../layouts/NextImage";

export default function AboutEEE() {
  return (
    <section className="pt-5 d-flex flex-column mx-md-0 mx-2">
      <h2 className="text-center fs-2">EEE DEPARTMENT OF BIT MESRA</h2>
      <div className="container text-center">
        <div className="row mt-3">
          <div className="col-lg-5 d-none d-lg-block">
            <NextImage
              src="/home/eee_about_page1.png"
              alt="eeesoc-about"
              className="img-fluid"
              height={489}
              width={500}
              objectFit="contain"
            />
          </div>
          <div className="col-lg-7 d-flex align-items-center col-md-12">
            <p className="text-start fs-6">
              The Department of Electrical &amp; Electronics Engineering is
              dedicated to the current needs of industry with the flexibility to
              tune its programs according to different requirements. The
              application of new technology in various fields is one of the main
              focuses on the activities of the department. Department of EEE has
              recently received grants amounting to Rs. 2.7 Crore from UGC, DST,
              AICTE, CDAC, TEQIP, etc. to strengthen the research facility for
              the development in the design and development of lightning
              protection systems, etc. The domain of Smart Grid, Energy
              Efficient Electrical Motor Drives, Department of EEE has MoUs with
              the University of Padova, Italy and with other Industries.
            </p>
          </div>
        </div>

        <div className="mt-5 d-flex flex-column">
          <h3 className="text-center fs-2">In Collaboration with</h3>
          <div className="mt-3">
            <NextImage
              src="/home/mathworks_logo.jpg"
              alt="mathworks logo"
              className="img-fluid"
              width={615}
              height={171}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
