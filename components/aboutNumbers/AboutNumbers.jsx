import React from "react";

// styles
import { Wrapper, Content, Top, Bottom } from "./AboutNumbers.Styles";

const AboutNumbers = () => {
  return (
    <Wrapper>
      <Content>
        <Top>
          Since 2013,Global Impact I.T Solutions & Consult (GIITSC) has remained
          on the cutting edge of technology while building a reputation as a
          trusted resource across Nigeria, USA and China.
          <br />
          Our mission is to serve as a technology consultant providing solutions
          to businesses of all sizes. Our certified experts partners with our
          customers to develop customized, cost-effective solutions that reduce
          expense, increase efficiency, and provide the competitive advantage
          you need to take your business to the next level. We combine
          creativity, innovation, and service, with a thirst for knowledge to
          stay current in the ever changing world of technology.
          <br />
          At GITSC, we have the resources to handle all your I.T needs,
          providing the peace of mind you need to concentrate on running your
          business.
        </Top>
        <Bottom>
          <div className="pair">
            <div className="pairTop">12+</div>
            <div className="pairBottom">Completed Projects</div>
          </div>
          <div className="pair">
            <div className="pairTop">15k+</div>
            <div className="pairBottom">Client Base</div>
          </div>
          <div className="pair">
            <div className="pairTop">100+</div>
            <div className="pairBottom">Partners</div>
          </div>
        </Bottom>
      </Content>
    </Wrapper>
  );
};

export default AboutNumbers;
