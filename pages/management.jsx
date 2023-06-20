import React from "react";
import ServicePage from "../components/servicePage/ServicePage";
import pm from "../public/images/servicePage/pm.png";
import Pricing from "../components/pricing/Pricing";

const management = () => {
  return (
    <>
      <ServicePage
        title={"Project Management"}
        image={pm}
        description={
          "We have experience providing Program and Project Management services to companies ranging from start-ups to global Fortune 50 companies. We believe that Program and Project Management is much more than creating standard templates and status reports. Instead, we listen to the needs of our partners and assist as required for the specific engagement. We help companies start up a Project or Program Management Office (PgMO/PMO) by creating the strategy and structure that allows your company to benefit fully from the program. We implement policies, templates, and systems that help the PMO run smoothly. Whether the PMO is set up for the entire organization or for one project, we can manage the PMO and ensure it achieves the goals put in place during the strategy phase."
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

export default management;
