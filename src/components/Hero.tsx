import Image from "next/image";
import Container from "./Container";
import { assets } from "@/lib/assets";
import Marquee from "react-fast-marquee";

const Hero = () => {
  return (
    <section className="min-h-screen pt-41" id="homepage">
      <Container>
        <div className="lg:w-8/12 lg:mx-auto text-center">
          <h1 className="font-clash-display font-semibold text-2xl sm:text-3xl md:text-5xl lg:text-[64px] lg:leading-18.5 capitalize mb-4.5">
            Integrate AI for a competitive analysis for your business ⭐️
          </h1>
          <p className="text-sm sm:text-base leading-7 font-normal text-col-8 mb-10">
            Elevate your advertising game with creatives that consistently{" "}
            <br className="max-lg:hidden" />
            outperform your competitors, setting your brand apart.
          </p>
          <div className="flex gap-5 flex-wrap justify-center lg:mb-17.75 mb-14">
            <button className="lg:px-10 lg:py-3 px-6 py-2.5 bg-col-2 rounded-lg font-clash-display font-semibold text-base transition-all duration-300 hover:-translate-y-0.5 border border-transparent">
              Join The Waitlist
            </button>
            <button className="lg:px-10 lg:py-3 px-6 py-2.5 bg-transparent rounded-lg font-clash-display font-semibold text-base transition-all duration-300 hover:-translate-y-0.5 border border-white">
              Know More
            </button>
          </div>
          <Image
            src={assets.hero_bg}
            alt="Hero Image"
            width={900}
            loading="eager"
            height={900}
            className="w-full"
          />
        </div>
      </Container>
      <Marquee className="bg-col-2 py-6 -mt-6.25">
        <h3 className="font-clash-display font-bold text-2xl md:text-[32px] md:leading-12 mr-15">
          Join The Waitlist
        </h3>
        <h3 className="font-clash-display font-bold text-2xl md:text-[32px] md:leading-12 mr-15 outline-text">
          Join The Waitlist
        </h3>
        <h3 className="font-clash-display font-bold text-2xl md:text-[32px] md:leading-12 mr-15">
          Join The Waitlist
        </h3>
        <h3 className="font-clash-display font-bold text-2xl md:text-[32px] md:leading-12 mr-15 outline-text">
          Join The Waitlist
        </h3>
        <h3 className="font-clash-display font-bold text-2xl md:text-[32px] md:leading-12 mr-15">
          Join The Waitlist
        </h3>
        <h3 className="font-clash-display font-bold text-2xl md:text-[32px] md:leading-12 mr-15 outline-text">
          Join The Waitlist
        </h3>
        <h3 className="font-clash-display font-bold text-2xl md:text-[32px] md:leading-12 mr-15">
          Join The Waitlist
        </h3>
        <h3 className="font-clash-display font-bold text-2xl md:text-[32px] md:leading-12 mr-15 outline-text">
          Join The Waitlist
        </h3>
      </Marquee>
    </section>
  );
};

export default Hero;
