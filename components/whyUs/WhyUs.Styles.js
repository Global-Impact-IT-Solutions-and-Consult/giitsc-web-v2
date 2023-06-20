import styled from "styled-components";

export const Wrapper = styled.div`
  /* background: url("/images/eroWw.jpg"); */
  background: #e8f5ff;
  background-position: center;
  /* background: #fff; */
  /* background: whitesmoke; */
  background-repeat: no-repeat;
  background-size: cover;
  /* min-height: 50vh; */
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem 0;

  /* bigger display */
  @media only screen and (min-width: 1441px) {
    justify-content: center;
    gap: 2rem;
    padding: 1rem 0;
  }
`;

export const Content = styled.div`
  width: 80%;
  padding: 2rem;
  /* background: yellow; */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 1rem;
  margin: 2.5rem 1rem;

  /* bigger display */
  @media only screen and (min-width: 1441px) {
    /* background: red; */
    width: 1300px;
    gap: 0;
  }

  // small PC
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    width: 100%;
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    gap: 0;
    justify-content: center;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: 85%;
    flex-direction: column;
    gap: 0rem;
    align-items: center;
    /* background: red; */
  }
`;

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

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
