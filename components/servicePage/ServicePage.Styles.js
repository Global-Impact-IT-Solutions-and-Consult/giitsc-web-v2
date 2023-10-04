import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--bg-light-blue);
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  padding-bottom: 2rem;

  a {
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 10px;

    width: 117px;
    height: 32px;
    left: 87px;
    top: 822px;

    border: 0.5px solid #011729;
    border-radius: 5px;

    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 134.4%;
    /* or 20px */

    color: #000000;
    text-decoration: none;
    transition: all 300ms linear;

    &:hover {
      background: var(--theme-color);
      color: #fff;
    }
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: 100%;
    padding-top: 100px;
    /* background-color: yellow; */
  }
`;

export const Content = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  /* bigger display */
  @media only screen and (min-width: 1441px) {
    width: 1700px;
    /* background-color: red; */
  }

  // TAB
  /* @media only screen and (min-width: 768px) and (max-width: 991px) { */
  /* width: 80%; */
  /* } */

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: 100%;
    /* background-color: yellow; */
  }

  span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 49px;
    color: #011729;

    // TAB
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      margin: 0 auto;
    }

    // MOBILE
    @media only screen and (max-width: 767px) {
      font-size: 30px;
      line-height: 39px;
      text-align: center;
      /* background-color: yellow; */
    }
  }
`;

export const Main = styled.div`
  /* background: red; */
  width: 100%;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  gap: 1.5rem;
  margin-bottom: 3rem;

  /* bigger display */
  @media only screen and (min-width: 1441px) {
    width: 1700px;
    gap: 3rem;
    /* background-color: red; */
    justify-content: flex-start;
  }

  /* TAB */
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    flex-direction: column;
    justify-content: center;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    font-size: 30px;
    line-height: 39px;
    /* background-color: yellow; */
    flex-direction: column;
    padding: 1rem;
    gap: 2rem;
  }
`;

export const Left = styled.div`
  /* background: yellow; */
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: flex-start;

  /* bigger display */
  @media only screen and (min-width: 1441px) {
    width: 40%;
    gap: 0.5rem;
    /* background-color: red; */
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }

  .imageBox {
    width: 630px;
    height: 430px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-left: -1rem;
    overflow: hidden;
    /* background-color: red; */
    width: 100%;
    position: relative;

    img {
      object-fit: cover;
    }

    /* bigger display */
    /* @media only screen and (min-width: 1441px) {
      width: 40%;
      gap: 0.5rem;
      background-color: red; 
    } */

    // TAB
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    // MOBILE
    @media only screen and (max-width: 767px) {
      /* width: 360px; */
      width: 100%;
      height: 215px;
      margin: 0 auto;
      /* margin-left: -1rem; */
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        object-fit: scale-down;
      }
    }
  }

  .text {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 134.4%;
    color: #011729;
    width: 620px;
    /* background: red; */

    // MOBILE
    @media only screen and (max-width: 767px) {
      width: 100%;
      text-align: center;
    }
  }
`;

export const Right = styled.div`
  /* background: green; */
  width: 100%;
  /* height: 34rem; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-evenly;
  /* margin-top: -1.7rem; */

  /* bigger display */
  @media only screen and (min-width: 1441px) {
    min-width: 800px;
    max-width: 950px;
    /* background-color: red; */
    /* align-items: center; */
    padding: 0;
    margin: 0;
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    /* margin: 0 auto; */
    text-align: center;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    /* background: red; */
    text-align: center;
    height: 100%;
    justify-content: center;
    align-items: center;
  }

  .top {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 30px;
    color: #011729;

    /* bigger display */
    @media only screen and (min-width: 1441px) {
      font-size: 20px;
      line-height: 35px;
    }
  }

  .bottom {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 30px;
    color: #011729;

    // TAB
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      margin: 0 auto;
    }

    span {
      display: flex;
      gap: 0.5rem;
      font-weight: 500;
      font-size: 15px;
      line-height: 134.4%;
      padding-left: 1rem;
      margin-bottom: 1rem;

      // MOBILE
      @media only screen and (max-width: 767px) {
        line-height: 19px;
      }
    }
  }
`;
