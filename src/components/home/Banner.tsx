import Image from "next/image";
import styles from "./Home.module.css";

export default function Banner() {
  return (
    <div className="bg-banner flex flex-col items-center justify-center h-[80vh] md:h-[95vh]">
      <h1 className="text-white px-4 md:px-0 text-center text-3xl md:text-6xl font-medium">
        Electrical and Electronics Engineering Society
      </h1>
      <h1 className="text-white text-2xl px-4 md:px-0 text-center md:text-5xl mt-8 font-medium">
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
    //             <h1 className="text-white display-4 mt-5">
    //               Birla Institute of Technology, Mesra
    //             </h1>
    //             <div className="col-sm-1 mt-5 col-md-12">
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
