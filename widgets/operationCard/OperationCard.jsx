import Image from "next/image";
import React from "react";

import { Wrapper, Top, Bottom } from "./OperationCard.Styles";

const OperationCard = ({ icon, title, description }) => {
  return (
    <Wrapper>
      <Top>
        <div className="icon">
          <Image src={icon} alt="logo" />
        </div>
      </Top>
      <Bottom>
        <div className="title">{title}</div>
        <div className="description">{description}</div>
      </Bottom>
    </Wrapper>
  );
};

export default OperationCard;
