import { currentPresident } from "@/data/contact";
import {
  emailUrl,
  facebookUrl,
  linkedinUrl,
  mediumUrl,
} from "@/data/socialLinks";
import { BsMedium } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-20 pb-0 flex flex-col items-center bg-footer">
      <h2 className="text-2xl md:text-3xl">Connect with us</h2>
      <div className="divider mt-2 divider-small"></div>

      <div className="w-4/5 mx-auto flex flex-col mt-16 items-center">
        <div className="grid grid-cols-3 w-full">
          <div className="flex flex-col col-span-3 md:col-span-1 items-center">
            <h4 className="text-2xl mb-4">Find us here</h4>
            <address>
              Department of Electrical and Electronics Engineering,
              <br />
              Birla Institute of Technology, Mesra
              <br />
              Ranchi, Jharkhand.
              <br />
              Pin Code - 835215.
            </address>
          </div>
          <div className="flex mt-8 md:mt-0 flex-col col-span-3 md:col-span-1 items-center">
            <h4 className="text-2xl mb-4">Mail us at</h4>
            <a href="mailto:eeesoc@bitmesra.ac.in">eeesoc@bitmesra.ac.in</a>
          </div>
          <div className="flex flex-col mt-8 md:mt-0 col-span-3 md:col-span-1 items-center">
            <h4 className="text-2xl mb-4">Call us at</h4>
            <p>{currentPresident.mobile}</p>
          </div>
        </div>

        <h4 className="text-2xl mt-10">Social Links</h4>
        <div className="flex items-center gap-6 mt-4">
          <a href={facebookUrl} target="_blank" rel="noopener">
            <RiFacebookFill className="text-2xl" />
          </a>
          <a href={linkedinUrl} target="_blank" rel="noopener">
            <FaLinkedin className="text-2xl" />
          </a>
          <a href={emailUrl} target="_blank" rel="noopener">
            <MdMail className="text-2xl" />
          </a>
          <a href={mediumUrl} target="_blank" rel="noopener">
            <BsMedium className="text-2xl" />
          </a>
        </div>
      </div>

      <div className="border-t mt-20 py-5 border-light-gray flex items-center w-full text-center tracking-widest justify-center">
        Copyright &#169; {currentYear}
      </div>
    </footer>
  );

  // return (
  //   <footer className="vertical-padding pb-4">
  //     <div className={styles.bgWrap}>
  //       <Image
  //         src="/images/footer_bg.png"
  //         alt="footer background"
  //         fill={true}
  //         style={{ objectFit: "contain" }}
  //       />
  //     </div>
  //     <div className="container">
  //       <h4 className="text-center fs-2">Connect with us</h4>
  //       <div className="divider divider-small" />

  //       <div className="row mt-5">
  //         <div className="col-lg-4 text-center">
  //           <h4>Find us here</h4>
  //           <address className="mt-4">
  //             Department of Electrical and Electronics Engineering,
  //             <br />
  //             Birla Institute of Technology, Mesra
  //             <br />
  //             Ranchi, Jharkhand.
  //             <br />
  //             Pin Code - 835215.
  //           </address>
  //         </div>

  //         <div className="col-lg-4 mt-4 mt-lg-0 text-center">
  //           <h4>Mail us at</h4>
  //           <p className="mt-4">
  //             <a className="link-dark" href="mailto:eeesoc@bitmesra.ac.in">
  //               eeesoc@bitmesra.ac.in
  //             </a>
  //           </p>
  //         </div>

  //         <div className="col-lg-4 mt-4 mt-lg-0 text-center">
  //           <h4>Call us at</h4>
  //           <p className="mt-4">{currentPresident.mobile}</p>
  //         </div>

  //         <div className="mt-4">
  //           <h4 className="text-center">Social Links</h4>
  //           <div className="d-flex justify-content-center gap-4 mt-4">
  //             <div>
  //               <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
  //                 <i className="fa-brands fa-facebook-f fa-lg text-dark"></i>
  //               </a>
  //             </div>
  //             <div>
  //               <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
  //                 <i className="fa-brands fa-linkedin fa-lg text-dark"></i>
  //               </a>
  //             </div>
  //             <div>
  //               <a href={emailUrl}>
  //                 <i className="fa-solid fa-envelope fa-lg text-dark"></i>
  //               </a>
  //             </div>
  //             <div>
  //               <a href={mediumUrl} target="_blank" rel="noopener noreferrer">
  //                 <i className="fa-brands fa-medium fa-lg text-dark"></i>
  //               </a>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>

  //     <div className={styles.footerCopyright}>
  //       Copyright &#169; {currentYear}.
  //     </div>
  //   </footer>
  // );
}
