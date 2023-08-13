import Image from "next/image";

export default function AboutEEE() {
  return (
    <section className="mt-20 w-5/6 md:w-4/5 mx-auto flex-col flex items-center">
      <h2 className="text-2xl md:text-3xl text-center uppercase">
        EEE Department of BIT Mesra
      </h2>

      <div className="grid grid-cols-12 gap-4 items-center">
        <Image
          src="/images/home/eee_about_page1.png"
          alt="eeesoc-about"
          className="col-span-12 md:col-span-5"
          height={489}
          width={500}
          style={{ objectFit: "contain" }}
        />
        <p className="col-span-12 md:col-span-7">
          The Department of Electrical & Electronics Engineering is dedicated to
          the current needs of industry with the flexibility to tune its
          programs according to different requirements. The application of new
          technology in various fields is one of the main focuses on the
          activities of the department. Department of EEE has recently received
          grants amounting to Rs. 2.7 Crore from UGC, DST, AICTE, CDAC, TEQIP,
          etc. to strengthen the research facility for the development in the
          design and development of lightning protection systems, etc. The
          domain of Smart Grid, Energy Efficient Electrical Motor Drives,
          Department of EEE has MoUs with the University of Padova, Italy and
          with other Industries.
        </p>
      </div>

      <div className="mt-16 flex gap-4 flex-col items-center">
        <h2 className="text-2xl md:text-3xl">In Collaboration with</h2>
        <Image
          src="/images/home/mathworks_logo.jpg"
          alt="mathworks logo"
          className="object-contain"
          width={615}
          height={171}
        />
      </div>
    </section>
  );

  // return (
  //   <section className="pt-5 d-flex flex-column mx-md-0 mx-2">
  //     <h2 className="text-center fs-2">EEE DEPARTMENT OF BIT MESRA</h2>
  //     <div className="container text-center">
  //       <div className="row mt-3">
  //         <div className="col-lg-5 d-none d-lg-block">
  //           <Image
  //             src="/images/home/eee_about_page1.png"
  //             alt="eeesoc-about"
  //             className="img-fluid"
  //             height={489}
  //             width={500}
  //             style={{ objectFit: "contain" }}
  //           />
  //         </div>
  //         <div className="col-lg-7 d-flex align-items-center col-md-12">
  //           <p className="text-start fs-6">
  //             The Department of Electrical &amp; Electronics Engineering is
  //             dedicated to the current needs of industry with the flexibility to
  //             tune its programs according to different requirements. The
  //             application of new technology in various fields is one of the main
  //             focuses on the activities of the department. Department of EEE has
  //             recently received grants amounting to Rs. 2.7 Crore from UGC, DST,
  //             AICTE, CDAC, TEQIP, etc. to strengthen the research facility for
  //             the development in the design and development of lightning
  //             protection systems, etc. The domain of Smart Grid, Energy
  //             Efficient Electrical Motor Drives, Department of EEE has MoUs with
  //             the University of Padova, Italy and with other Industries.
  //           </p>
  //         </div>
  //       </div>

  //       <div className="mt-5 d-flex flex-column">
  //         <h3 className="text-center fs-2">In Collaboration with</h3>
  //         <div className="mt-3">
  //           <Image
  //             src="/images/home/mathworks_logo.jpg"
  //             alt="mathworks logo"
  //             className="img-fluid"
  //             width={615}
  //             height={171}
  //             style={{ objectFit: "contain" }}
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   </section>
  // );
}
