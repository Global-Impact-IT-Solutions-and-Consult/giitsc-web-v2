import styled from "styled-components";

export const Wrapper = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: 100%;
    text-align: center;
    /* background: red; */
  }

  .text {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
    color: #1a1110;

    // MOBILE
    @media only screen and (max-width: 767px) {
      font-size: 30px;
      line-height: 49px;
    }
  }
`;

export const Lines = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  /* margin-top: -0.3rem; */

  .line1 {
    background-color: var(--theme-color);
    width: 54px;
    height: 6px;
    margin: 0 auto;
    background: #011729;
    border-radius: 25.1417px;
  }

  .line2 {
    background-color: var(--theme-color);
    width: 19px;
    height: 6px;
    margin: 0 auto;
    background: #011729;
    border-radius: 25.1417px;
  }
`;