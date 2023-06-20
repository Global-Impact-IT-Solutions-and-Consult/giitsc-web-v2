import styled from "styled-components";

export const Wrapper = styled.div`
  /* background: url("/images/eroWw.jpg"); */
  background: #fff;
  /* background: red; */
  /* min-height: 90vh; */
  width: 100%;
  display: flex;
  gap: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;

  /* bigger display */
  @media only screen and (min-width: 1441px) {
    /* background: red; */
    width: 1500px;
    margin: 0 auto;
    padding: 5rem 0;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    /* background: red; */
    gap: 2rem;
    padding-bottom: 5rem;
  }
`;

export const CardHolder = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 1rem;
  /* background: red; */
  width: 85%;
  /* width: 85vw; */
  /* width: 100%; */
  margin: 0 auto;
  height: 100%;
  /* background: blue; */

  /* bigger display */
  @media only screen and (min-width: 1441px) {
    gap: 1rem;
    width: 80%;
  }

  // small PC
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    width: 100%;
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    /* flex-direction: column; */
    /* gap: 4rem; */
    width: 100%;
    /* background: blue; */
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: 90%;
    /* background: red; */
    flex-direction: column;
    gap: 3rem;
  }
`;

// export const CardPair = styled.div `
//   display: flex;
//   gap: 2rem;
//   width: 50%;
//   align-items: center;

//   // TAB
//   @media only screen and(min-width: 768px) and(max-width: 991px) {
//   }

//   // MOBILE
//   @media only screen and(max-width: 767px) {
//   }

//   // TAB
//   @media only screen and (min-width: 768px) and (max-width: 991px) {
//     /* flex-direction: column; */
//     justify-content: center;
//     gap: 2rem;
//     width: 100%;
//   }

//   // MOBILE
//   @media only screen and (max-width: 767px) {
//     flex-direction: column;
//     gap: 2rem;
//   }
// `;
