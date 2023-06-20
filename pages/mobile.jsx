import React from "react";
import ServicePage from "../components/servicePage/ServicePage";
import mobileImg from "../public/images/servicePage/mobile.png";
import Pricing from "../components/pricing/Pricing";

const mobile = () => {
  return (
    <>
      <ServicePage
        title={"Mobile Development"}
        image={mobileImg}
        description={
          "Are you searching for any Mobile application consulting and development company, search no further because  you have found one of the leading mobile application development company in the world today. We develop word class mobile applications, we turn your ideas into a reality by meeting your expectations and beyond, nor matter the platforms or complexity of the project we are capable. We have development experts that are ever ready to help in providing you free consulting services before the kick off of the project, among the things we do first is to analyze the project requirement, goals and your budget, then we can help you match them with the most fit development technology that will guarantee your applications success. "
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

export default mobile;
