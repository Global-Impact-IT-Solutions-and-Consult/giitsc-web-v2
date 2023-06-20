import styled from "styled-components";

export const Wrapper = styled.div `
  /* background-color: blue; */
  /* background: url("/images/herobg.jpg"); */
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 60px;

  // TAB
  /* @media only screen and (min-width: 768px) and (max-width: 991px) {
    height: 70vh;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    height: 70vh;
  } */
`;

export const Overlay = styled.div `
  background-color: rgba(0, 0, 0, 0.4);
  height: 120%;
  width: 100%;
  margin-top: -60px;
  padding-top: 60px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;

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

export const Content = styled.div `
  color: white;
  font-size: 35px;
  font-family: system-ui, "Segoe UI", "Open Sans", "Helvetica Neue", sans-serif;
  padding-top: 7rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;

  // TAB
  @media only screen and(min - width: 768 px) and(max - width: 991 px) {
    font-size: 27px;
    padding-top: 3rem;
  }

  // MOBILE
  @media only screen and(max - width: 767 px) {
    font-size: 25px;
    padding-top: 0rem;
  }

  h1 {
    margin-bottom: -1.3rem;
  }

  h4 {
    font-weight: 400;
    font-family: cursive;
    margin-bottom: 1.3rem;
  }

  p {
    font-size: 25px;
  }

  span {
    font-size: 72px;
    background: -webkit-linear-gradient(#ee2583, #2772b3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 300ms ease-in-out;

    :hover {
      background: -webkit-linear-gradient(#2772b3, #ee2583);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .pair {
    display: flex;
    justify-content: space-evenly;
    /* background: yellow; */
    width: 70%;
    margin: 0 auto;
    margin-top: 4rem;
  }
`;