import styled from "styled-components";

export const Wrapper = styled.a `
  background: #fff;
  color: var(--theme-color);
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);
  border-radius: 21px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  margin: 0 0.3rem;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.11);
  border-radius: 7px;
  width: 307px;
  min-height: 220px;
  transition: all 300ms ease-in;
  text-align: left;
  text-decoration: none;

  &:hover {
    background: var(--theme-color);
    color: #fff;
    transform: translateY(-35px);

    // MOBILE
    @media only screen and (max-width: 767px) {
      transform: translateY(0);
    }

    .bottom {
      border-top: 2px solid #fff;
    }

    svg {
      fill: #fff;
    }
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    /* width: 35rem; */
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    font-size: 45px;
    text-align: center;
  }
`;

export const Top = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: start;
  padding: 1rem;

  // MOBILE
  @media only screen and (max-width: 767px) {
    align-items: center;
  }

  .price {
    font-family: "montserrat";
    font-weight: 700;
    font-size: 27px;
    line-height: 24px;
    margin-bottom: 1 rem;
  }

  .title {
    font-family: "montserrat";
    font-weight: 500;
    font-size: 20px;
    line-height: 20px;
    width: 100%;
    margin-bottom: 0.3rem;
  }

  .subText {
    font-family: "montserrat";
    font-weight: 300;
    font-size: 12px;
    line-height: 14px;
    width: 100%;
  }
`;

export const Bottom = styled.div `
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: start;
  padding: 1rem;
  height: 50%;
  /* width: 100%; */
  padding: 2rem 0;
  border-top: 2px solid var(--theme-color);
  width: 85%;
  margin: 0 auto;

  // MOBILE
  @media only screen and (max-width: 767px) {
    align-items: center;
  }

  .pair {
    display: flex;
    /* align-items: center; */
    /* justify-content: space-between; */
    gap: 0.4rem;
    /* background: red; */
  }

  svg {
    fill: #011729;
    /* width: 40px; */
    /* background-color: #011729; */
  }

  .description {
    font-style: normal;
    font-weight: 600;
    font-size: 11px;
    line-height: 13px;
    height: 50px;
  }
`;