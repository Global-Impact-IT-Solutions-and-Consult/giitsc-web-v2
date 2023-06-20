import React from "react";
import { Wrapper, Lines } from "./UnderlineWidget.Styles";

const UnderlineWidget = ({ text }) => {
  return (
    <Wrapper>
      <span className="text">{text}</span>
      <Lines>
        <div className="line1"></div>
        <div className="line2"></div>
      </Lines>
    </Wrapper>
  );
};

export default UnderlineWidget;
