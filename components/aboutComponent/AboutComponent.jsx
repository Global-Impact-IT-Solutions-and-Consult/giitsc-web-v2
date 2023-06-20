import React from "react";

// Styles
import {
  TopWrapper,
  Content,
  ContentItem,
  BottomWrapper,
  StoryContent,
  StoryBody,
} from "./AboutComponent.Styles";
import WhyUs from "../whyUs/WhyUs";
import UnderlineWidget from "../../widgets/underlineWidget/UnderlineWidget";

const AboutComponent = () => {
  return (
    <>
      <TopWrapper>
        <Content>
          <ContentItem>
            <div className="title">Who we are</div>
            <div className="body">
              We combine creativity, innovation, and service, with a thirst for
              knowledge to stay current in the ever changing world of
              technology. At Global Impact, we have the resources to handle all
              your I.T needs, providing the peace of mind you need to
              concentrate on running your business.{" "}
            </div>
          </ContentItem>
          <ContentItem>
            <div className="title">Mission</div>
            <div className="body">
              Our mission is to serve as a technology consultant providing
              solutions to businesses of all sizes. Our certified experts
              partners with our customers to develop customized, cost-effective
              solutions that reduce expense, increase efficiency, and provide
              the competitive advantage you need to take your business to the
              next level.
            </div>
          </ContentItem>
        </Content>
      </TopWrapper>
      <WhyUs title={"Our values"} />
      <BottomWrapper>
        <StoryContent>
          {/* <div className="heading">Our Story</div> */}
          <UnderlineWidget text={"Our Story"} />
          <StoryBody>
            <div className="left"></div>
            <div className="right">
              Since 2013,Global Impact I.T Solutions & Consult (GIITSC) has
              remained on the cutting edge of technology while building a
              reputation as a trusted resource across Nigeria, USA and China.
              Our mission is to serve as a technology consultant providing
              solutions to businesses of all sizes. Our certified experts
              partners with our customers to develop customized, cost-effective
              solutions that reduce expense, increase efficiency, and provide
              the competitive advantage you need to take your business to the
              next level. We combine creativity, innovation, and service, with a
              thirst for knowledge to stay current in the ever changing world of
              technology. At GIITSC, we have the resources to handle all your
              I.T needs, providing the peace of mind you need to concentrate on
              running your business.
            </div>
          </StoryBody>
        </StoryContent>
      </BottomWrapper>
    </>
  );
};

export default AboutComponent;
