import styled from "styled-components";

export const TopWrapper = styled.div`
  background-color: var(--bg-light-blue);
  /* background: red; */
  /* height: 100%; */
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  padding-bottom: 2rem;

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: 100%;
    padding-top: 80px;
    /* background-color: yellow; */
  }
`;

export const Content = styled.div`
  background-color: red;
  width: 72%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: url("/images/about-us/about-contentBG.png"), #d9d9d9;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding: 2rem;
  margin: 2rem 0;
  /* width: 1115px; */
  height: 427px;

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 90%;
    gap: 1rem;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    background-size: cover;
    margin: 1rem 0;
    margin-top: 0;
    /* background-color: blue; */
  }
`;

export const ContentItem = styled.div`
  background-color: red;
  width: 72%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 371.4px;
  height: 380px;
  background: #011729;
  color: #fff;
  border-radius: 8px;
  padding: 2rem;
  padding-bottom: 2rem;
  /* margin: 2rem 0; */
  transition: all 300ms linear;

  &:hover {
    background: #fff;
    color: var(--theme-color);
  }

  .title {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 22.8127px;
    /* line-height: 28px; */
    text-align: left;
  }

  .body {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 16.2537px;
    /* line-height: 20px; */
    padding-bottom: 2rem;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    background-size: cover;
    margin: 1rem 0;
    margin-top: 0;
    /* background-color: blue; */

    .title {
      text-align: center;
    }

    .body {
      text-align: center;
    }
  }
`;

export const BottomWrapper = styled.div`
  background-color: var(--bg-light-blue);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  padding-bottom: 3rem;

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: 100%;
    /* background-color: yellow; */
  }
`;

export const StoryContent = styled.div`
  width: 75%;
  /* background: red; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: 100%;
    padding: 1rem;
    /* background-color: yellow; */
  }

  .heading {
    text-align: center;
    width: 30%;
    margin: 0 auto;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 49px;
    color: #1a1110;
    border-bottom: 5px solid #1a1110;
    padding-bottom: 0.4rem;
    border-radius: 5px;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    transition: all 300ms ease-in;

    :hover {
      border-bottom: 5px dashed #1a1110;
      padding-bottom: 0.2rem;
    }

    // MOBILE
    @media only screen and (max-width: 767px) {
      width: 70%;
      /* padding: 1rem 1.5rem; */
      /* background-color: yellow; */
    }
  }
`;

export const StoryBody = styled.div`
  width: 100%;
  /* background: pink; */
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 2rem;

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    flex-direction: column;
    text-align: center;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    padding: 1rem 1.5rem;
    gap: 2rem;
    margin-top: 1rem;
    /* background-color: yellow; */
  }

  .left {
    width: 50%;
    /* background: blue; */
    background: url("/images/about-us/laptop.png");
    /* , #d9d9d9; */
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 520px;
    height: 386px;
    border-radius: 5px;

    // TAB
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      width: 100%;
    }

    // MOBILE
    @media only screen and (max-width: 767px) {
      width: 100%;
      height: 193px;
      background-size: cover;
    }
  }

  .right {
    width: 50%;
    /* background: green; */
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 40px;

    // TAB
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      width: 100%;
    }

    // MOBILE
    @media only screen and (max-width: 767px) {
      width: 100%;
      width: 100%;
      background-size: cover;
      text-align: center;
    }
  }
`;
