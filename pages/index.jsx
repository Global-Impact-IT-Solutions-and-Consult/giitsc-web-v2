// components
import Footer from "../components/footer/Footer";
import HeroSection from "../components/heroSection/HeroSection";
import WhyUs from "../components/whyUs/WhyUs";
import Partners from "../components/partners/Partners";
import Services from "../components/services/Services";
import Testimonials from "../components/testimonials/Testimonials";
import AboutNumbers from "../components/aboutNumbers/AboutNumbers";
import Operations from "../components/operations/Operations";
import Subscribe from "../components/subscribe/Subscribe";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutNumbers />
      <Services />
      <WhyUs title={"Why Us?"} />
      <Operations />
      <Testimonials />
      <Partners />
      <Subscribe />
      {/* <Footer /> */}
    </>
  );
}
