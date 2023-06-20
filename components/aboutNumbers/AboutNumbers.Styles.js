import styled from "styled-components";

export const Wrapper = styled.div`
  background: white;
  /* width: 100vw; */
  /* height: 90vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  width: 100%;
  display: flex;
  gap: 4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;

  /* bigger display */
  @media only screen and (min-width: 1441px) {
    /* background: red; */
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    /* background: red; */
    /* height: 100%; */
  }
`;

export const Content = styled.div`
  /* background: red; */
  /* height: 80%; */
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4rem;
  align-items: center;
  padding: 3rem 0;
  margin-bottom: 3rem;

  /* bigger display */
  @media only screen and (min-width: 1441px) {
    /* background: red; */
    width: 1200px;
    gap: 10rem;
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 80%;
    height: 100%;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    /* background: red; */
    /* height: 80%; */
    width: 80%;
    /* padding: 0; */
    gap: 3rem;
    /* height: 100%; */
  }
`;

export const Top = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 141%;
  text-align: left;
  color: #1a1110;

  /* bigger display */
  @media only screen and (min-width: 1441px) {
    /* font-size: 28px; */
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    font-size: 14px;
    line-height: 1.5rem;
    /* padding-top: 5rem; */
  }
`;

export const Bottom = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* margin-bottom: 5rem; */

  // MOBILE
  @media only screen and (max-width: 767px) {
    /* background: yellow; */
    width: 100%;
    justify-content: space-between;
  }

  .pair {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    /* width: 16rem; */
    /* background: yellow; */
  }

  .pairTop {
    font-style: normal;
    font-weight: 600;
    /* font-size: 59.9771px; */
    font-size: 35px;
    /* line-height: 73px; */
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #011729;

    /* bigger display */
    @media only screen and (min-width: 1441px) {
      /* font-size: 40px; */
      /* line-height: 57px; */
    }

    // TAB
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      font-size: 40px;
      line-height: 38px;
    }

    // MOBILE
    @media only screen and (max-width: 767px) {
      font-size: 30px;
      line-height: 33px;
    }
  }

  .pairBottom {
    font-style: normal;
    font-weight: 500;
    font-size: 17.9931px;
    line-height: 22px;
    color: #011729;

    /* bigger display */
    @media only screen and (min-width: 1441px) {
      /* font-size: 30px; */
      /* line-height: 23px; */
    }

    // MOBILE
    @media only screen and (max-width: 767px) {
      font-size: 13px;
      line-height: 15px;
      text-align: center;
    }
  }
`;
