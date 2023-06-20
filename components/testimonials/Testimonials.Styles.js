import styled from "styled-components";

export const Wrapper = styled.div`
  background-position: center;
  background: white;
  /* background: red; */
  background-repeat: no-repeat;
  background-size: cover;
  /* min-height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;
  padding: 3rem 0;
`;

export const Overlay = styled.div`
  background: url("/images/testimonialBG.png");
  /* background-color: rgba(0, 0, 0, 0.6); */
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  width: 100%;
  display: flex;
  padding-top: 2rem;
  gap: 5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* bigger display */
  @media only screen and (min-width: 1441px) {
    gap: 8rem;
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    height: 105%;
    margin-top: 3rem;
    padding-top: 0px;
    gap: 3rem;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    height: 105%;
    margin-top: -10px;
    padding-top: 0px;
    background: #fff;
  }
`;

export const Content = styled.div`
  width: 90%;
  padding: 3rem 2rem;
  /* background: yellow; */
  display: flex;
  justify-content: space-evenly;
  gap: 9rem;
  margin: 1rem;
  position: relative;

  /* bigger display */
  @media only screen and (min-width: 1441px) {
    width: 1300px;
  }

  // small PC
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    width: 100%;
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 100%;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    gap: 20rem;
    align-items: center;
    /* background: red; */
    padding: 0rem;
  }
`;
