import styled from "styled-components";

export const Wrapper = styled.div`
  background: #fff;
  /* height: 50vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;

  h4 {
    color: #fff;
    font-size: 23px;
  }

  .title {
    display: none;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    height: 100%;
    flex-direction: column;
    background: var(--bg-light-blue);
    padding: 2rem 0;
    /* gap: 2rem; */
    /* background: red; */

    .title {
      display: inline-block;
    }
  }
`;

export const Overlay = styled.div`
  /* background-color: rgba(122, 122, 122, 0.3); */
  height: 100%;
  width: 100%;
  /* padding-top: 60px; */
  padding: 2rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(32, 33, 36, 0.4);
  backdrop-filter: blur(6px);
  /* background: red; */

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    padding-top: 0px;
    padding: 0;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    padding-top: 0px;
    padding: 0;
    width: 95%;
    background: red;
  }
`;

export const Content = styled.div`
  /* background: url("/images/ero.jpg"); */
  background: url("/icons/partners/partners.png");
  /* background-color: blue; */
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 85%;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  padding: 3rem 0;
  /* -webkit-scrollbar: none; */

  /* &::-webkit-scrollbar {
    width: 12px;
    margin: 0 1rem;
  } */

  /* &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    -webkit-box-shadow: inset 0 0 6px var(--text-blue);
    border-radius: 10px;
  } */

  /* bigger display */
  @media only screen and (min-width: 1441px) {
    width: 1300px;
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 100vw;
    margin-top: 0;
    padding: 0;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: 100%;
    /* justify-content: start; */
    flex-direction: column;
    gap: 2rem;
    padding: 0;
    padding-top: 1.7rem;
    margin-top: 1.7rem;
    background: inherit;
    /* background: red; */
    height: 45rem;
  }
`;
