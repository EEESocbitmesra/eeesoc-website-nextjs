"use client";

import { navlinksList } from "@/data/navbarLinks";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Navbar() {
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    if (menuRef.current?.classList.contains("show")) {
      btnRef.current?.click();
    }
  };

  return (
    <nav className="sticky py-2 top-0 backdrop-filter backdrop-blur-lg bg-opacity-90 bg-blue w-full z-50">
      <header className="w-4/5 mx-auto flex items-center justify-between">
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
              className="uppercase text-sm hover:underline text-white hover:text-white"
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
  //           <i className="fa-solid fa-bars text-white"></i>
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
  //                 className="nav-item text-blue-600 nav-link link-light mx-1 text-uppercase"
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
