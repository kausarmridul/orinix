import Image from "next/image";
import Container from "./Container";
import { activityList, assets } from "@/lib/assets";

const Activity = () => {
  return (
    <section className="lg:pt-57.5 lg:pb-27.5 max-lg:py-20 relative z-10">
      <Container>
        <div className="grid lg:grid-cols-2 lg:items-center gap-8">
          <div className="lg:pl-23.25 relative z-1">
            <Image
              alt="Activity"
              src={assets.analysis_left}
              width={600}
              height={600}
              className="w-full"
            />
            <Image
              alt="Activity bg"
              src={assets.analysis_bg}
              width={200}
              height={200}
              className="size-46.75 absolute top-35.25 left-0 -z-1 max-lg:hidden"
            />
          </div>
          <div className="">
            <h3 className="font-clash-display font-semibold text-4xl lg:text-[44px] lg:leading-[130%] lg:tracking-[1px] capitalize mb-10">
              help you find the best analysis for your business
            </h3>
            <ul className="space-y-8">
              {activityList.map((list) => (
                <li
                  key={list.id}
                  className="flex max-sm:flex-col gap-4 sm:gap-6"
                >
                  <div className="min-w-16 min-h-16 max-w-16 max-h-16 bg-col-2 rounded-lg flex items-center justify-center">
                    <Image
                      alt={list.title}
                      src={list.image}
                      width={60}
                      height={60}
                      className="h-7 w-auto"
                    />
                  </div>
                  <div>
                    <h3 className="font-clash-display text-lg lg:text-[20px] lg:leading-[125%] font-medium mb-2">
                      {list.title}
                    </h3>
                    <p className="text-white/75 lg:text-base text-sm lg:leading-[160%] lg:tracking-[2%] font-normal xl:pr-35">
                      {list.content}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Activity;
