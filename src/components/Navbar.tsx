"use client";
import { assets, navLinks } from "@/lib/assets";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 30) {
        setStickyNav(true);
      } else {
        setStickyNav(false);
      }
    };

    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <>
      <section
        className={`${stickyNav ? "fixed top-0 bg-col-1 shadow-lg border-col-3" : "absolute top-7.5 border-transparent"} border-b py-5 transition-all duration-300 w-full z-50"`}
      >
        <Container>
          <div className="flex items-center gap-2 justify-between">
            <div>
              <Link
                href={"/"}
                className="flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Image
                  src={assets.logo}
                  alt="Logo"
                  width={200}
                  loading="eager"
                  height={200}
                  className="size-12.75"
                />
                <span className="font-clash-display max-sm:hidden text-4xl leading-10.25 font-semibold">
                  Orinix
                </span>
              </Link>
            </div>
            <nav className="lg:flex hidden items-center gap-4.75">
              {navLinks.map((link) => (
                <Link
                  href={link.url}
                  key={link.id}
                  className="font-clash-display transition-all duration-300 hover:-translate-y-0.5 font-normal text-lg leading-6.75 tracking-[0.36px]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <button className="sm:px-7 sm:py-3.5 px-5 py-2.5 transition-all duration-300 hover:-translate-y-0.5 bg-col-2 rounded-[10px] inline-flex items-center justify-center font-clash-display font-semibold text-base sm:text-lg">
                Join The waitlist
              </button>
              <button className="lg:hidden" onClick={() => setShowNav(true)}>
                <FaBars className="text-3xl sm:text-4xl" />
              </button>
            </div>
          </div>
        </Container>
      </section>
      <div className="overflow-hidden">
        <div
          className={`lg:hidden max-lg:w-4/10 max-md:w-6/10 max-sm:w-8/10 bg-col-3 min-h-screen fixed left-0 top-0 transition-all duration-300 z-60 flex justify-center items-center ${showNav ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="flex flex-col justify-center items-center h-full gap-3">
            {navLinks.map((link) => (
              <Link
                href={link.url}
                key={link.id}
                className="text-lg font-clash-display font-normal hover:-translate-y-0.5 transition-all duration-300"
                onClick={() => setShowNav(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <button
            className="absolute top-3 right-3 opacity-60 hover:opacity-100 transition-all duration-300"
            onClick={() => setShowNav(false)}
          >
            <IoIosClose className="text-4xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
