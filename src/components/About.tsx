import { aboutList, assets } from "@/lib/assets";
import Container from "./Container";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="features"
      className="bg-col-9 scroll-mt-30 lg:pb-45 lg:pt-31 py-30"
    >
      <Container>
        <div className="lg:w-6/12 mx-auto text-center lg:mb-16.75 mb-12">
          <h2 className="font-clash-display font-semibold text-xl sm:text-[26px] md:text-[40px] lg:text-[60px] lg:leading-18.5 capitalize mb-4.75">
            Why Orinix would be your best fit?
          </h2>
          <p className="font-normal lg:text-[21px] lg:leading-9.75 lg:tracking-[-0.66px] text-base text-white/75">
            Watch this 1 min video to learn about Orinix.
          </p>
        </div>
        <div>
          <Image
            alt="Orinix Image"
            src={assets.about_orinix}
            loading="eager"
            width={800}
            height={800}
            className="w-full rounded-2xl lg:rounded-[30px]"
          />
        </div>
        <div className="lg:mt-26.25 mt-20 grid lg:grid-cols-3 md:grid-cols-2 lg:gap-x-39 lg:gap-y-25 max-lg:gap-15">
          {aboutList.map((list) => (
            <div className="text-center" key={list.id}>
              <Image
                alt={list.title}
                src={list.image}
                width={100}
                height={100}
                className="lg:h-18.75 mx-auto w-auto h-15"
              />
              <h3 className="mt-5.5 font-clash-display font-semibold lg:text-2xl text-xl">
                {list.title}
              </h3>
              <p className="mt-2.75 text-white/70 font-open-sans lg:text-base lg:leading-7 text-sm lg:tracking-[-0.5px] font-semibold">
                {list.content}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default About;
