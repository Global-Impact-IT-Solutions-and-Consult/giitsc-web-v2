import React from "react";
import ServicePage from "../components/servicePage/ServicePage";
import webImg from "../public/images/servicePage/web.png";
import Pricing from "../components/pricing/Pricing";

const web = () => {
  return (
    <>
      <ServicePage
        title={"Web Development"}
        image={webImg}
        description={
          "A good quality website helps clients to effectively pick, choose and order your products online. Millions of people search the internet looking for products or services, which you may have but would be unable to reach you in the absence of a rich designed, professional website. Our website development professionals recognize the value of solid information architecture design and integrative branding that engages the customer from the first stop at your site. Engagement with your customer is crucial to tying into their emotional connection to your site and developing loyalty. The development cost of developing on top of an open source technology or platform is less as compared to development with the use of licensed software. This lowers the overall cost for the client while using open source platform in comparison to other parallel technologies."
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

export default web;
