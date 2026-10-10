import { faqList } from "@/lib/assets";
import Container from "./Container";
import Link from "next/link";

const Faq = () => {
  return (
    <section className="lg:pt-37 lg:pb-32 py-30 bg-col-2/8">
      <Container>
        <div className="text-center">
          <h3 className="font-clash-display font-semibold text-xl sm:text-[26px] md:text-[40px] lg:text-[60px] lg:leading-18.5 capitalize mb-4">
            Frequently Asked Question
          </h3>
          <p className="font-normal lg:text-[21px] lg:leading-9.75 lg:tracking-[-0.66px] text-base text-white/75 mb-22">
            Create custom landing pages with Omega that converts.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-y-15 gap-x-12.5">
          {faqList.map((faq) => (
            <div key={faq.id}>
              <h3 className="mb-7 font-open-sans font-extrabold text-lg lg:text-2xl lg:leading-[100%] lg:tracking-[-0.75px]">
                What&apos;s gonna be your question?
              </h3>
              <p className="font-open-sans font-semibold text-white/75 lg:text-base lg:leading-7 lg:tracking-[-0.5px]">
                {faq.desc}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-22.5 text-center text-white/75 font-open-sans font-semibold lg:text-base text-sm lg:leading-7 lg:tracking-[-0.5px]">
          Didn&apos;t find your answer?{" "}
          <Link
            href={""}
            className="text-col-12 hover:underline transition-all duration-300"
          >
            Contact us here
          </Link>
        </p>
      </Container>
    </section>
  );
};

export default Faq;
