import React from "react";

//styles
import { Wrapper, Content, Left } from "./Subscribe.Styles";

const Subscribe = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <Left>
            <div className="text">
              Keep in <b>touch?</b>
            </div>
            <div className="pair">
              <input type="text" placeholder="Email address" />
              <button>Subscribe</button>
            </div>
          </Left>
        </Content>
      </Wrapper>
    </>
  );
};

export default Subscribe;
