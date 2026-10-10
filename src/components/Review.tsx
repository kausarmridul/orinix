import { reviewList } from "@/lib/assets";
import Container from "./Container";
import Image from "next/image";
import { IoMdStar } from "react-icons/io";

const Review = () => {
  return (
    <section className="lg:pt-26.25 lg:pb-28.75 py-20 bg-col-2/8">
      <Container>
        <h3 className="text-center font-clash-display font-semibold text-3xl md:text-4xl lg:text-5xl lg:leading-[130%]">
          What people are saying about Circle
        </h3>
        <div className="grid lg:grid-cols-2 gap-8 lg:mt-18 mt-15">
          {reviewList.map((review) => (
            <div
              className="bg-col-3 rounded-lg p-6 border-2 border-transparent transition-all duration-300 hover:border-col-12 cursor-pointer hover:scale-101"
              key={review.id}
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  alt=""
                  src={review.image}
                  width={50}
                  height={50}
                  className="min-w-10.25 min-h-10.25 max-w-10.25 max-h-10.25"
                />
                <div>
                  <h3 className="font-ibm-sans font-medium text-base lg:leading-[150%]">
                    {review.author}
                  </h3>
                  <p className="font-inter font-normal text-sm lg:leading-[150%] text-col-11">
                    {review.role}
                  </p>
                </div>
              </div>
              <p className="font-ibm-sans font-normal text-base lg:leading-[150%] text-col-11">
                {review.desc}
              </p>
              <ul className="flex gap-1 items-center mt-8">
                <li>
                  <IoMdStar className="text-2xl text-col-10" />
                </li>
                <li>
                  <IoMdStar className="text-2xl text-col-10" />
                </li>
                <li>
                  <IoMdStar className="text-2xl text-col-10" />
                </li>
                <li>
                  <IoMdStar className="text-2xl text-col-10" />
                </li>
                <li>
                  <IoMdStar className="text-2xl text-col-10" />
                </li>
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Review;
