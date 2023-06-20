import React from "react";
import ServicePage from "../components/servicePage/ServicePage";
import network from "../public/images/servicePage/network.png";
import Pricing from "../components/pricing/Pricing";

const networking = () => {
  return (
    <>
      <ServicePage
        title={"Networking"}
        image={network}
        description={
          "GIITSC has professional team of experts providing services since 2013. What we provide to our customer is inexpensive and satisfactory Networking Technical Services which includes Server Installation and Configuration, Virus and Spyware Removal, Network Consulting, Point of Sales system, Sound System (PA system), Software Installation/Upgrade , Hardware install, Email solution, Recovery of lost data, backup and Home Networking. A Thus all your computer and networking related issues can be solved by us, so that you can apply your energy in the creativity and increasing the efficiency. Network 360 is the professional information technology service provider. GIITSC is based in USA, China and Nigeria. Our team holds experience of satisfying thousands of customers in IT related issues since 2013. We are equipped with latest technology & equipments to make sure that your information technology needs are fulfilled with maximum efficiency. We have highly qualified professional team of experts who know how to handle your computer based problems with ease. Our service assures promise of satisfaction, where other computer solution service provider lacks proper follow up of each client. We specialize in services tailored according to your computer requirements and needs. We have successfully maintained a 90% repeat or referral rate from our customers worldwide."
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

export default networking;
