"use client";
import { useState } from "react";
import Container from "./Container";
import { pricingList } from "@/lib/assets";
import { IoCheckmark } from "react-icons/io5";

const PricingPlans = () => {
  const [monthly, setMonthly] = useState(true);
  return (
    <section
      className="lg:pb-55.75 scroll-mt-30 lg:pt-25.25 py-25"
      id="pricing"
    >
      <Container>
        <div className="text-center">
          <h3 className="font-clash-display font-semibold text-xl sm:text-[26px] md:text-[40px] lg:text-[60px] lg:leading-18.5 capitalize mb-2.5">
            Pricing Plans
          </h3>
          <p className="text-sm sm:text-base lg:leading-6.5 font-normal text-white/75 mb-16 font-dm-sans lg:tracking-[-0.5px]">
            Coca landing page UI Kit no credit card required. All plans come
            with <br className="max-lg:hidden" /> a free, 14 day trial of our
            Premium features.
          </p>
        </div>
        <div className="flex items-center justify-center bg-white w-fit mx-auto rounded-lg overflow-hidden mb-16">
          <button
            className={`font-bold text-sm tracking-[-0.5px] font-dm-sans px-7 leading-10 ${monthly ? "bg-col-12 text-white" : "text-col-13 bg-transparent"}`}
            onClick={() => setMonthly(true)}
          >
            Monthly
          </button>
          <button
            className={`font-bold text-sm tracking-[-0.5px] font-dm-sans px-7 leading-10 ${monthly ? "bg-transparent text-col-13" : "bg-col-12 text-white"}`}
            onClick={() => setMonthly(false)}
          >
            Yearly
          </button>
        </div>
        <div className="grid lg:grid-cols-3 gap-18 lg:gap-8 xl:gap-12 lg:items-start">
          {pricingList.map((pricing) => (
            <div
              className={`${pricing.bgColor ? " pt-21.25 lg:pb-12 pb-10 bg-col-12 border-transparent" : "bg-col-9 border-col-4 lg:pt-10 lg:pb-15 py-10"} px-8 lg:px-10 xl:px-12 border rounded-[26px] hover:scale-102 transition-all duration-300 relative`}
              key={pricing.id}
            >
              {pricing.bgColor && (
                <span className="bg-col-17 text-col-18 block w-fit mx-auto absolute left-1/2 -translate-x-1/2 rounded-full leading-13.75 font-dm-sans font-bold text-sm whitespace-nowrap tracking-[-0.5px] uppercase border-8 border-white top-0 px-6.5 mt-[-35.5px]">
                  most popular
                </span>
              )}
              <span className="uppercase font-dm-sans text-sm leading-5 tracking-[-0.5px] font-bold opacity-50 inline-block pl-0.5 mb-1.5">
                {pricing.plan}
              </span>
              <h3 className="font-clash-display lg:text-5xl text-3xl lg:leading-13 lg:tracking-[-2%] font-semibold mb-6">
                ${monthly ? pricing.monthly : pricing.yearly}
                <span className="lg:text-lg text-base lg:leading-7 font-medium font-dm-sans">
                  /month
                </span>
              </h3>
              <hr
                className={`${pricing.bgColor ? "border-col-15" : "border-col-14"}`}
              />
              <ul className="mt-6 grid gap-6 mb-14.25">
                <li className="flex items-center gap-2.5">
                  <span
                    className={`min-w-5 max-h-5 min-h-5 max-w-5 inline-flex items-center justify-center rounded-full ${pricing.bgColor ? "bg-col-14/20" : "bg-col-12"}`}
                  >
                    <IoCheckmark className="text-sm" />
                  </span>
                  <h3 className="font-dm-sans text-sm lg:leading-5.5 font-normal">
                    No Discount
                  </h3>
                </li>
                <li className="flex items-center gap-2.5">
                  <span
                    className={`min-w-5 max-h-5 min-h-5 max-w-5 inline-flex items-center justify-center rounded-full ${pricing.bgColor ? "bg-col-14/20" : "bg-col-12"}`}
                  >
                    <IoCheckmark className="text-sm" />
                  </span>
                  <h3 className="font-dm-sans text-sm lg:leading-5.5 font-normal">
                    Basic Support
                  </h3>
                </li>
                <li className="flex items-center gap-2.5">
                  <span
                    className={`min-w-5 max-h-5 min-h-5 max-w-5 inline-flex items-center justify-center rounded-full ${pricing.bgColor ? "bg-col-14/20" : "bg-col-12"}`}
                  >
                    <IoCheckmark className="text-sm" />
                  </span>
                  <h3 className="font-dm-sans text-sm lg:leading-5.5 font-normal">
                    Ads Banner Free
                  </h3>
                </li>
                <li className="flex items-center gap-2.5">
                  <span
                    className={`min-w-5 max-h-5 min-h-5 max-w-5 inline-flex items-center justify-center rounded-full ${pricing.bgColor ? "bg-col-14/20" : "bg-col-12"}`}
                  >
                    <IoCheckmark className="text-sm" />
                  </span>
                  <h3 className="font-dm-sans text-sm lg:leading-5.5 font-normal">
                    Design Style
                  </h3>
                </li>
                <li className="flex items-center gap-2.5">
                  <span
                    className={`min-w-5 max-h-5 min-h-5 max-w-5 inline-flex items-center justify-center rounded-full ${pricing.bgColor ? "bg-col-14/20" : "bg-col-12"}`}
                  >
                    <IoCheckmark className="text-sm" />
                  </span>
                  <h3 className="font-dm-sans text-sm lg:leading-5.5 font-normal">
                    Component Library
                  </h3>
                </li>
                <li className="flex items-center gap-2.5">
                  <span
                    className={`min-w-5 max-h-5 min-h-5 max-w-5 inline-flex items-center justify-center rounded-full ${pricing.bgColor ? "bg-col-14/20" : "bg-col-12"}`}
                  >
                    <IoCheckmark className="text-sm" />
                  </span>
                  <h3 className="font-dm-sans text-sm lg:leading-5.5 font-normal">
                    All limited links
                  </h3>
                </li>
                <li className="flex items-center gap-2.5">
                  <span
                    className={`min-w-5 max-h-5 min-h-5 max-w-5 inline-flex items-center justify-center rounded-full ${pricing.bgColor ? "bg-col-14/20" : "bg-col-12"}`}
                  >
                    <IoCheckmark className="text-sm" />
                  </span>
                  <h3 className="font-dm-sans text-sm lg:leading-5.5 font-normal">
                    Own analytics platform
                  </h3>
                </li>
                <li className="flex items-center gap-2.5">
                  <span
                    className={`min-w-5 max-h-5 min-h-5 max-w-5 inline-flex items-center justify-center rounded-full ${pricing.bgColor ? "bg-col-14/20" : "bg-col-12"}`}
                  >
                    <IoCheckmark className="text-sm" />
                  </span>
                  <h3 className="font-dm-sans text-sm lg:leading-5.5 font-normal">
                    Chat support
                  </h3>
                </li>
                <li className="flex items-center gap-2.5">
                  <span
                    className={`min-w-5 max-h-5 min-h-5 max-w-5 inline-flex items-center justify-center rounded-full ${pricing.bgColor ? "bg-col-14/20" : "bg-col-12"}`}
                  >
                    <IoCheckmark className="text-sm" />
                  </span>
                  <h3 className="font-dm-sans text-sm lg:leading-5.5 font-normal">
                    Optimize hashtags
                  </h3>
                </li>
                <li className="flex items-center gap-2.5">
                  <span
                    className={`min-w-5 max-h-5 min-h-5 max-w-5 inline-flex items-center justify-center rounded-full ${pricing.bgColor ? "bg-col-14/20" : "bg-col-12"}`}
                  >
                    <IoCheckmark className="text-sm" />
                  </span>
                  <h3 className="font-dm-sans text-sm lg:leading-5.5 font-normal">
                    Unlimited users
                  </h3>
                </li>
              </ul>
              <button
                className={`font-dm-sans font-bold rounded-lg text-base leading-12 lg:tracking-[-1px] px-8.75 ${pricing.bgColor ? "bg-white text-col-16" : "text-col-12 bg-col-14"}`}
              >
                Choose plan
              </button>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PricingPlans;
