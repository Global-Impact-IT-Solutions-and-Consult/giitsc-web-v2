import styled from "styled-components";

export const Wrapper = styled.div `
  // background: url("/images/ero.jpg");
  /* background-color: blue; */
  height: 100vh;
  overflow-y: scroll;
  background-position: center; 
  background-repeat: no-repeat; 
  background-size: cover; 

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
  }
`;

export const Overlay = styled.div `
  background-color: rgba(0, 0, 0, 0.4);
  height: 120%;
  width: 100%;
  /* margin-top: -60px;
  padding-top: 60px;
  display: flex;
  align-items: center;
  flex-direction: column; */

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    height: 105%;
    margin-top: -10px;
    padding-top: 0px;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    height: 105%;
    margin-top: -10px;
    padding-top: 0px;
  }
`;