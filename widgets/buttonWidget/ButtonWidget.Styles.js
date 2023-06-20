import styled from "styled-components";

export const Button = styled.button`
  height: ${(props) => props.height || "60px"};
  border-radius: 21px;
  margin: 1rem 0;
  width: ${(props) => props.width || "250px"};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color || "transparent"};
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 15px;
  color: #ffffff;
  cursor: pointer;
  border: none;

  /* background-image: linear-gradient(
    to right,
    #4776e6 0%,
    #8e54e9 51%,
    #4776e6 100%
  ); */
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  /* text-transform: uppercase; */
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  /* box-shadow: 0 0 20px #eee; */
  border-radius: 10px;
  display: block;
  padding: 0.5rem 0;

  &:hover {
    background-color: #1d97f3;
    color: white;

    background-position: right center; /* change the direction of the change here */
    color: #fff;
    text-decoration: none;
  }

  // Small PC
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    width: ${(props) => props.width || "400px"};
    height: ${(props) => props.height || "60px"};
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: "250px";
    height: ${(props) => props.height || "50px"};
  }

  // MOBILE
  @media only screen and (max-width: 767px) {
    width: "35px";
    height: ${(props) => props.height || "40px"};
  }

  //MOBILE
  @media only screen and (max-width: 767px) {
    width: 95%;
    /* padding: 2rem 0.5rem; */
    justify-content: center;
  }
`;
