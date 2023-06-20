import styled from "styled-components";

export const Wrapper = styled.div`
  /* background: grey; */
  background: var(--bg-light-blue);
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  padding-bottom: 6rem;

  // MOBILE
  @media only screen and (max-width: 767px) {
    /* height: 100%; */
    flex-direction: column;
    background: var(--bg-light-blue);
    /* padding: 2rem 0; */
  }
`;

export const Content = styled.div`
  /* background: coral; */
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* flex-wrap: wrap; */
  /* gap: 0.5rem; */

  /* bigger display */
  @media only screen and (min-width: 1441px) {
    width: 1100px;
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 90%;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    /* height: 100%; */
    flex-direction: column;
    padding: 2rem 0;
    text-align: center;
    gap: 3rem;
    /* background: coral; */
  }
`;
