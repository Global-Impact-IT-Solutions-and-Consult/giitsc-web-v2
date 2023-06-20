import React from "react";
import Image from "next/image";

// styles
import { Content, Left, Main, Right, Wrapper } from "./ServicePage.Styles";
import Link from "next/link";

const ServicePage = ({ title, image, description }) => {
  return (
    <Wrapper>
      <Content>
        <span>{title}</span>
        <Main>
          <Left>
            <div className="imageBox" image={image}>
              <Image src={image} alt="#" />
            </div>
            {/* <div className="text">
              We use the latest technologies and industry best practices to
              deliver websites that are fast, secure, and easy to use. Whether
              you need a simple brochure website or a complex web application,
              we have the experience and expertise to deliver the solutions you
              need.
            </div> */}
            {/* <Link href="/contact">Contact Us</Link> */}
          </Left>
          <Right>
            <div className="top">
              {description
                ? description
                : "At our tech company, we specialize in creating custom web solutions that are tailored to meet the unique needs of your business. Our team of experienced developers has the skills and expertise to deliver high-quality, responsive websites that are built to perform."}
            </div>
            <div className="bottom">
              <Link href="/contact">Contact Us</Link>
              {/* We offer a wide range of web development services, including:
              <br />
              <br />
              <span>
                <b>*</b>
                Custom Website Design: We'll work with you to design a website
                that reflects your brand and meets the needs of your target
                audience.
              </span>
              <span>
                <b>*</b>
                E-Commerce Solutions: We can help you create an online store
                that's easy to navigate and has all the features you need to
                sell your products and services.
              </span>
              <span>
                <b>*</b>
                Content Management Systems: We can build a CMS that allows you
                to easily update and manage your website's content.
              </span>
              <span>
                <b>*</b>
                Responsive Design: We'll make sure your website looks great on
                all devices, from desktop computers to smart phones and tablets.
              </span>
              <span>
                <b>*</b>
                Website Optimization: We'll help you improve your website's
                performance, so it loads quickly and ranks well in search
                engines.
              </span>
              <span>
                <b>*</b>
                Website Maintenance: We offer ongoing support and maintenance
                services to keep your website running smoothly.
              </span> */}
            </div>
          </Right>
        </Main>
      </Content>
    </Wrapper>
  );
};

export default ServicePage;
