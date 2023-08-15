"use client";

import { navlinksList } from "@/data/navbarLinks";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full py-2 backdrop-filter backdrop-blur-lg bg-opacity-90 bg-blue">
      <header className="flex items-center justify-between w-full px-8 mx-auto xl:w-5/6">
        <Link href="/">
          <Image
            src="/images/home/eeesoc_logo.png"
            alt="eeesoc logo"
            width={106}
            height={76}
            className="object-contain"
          />
        </Link>

        <ul className="items-center hidden gap-8 xl:flex">
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

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="block p-2 text-white border border-white rounded xl:hidden aspect-square">
              <MdMenu className="text-xl" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-blue/80">
            <div className="flex flex-col items-center w-full h-full gap-4">
              {navlinksList.map((navlink) => (
                <Link
                  key={navlink.path}
                  href={navlink.path}
                  className="text-sm text-white uppercase hover:underline hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {navlink.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>

        <div className="hidden xl:block"></div>
      </header>
    </nav>
  );
}
