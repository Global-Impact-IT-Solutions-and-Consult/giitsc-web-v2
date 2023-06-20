import React from "react";
import ContactComponent from "../components/contactComponent/ContactComponent";

import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--bg-light-blue);
  padding-bottom: 60px;
`;

const contact = () => {
  return (
    <Wrapper>
      <ContactComponent />;
    </Wrapper>
  );
};

export default contact;
