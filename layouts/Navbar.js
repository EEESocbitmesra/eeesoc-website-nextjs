import Link from "next/link";
import { useRef } from "react";
import { navlinksList } from "../data/navbarLinks";
import NextImage from "./NextImage";

export default function Navbar() {
  const menuRef = useRef();
  const btnRef = useRef();

  const closeMenu = () => {
    if (menuRef.current.classList.contains("show")) {
      btnRef.current.click();
    }
  };

  return (
    <nav className="py-1 navbar navbar-expand-lg fixed-top">
      <div className="container">
        {/* EEESoc Logo */}
        <Link className="navbar-brand" href="/">
          <a>
            <NextImage
              src="/home/eeesoc_logo.png"
              alt="eeesoc_logo"
              width={106}
              height={76}
            />
          </a>
        </Link>

        {/* Hamburger Menu */}
        <button
          className="navbar-toggler"
          ref={btnRef}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="p-3">
            <i className="fa-solid fa-bars text-white"></i>
          </span>
        </button>

        {/* Navbar links */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarContent"
          ref={menuRef}
          // data-bs-toggle="collapse"
          // data-bs-target="#navbarContent"
        >
          <ul className="navbar-nav">
            {navlinksList.map((navlink) => (
              <Link key={navlink.label} href={navlink.path}>
                <a className="nav-link link-light">
                  <li
                    className="nav-item mx-1 text-uppercase"
                    onClick={closeMenu}
                  >
                    {navlink.label}
                  </li>
                </a>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
