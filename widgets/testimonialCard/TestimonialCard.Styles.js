import styled from "styled-components";

export const Wrapper = styled.div`
  color: #141517;
  box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.15);
  border-radius: 21px;
  padding: 0 2rem;
  padding-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  /* height: 15rem;
  width: 24rem; */
  height: 13rem;
  width: 20rem;
  /* height: 10rem;
  width: 20rem; */
  transition: all 400ms ease-in;
  margin: 2rem 0;
  position: relative;
  background: #ffffff;
  /* background: ${(props) => (props.float ? "red" : "#fff")}; */
  z-index: ${(props) => (props.float ? 1 : 0)};
  position: ${(props) => props.float && "absolute"};
  box-shadow: 0px 6.28542px 30.5292px 0.897917px rgba(0, 0, 0, 0.09);
  border-radius: 5.3875px;

  &:hover {
    background: var(--theme-color);
    color: white;
    transform: translateY(-80px);

    // MOBILE
    @media only screen and (max-width: 767px) {
      transform: translateY(0);
    }
  }

  .text {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    /* line-height: 15px; */
    text-align: center;
  }

  .bottom {
    /* background: red; */
    width: 50%;
    padding: 0 1rem;
    position: absolute;
    margin-bottom: -14rem;
    height: 50%;
    display: flex;
    flex-direction: column;
    /* gap: 0.6rem; */
    justify-content: space-between;
    align-items: center;
    /* margin-bottom: -75px; */

    img {
      /* background: yellow; */
      /* width: 8rem; */
      object-fit: cover;
      border-radius: 50%;
      /* height: 100%; */
    }

    .bottomPair {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .name {
      color: black;
      font-size: 15px;
      font-weight: 500;
    }

    .title {
      color: grey;
      font-size: 14px;
      font-weight: 300;
    }
  }

  // small PC
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    margin: 4rem 0;
  }

  // TAB
  @media (max-width: 768px) {
    margin: 4rem 0;
  }

  .review {
    font-size: 17px;
    font-weight: 400;
    /* color: grey; */
    /* background: red; */
    padding: 0.5rem;

    // TAB
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      width: 100%;
      font-size: 14px;
    }
  }
`;

export const Top = styled.div`
  /* background-color: red; */
  display: flex;
  /* display: relative; */
  width: 8rem;
  height: 8rem;
  /* margin-top: -8rem; */
  margin-top: 110%;
  border-radius: 50%;
  border: 2px solid var(--accent-color);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }

  /* .image {
    width: 8rem;
    height: 8rem;
    margin-top: -8rem;
    background: yellow;
    background: url("/images/herobg.jpg"); 
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display: absolute;
    border-radius: 50%;
    border: 2px solid var(--accent-color);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
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
  height: 10rem;
  width: 100%;
`;
