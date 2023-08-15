import Image from "next/image";

export default function AboutEEE() {
  return (
    <section className="wrapper">
      <h2 className="text-center uppercase">EEE Department of BIT Mesra</h2>

      <div className="grid items-center grid-cols-12 gap-4">
        <Image
          src="/images/home/eee_about_page1.png"
          alt="eeesoc-about"
          className="w-3/5 col-span-12 mx-auto xl:w-full xl:col-span-5"
          height={489}
          width={500}
        />
        <p className="col-span-12 xl:col-span-7">
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

      <div className="flex flex-col items-center gap-4 mt-16">
        <h2>In Collaboration with</h2>
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
}
