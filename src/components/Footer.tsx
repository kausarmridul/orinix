import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import { assets } from "@/lib/assets";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="sm:pt-14.25 sm:pb-18.75 py-10">
      <Container>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-5">
          <div className="lg:col-span-4">
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
                <span className="font-clash-display text-4xl leading-10.25 font-semibold">
                  Orinix
                </span>
              </Link>
            </div>
            <ul className="flex items-center gap-4 mt-9">
              <li>
                <Link
                  href={""}
                  className="inline-flex size-6 rounded-full items-center justify-center bg-col-5 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <FaTwitter className="text-xs" />
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="inline-flex size-6 rounded-full items-center justify-center bg-col-6 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <FaFacebookF className="text-xs" />
                </Link>
              </li>
              <li>
                <Link
                  href={""}
                  className="inline-flex size-6 rounded-full items-center justify-center bg-col-7 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <FaLinkedinIn className="text-xs" />
                </Link>
              </li>
            </ul>
            <p className="font-inter font-normal text-xs text-white/75 mt-16.5 max-lg:hidden">
              &copy; {new Date().getFullYear()} Orinix Reserved
            </p>
          </div>
          <div className="lg:col-span-8 lg:pt-15.75 flex justify-between max-sm:flex-col max-sm:gap-8">
            <div>
              <h3 className="font-manrope font-extrabold text-sm mb-4">
                Product
              </h3>
              <ul>
                <li>
                  <Link
                    href={""}
                    className="font-inter text-sm text-white/75 leading-8.5"
                  >
                    Landingpage
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="font-inter text-sm text-white/75 leading-8.5"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="font-inter text-sm text-white/75 leading-8.5"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="font-inter text-sm text-white/75 leading-8.5"
                  >
                    Referral
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="font-inter text-sm text-white/75 leading-8.5"
                  >
                    Program Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-manrope font-extrabold text-sm mb-4">
                Services
              </h3>
              <ul>
                <li>
                  <Link
                    href={""}
                    className="font-inter text-sm text-white/75 leading-8.5"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="font-inter text-sm text-white/75 leading-8.5"
                  >
                    Design
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="font-inter text-sm text-white/75 leading-8.5"
                  >
                    Themes
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="font-inter text-sm text-white/75 leading-8.5"
                  >
                    Illustrations
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="font-inter text-sm text-white/75 leading-8.5"
                  >
                    UI Kit
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-manrope font-extrabold text-sm mb-4">
                Company
              </h3>
              <ul>
                <li>
                  <Link
                    href={""}
                    className="font-inter text-sm text-white/75 leading-8.5"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="font-inter text-sm text-white/75 leading-8.5"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="font-inter text-sm text-white/75 leading-8.5"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="font-inter text-sm text-white/75 leading-8.5"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-manrope font-extrabold text-sm mb-4">More</h3>
              <ul>
                <li>
                  <Link
                    href={""}
                    className="font-inter text-sm text-white/75 leading-8.5"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="font-inter text-sm text-white/75 leading-8.5"
                  >
                    License
                  </Link>
                </li>
                <li>
                  <Link
                    href={""}
                    className="font-inter text-sm text-white/75 leading-8.5"
                  >
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <p className="font-inter font-normal text-xs text-white/75 mt-10 text-center lg:hidden">
            &copy; {new Date().getFullYear()} Orinix Reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
