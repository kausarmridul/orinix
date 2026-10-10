import About from "@/components/About";
import Activity from "@/components/Activity";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import PricingPlans from "@/components/PricingPlans";
import Review from "@/components/Review";
import Useful from "@/components/Useful";

export default function Home() {
  return (
    <>
      <Hero />
      <Activity />
      <About />
      <Useful />
      <Review />
      <PricingPlans />
      <Faq />
    </>
  );
}
