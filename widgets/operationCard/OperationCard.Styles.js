import styled from "styled-components";

export const Wrapper = styled.div`
  background: #fff;
  color: var(--theme-color);
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);
  border-radius: 21px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: crosshair;
  /* margin: 1.5rem 0; */
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.11);
  border-radius: 7px;
  width: 307px;
  height: 300px;
  transition: all 300ms ease-in;
  text-align: left;

  &:hover {
    border: 3px solid var(--theme-color);
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    /* width: 35rem; */
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    font-size: 45px;
    height: 25rem;
    /* background: blue; */
    height: 100%;
    text-align: center;
  }
`;

export const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: start;
  padding: 1rem;

  // MOBILE
  @media only screen and (max-width: 767px) {
    align-items: center;
  }

  .icon {
    background: var(--theme-color);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.2rem;
    border-radius: 50%;
  }
`;

export const Bottom = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: start;
  padding: 1rem;
  height: 50%;
  width: 100%;
  padding-bottom: 2rem;

  .title {
    font-weight: 700;
    font-size: 18px;
    /* line-height: 20px; */
    width: 100%;
  }

  .description {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    /* line-height: 13px; */
    /* height: 50px; */
  }
`;
