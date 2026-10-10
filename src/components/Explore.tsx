import Image from "next/image";
import Container from "./Container";
import { assets } from "@/lib/assets";

const Explore = () => {
  return (
    <section className="pb-20 scroll-mt-30 lg:pt-30.25 pt-20" id="blog">
      <Container>
        <div className="bg-col-12 rounded-3xl grid lg:grid-cols-2 gap-8 px-4 sm:px-8 py-12 lg:py-4 items-center">
          <div>
            <h3 className="font-clash-display font-semibold lg:text-5xl lg:leading-[100%] text-3xl mb-6">
              Explore Free Version now!
            </h3>
            <p className="font-redhat-display text-white/75 font-normal lg:text-lg text-base lg:leading-7.5 mb-11">
              Search all the open positions on the web. Get your own
              personalized dashboard for lifetime
            </p>
            <div className="flex items-center gap-4 sm:gap-8">
              <button className="leading-13.5 bg-white rounded-md px-5.5 font-redhat-display font-medium lg:text-lg inline-block text-base text-col-18 border border-transparent transition-all duration-300 hover:-translate-y-0.5">
                Join Waitlist
              </button>
              <button className="leading-13.5 bg-transparent rounded-md px-5.5 font-redhat-display font-medium lg:text-lg inline-block text-base text-white border border-white transition-all duration-300 hover:-translate-y-0.5">
                Contact
              </button>
            </div>
          </div>
          <div>
            <Image
              alt=""
              src={assets.explore_right}
              width={500}
              height={500}
              className="w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Explore;
