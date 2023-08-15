import Image from "next/image";

export default function Banner() {
  return (
    <div className="bg-banner flex flex-col items-center justify-center h-[80vh] md:h-[95vh]">
      <h1 className="px-4 text-3xl font-medium text-center text-white md:px-0 md:text-6xl">
        Electrical and Electronics Engineering Society
      </h1>
      <h1 className="px-4 mt-8 text-2xl font-medium text-center text-white md:px-0 md:text-5xl">
        Birla Institute of Technology, Mesra
      </h1>
      <Image
        src="/images/home/bit_logo.png"
        alt="BIT Mesra logo"
        className="object-contain mt-16"
        width={220}
        height={220}
      />
    </div>
    // <div className={styles.banner}>
    //   <div className={styles.overlay}>
    //     <div className="container">
    //       <div className="row">
    //         <div className="m-auto text-center col-lg-12 col-md-12">
    //           <div className={styles.bannerContent}>
    //             <h1 className="text-white display-4">
    //               Electrical and Electronics Engineering Society
    //             </h1>
    //             <h1 className="mt-5 text-white display-4">
    //               Birla Institute of Technology, Mesra
    //             </h1>
    //             <div className="mt-5 col-sm-1 col-md-12">
    //               <Image
    //                 src="/images/home/bit_logo.png"
    //                 alt="BIT Mesra logo"
    //                 className="img-fluid"
    //                 style={{ objectFit: "contain" }}
    //                 width={220}
    //                 height={220}
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
