import styled from "styled-components";

export const Wrapper = styled.div`
  color: #141517;
  border-radius: 21px;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  height: 12rem;
  width: 15rem;
  transition: all 300ms ease-in;

  /* bigger display */
  @media only screen and (min-width: 1441px) {
    /* height: 17rem; */
    /* width: 20rem; */
    /* background-color: red; */
  }

  /* &:hover {
    border-bottom: 3px solid #011729;
    border-top: 3px solid #011729;
  } */
`;

export const Top = styled.div`
  background-color: var(--theme-color);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 74.85px;
  height: 59.61px;
  border-radius: 10px;
  padding: 1rem;

  /* bigger display */
  @media only screen and (min-width: 1441px) {
    /* width: 104.85px;
    height: 89.61px;
    background-color: pink; */
  }

  /* img {
    width: 74.85px;
    height: 59.61px;
  } */
`;

export const Bottom = styled.div`
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  height: 50%;
  width: 100%;

  .text {
    /* font-family: "Montserrat", sans-serif; */
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    /* line-height: 20px; */
    text-align: center;

    color: #1a1110;

    /* bigger display */
    @media only screen and (min-width: 1441px) {
      /* font-size: 20px; */
      /* line-height: 25px; */
    }

    // TAB
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      width: 100%;
      font-size: 14px;
    }
  }
`;
