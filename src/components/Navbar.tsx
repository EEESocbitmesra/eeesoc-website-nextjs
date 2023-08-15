"use client";

import { navlinksList } from "@/data/navbarLinks";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  // const menuRef = useRef<HTMLDivElement>(null);
  // const btnRef = useRef<HTMLButtonElement>(null);

  // const closeMenu = () => {
  //   if (menuRef.current?.classList.contains("show")) {
  //     btnRef.current?.click();
  //   }
  // };

  return (
    <nav className="sticky top-0 z-50 w-full py-2 backdrop-filter backdrop-blur-lg bg-opacity-90 bg-blue">
      <header className="flex items-center justify-between w-full mx-auto md:w-5/6">
        <Link href="/">
          <Image
            src="/images/home/eeesoc_logo.png"
            alt="eeesoc logo"
            width={106}
            height={76}
            className="object-contain"
          />
        </Link>

        <ul className="flex items-center gap-8">
          {navlinksList.map((navlink) => (
            <Link
              href={navlink.path}
              key={navlink.label}
              className="text-sm text-white uppercase hover:underline hover:text-white"
            >
              {navlink.label}
            </Link>
          ))}
        </ul>

        <div></div>
      </header>
    </nav>
  );

  // return (
  //   <nav className="navbar navbar-expand-lg fixed-top">
  //     <div className="container">
  //       {/* EEESoc Logo */}
  //       <Link className="navbar-brand" href="/">
  //         <Image
  //           src="/images/home/eeesoc_logo.png"
  //           alt="eeesoc logo"
  //           width={106}
  //           height={76}
  //           style={{ objectFit: "contain" }}
  //         />
  //       </Link>

  //       {/* Hamburger Menu */}
  //       <button
  //         className="navbar-toggler"
  //         ref={btnRef}
  //         type="button"
  //         data-bs-toggle="collapse"
  //         data-bs-target="#navbarContent"
  //         aria-controls="navbarSupportedContent"
  //         aria-expanded="false"
  //         aria-label="Toggle navigation"
  //       >
  //         <span className="p-3">
  //           <i className="text-white fa-solid fa-bars"></i>
  //         </span>
  //       </button>

  //       {/* Navbar links */}
  //       <div
  //         className="collapse navbar-collapse justify-content-center"
  //         id="navbarContent"
  //         ref={menuRef}
  //         // data-bs-toggle="collapse"
  //         // data-bs-target="#navbarContent"
  //       >
  //         <ul className="navbar-nav">
  //           {navlinksList.map((navlink) => (
  //             <Link key={navlink.label} href={navlink.path}>
  //               <li
  //                 className="mx-1 text-blue-600 nav-item nav-link link-light text-uppercase"
  //                 onClick={closeMenu}
  //               >
  //                 {navlink.label}
  //               </li>
  //             </Link>
  //           ))}
  //         </ul>
  //       </div>
  //     </div>
  //   </nav>
  // );
}
