import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: var(--bg-light-blue);
  /* background: red; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 150px;

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: 100%;
    padding-top: 80px;
    /* background-color: yellow; */
  }
`;

export const Content = styled.div`
  /* background-color: red; */
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  height: 100%;

  /* bigger display */
  @media only screen and (min-width: 1441px) {
    width: 1300px;
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    flex-direction: column;
    gap: 1rem;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    gap: 1rem;
    /* background-color: blue; */
  }
`;

export const Left = styled.div`
  /* background-color: green; */
  width: 50%;
  min-height: 50rem;
  display: flex;
  padding: 2rem 0;

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: 100%;
    padding: 2rem 0.5rem;
    /* background-color: yellow; */
  }
`;

export const LeftContent = styled.div`
  /* background-color: blue; */
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .bigText {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 54px;
    line-height: 49px;
    color: #011729;

    // MOBILE
    @media only screen and (max-width: 767px) {
      font-size: 35px;
      line-height: 34px;
      text-align: center;
      /* background-color: yellow; */
    }
  }

  .introText {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 400;
    font-size: 21.5px;
    line-height: 30px;
    color: #011729;

    // MOBILE
    @media only screen and (max-width: 767px) {
      font-size: 18px;
      line-height: 28px;
      text-align: center;
      /* background-color: yellow; */
    }
  }

  .imageBox {
    /* background-color: yellow; */
    width: 28rem;
    height: 17rem;
    background: url("/images/contact-us/contact-image.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-top: 1rem;

    // MOBILE
    @media only screen and (max-width: 767px) {
      /* width: 22.5rem; */
      height: 14rem;
      width: 100%;
      /* background-color: yellow; */
    }
  }

  .addressHolder {
    width: 30rem;
    /* background: yellow; */
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;

    // MOBILE
    @media only screen and (max-width: 767px) {
      width: 100%;
      align-items: center;
      justify-content: center;
      /* background-color: yellow; */
    }
  }

  .address {
    /* background: red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
    width: 14rem;
    margin-bottom: 1.5rem;

    //MOBILE
    @media only screen and (max-width: 767px) {
      width: 100%;
      text-align: center;
      align-items: center;
    }

    .pair {
      display: flex;
      gap: 0.5rem;
      /* justify-content: space-between; */
      align-items: center;

      //MOBILE
      @media only screen and (max-width: 767px) {
        gap: 0.2rem;
        justify-content: center;
      }
    }
  }

  .name {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 17px;
    color: #011729;
  }

  .location {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #011729;

    //MOBILE
    @media only screen and (max-width: 767px) {
      font-size: 14px;
      line-height: 20px;
    }
  }

  .phone {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #011729;
  }
`;

export const Right = styled.div`
  padding: 2rem 0;
  width: 70%;
  /* width: 606px; */
  height: 100%;
  /* background-color: yellow; */
  background: #ffffff;
  box-shadow: -8px 4px 9px rgba(31, 31, 31, 0.11);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* bigger display */
  @media only screen and (min-width: 1441px) {
    width: 700px;
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 85%;
    padding: 2rem 0.5rem;
    justify-content: center;
  }

  //MOBILE
  @media only screen and (max-width: 767px) {
    width: 95%;
    padding: 2rem 0.5rem;
    justify-content: center;
    /* background-color: red; */
  }
`;
