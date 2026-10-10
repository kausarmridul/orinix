import { assets } from "@/lib/assets";
import Container from "./Container";
import Image from "next/image";

const Useful = () => {
  return (
    <section className="lg:pb-63.5 scroll-mt-30 lg:pt-44.5 py-40" id="usecases">
      <Container>
        <div className="xl:w-6/12 mx-auto text-center">
          <h3 className="mb-22 font-clash-display font-semibold text-5xl md:text-6xl lg:text-[80px] lg:leading-[110%]">
            Useful software that We assist.
          </h3>
          <Image
            alt="Brand Logo"
            src={assets.useful_logo}
            width={700}
            height={700}
            className="w-full"
          />
        </div>
      </Container>
    </section>
  );
};

export default Useful;
