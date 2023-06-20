import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: 1.5rem 0;

  //MOBILE
  @media only screen and (max-width: 767px) {
    width: 95%;
    /* padding: 2rem 0.5rem; */
    justify-content: center;
  }
`;

export const Input = styled.input`
  padding: 0.5em 1rem;
  height: ${(props) => props.height || "50px"};
  width: ${(props) => props.width || "400px"};
  font-family: "Inter";

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  background: #ffffff;
  /* color: #c3c3c3; */
  /* background: #c3c3c3; */
  /* background: red; */
  border: 1px solid rgba(1, 23, 41, 0.48);
  border-radius: 5px;
  /* border: none; */
  /* box-sizing: border-box; */

  // Small PC
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    width: ${(props) => (props.width ? "170px" : "400px")};
    height: ${(props) => (props.width === "md" ? "40px" : "60px")};
  }

  // TAB
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    width: 580px;
    height: 50px;
  }

  // MOBILE
  /* @media only screen and (max-width: 767px) {
    width: ${(props) => (props.width === "md" ? "170px" : "350px")};
    height: 40px;
  } */

  //MOBILE
  @media only screen and (max-width: 767px) {
    /* width: 95%; */
    width: 330px;
    /* padding: 2rem 0.5rem; */
    justify-content: center;
  }
`;

export const Label = styled.label`
  width: 119px;
  height: 20px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-style: bold;
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  color: #011729;

  // MOBILE
  @media only screen and (max-width: 767px) {
    text-align: center;
  }
`;
