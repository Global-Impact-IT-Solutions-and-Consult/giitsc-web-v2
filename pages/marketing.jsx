import React from "react";
import ServicePage from "../components/servicePage/ServicePage";
import marketingImg from "../public/images/servicePage/marketing.png";
import Pricing from "../components/pricing/Pricing";

const marketing = () => {
  return (
    <>
      <ServicePage
        title={"Digital Marketing"}
        image={marketingImg}
        description={
          "At our tech website company, we believe that digital marketing is a crucial component of any business's success in today's digital age. From increasing brand awareness to generating leads and retaining customers, digital marketing can help businesses achieve their goals and stay competitive in the marketplace. That's why we offer a range of digital marketing services, including website design and development, SEO optimization, social media management, email marketing campaigns, and PPC advertising management. Our team of digital marketing experts takes a strategic approach to every project, starting with research and analysis to understand our clients' goals, target audience, and competitive landscape. We then create a customized digital marketing plan that is tailored to the unique needs and objectives of each client. Whether it's improving search engine rankings, building brand awareness on social media, or driving more traffic to a website, we use proven strategies and tactics to achieve results. Throughout the process, we prioritize communication and collaboration with our clients to ensure that their vision is brought to life."
        }
      />
      <Pricing
        c1_href="/"
        c1_title={"Lite"}
        c1_subText={"For individual with personal projects"}
        c1_price={"₦50,000"}
        c1_description={"We have over 5 packages to enable us help you better"}
        c2_href="/"
        c2_title={"Lite"}
        c2_subText={"For individual with personal projects"}
        c2_price={"₦120,000"}
        c2_description={"We have over 5 packages to enable us help you better"}
        c3_href="/"
        c3_title={"Lite"}
        c3_subText={"For individual with personal projects"}
        c3_price={"₦180,000"}
        c3_description={"We have over 5 packages to enable us help you better"}
      />
    </>
  );
};

export default marketing;
