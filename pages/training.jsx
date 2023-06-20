import React from "react";
import ServicePage from "../components/servicePage/ServicePage";
import trainingImg from "../public/images/servicePage/training.png";
import Pricing from "../components/pricing/Pricing";

const training = () => {
  return (
    <>
      <ServicePage
        title={"Corporate Training"}
        image={trainingImg}
        description={
          "GIITSC Corporate Training helps high-potential leaders and teams adopt new paradigms, implement new practices, and achieve competitive advantage and market success through strategic talent management. Our designation programs are the gold standard for proving knowledge and successfully implementing solutions to real-world talent and leadership challenges. GIITSC Corporate Training is designed to meet your organizational needs and preferences and is priced to encourage wide adoption. Courses can be tailored from half-day to two-day session, and can be delivered in-person or online with a live, master teacher. “Train the Trainer” options offer the ability to reach tens of thousands of employees. The result is the freedom to pair GIITSC content and faculty with your organization in the format and timeframe that best meets your needs."
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

export default training;
