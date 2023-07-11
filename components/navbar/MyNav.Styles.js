import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNav ? "100vh" : "86px")};
  /* background: ${(props) => (props.changeBg ? "#011729" : "#00000033")}; */
  /* background-color: #00000033; */
  background-color: ${(props) => (props.changeBg ? "#011729" : "#00000033")};  ;
  display: flex;
  flex-direction: column;
  position: fixed;
  transition: all 400ms ease-in;
  z-index: 2;

  .solidBg {
    background-color: var(--theme-color);
  }

  // Media query
  @media (min-width: 700px) {
    height: 86px;
  }
`;

export const InnerWrapper = styled.div`
  width: 100%;
  height: 86px;
  display: flex;
  align-items: center;

  /* bigger display */
  @media only screen and (min-width: 1441px) {
    margin: 0 auto;
    width: 90%;
  }
`;

export const Left = styled.div`
  flex: 30%;
  /* background: green; */
  padding-left: 50px;
  align-items: center;
  /* padding-top: 20px; */

  /* bigger display */
  @media only screen and (min-width: 1441px) {
    img {
      width: 110px;
      height: 60px;
    }
  }
`;

export const Right = styled(motion.div)`
  display: flex;
  /* gap: 3rem; */
  align-items: center;
  justify-content: end;
  flex: 70%;
  /* background: red; */
  padding-right: 5%;
`;

export const RightInner = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background: red; */
  padding-right: -2rem;
  /* overflow-x: hidden; */

  /* &::-webkit-scrollbar {
    display: none;
  } */
`;

export const LinkHolder = styled(motion.div)`
  display: flex;
  /* background: red; */
`;

export const NavbarLInk = styled(Link)`
  text-decoration: none;
  position: relative;
  text-align: center;
  color: #ffffff;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  //   padding-bottom: 0.3rem;
  margin: 10px;
  margin-right: 2.5rem;
  transition: all 400ms ease-in;

  /* bigger display */
  @media only screen and (min-width: 1441px) {
    font-size: 24px;
    line-height: 26px;
  }

  &:hover {
    /* border-bottom: 1px solid white; */
    color: #ffffff;
  }

  // Media query
  @media (max-width: 700px) {
    display: none;
  }
`;

export const Hamburger = styled.button`
  /* width: 40px;
  height: 50px; */
  width: 60px;
  height: 70px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  /* background: yellow; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -5px;
  font-size: 18px;
  font-weight: 600;
  position: relative;

  img {
    position: absolute;
    width: 25px;
    height: 32px;
  }

  /* bigger display */
  @media only screen and (min-width: 1441px) {
    /* background-color: azure; */
    font-size: 45px;
    margin-top: 0;
    img {
      width: 50px;
      height: 50px;
    }
  }

  // Media query
  @media (max-width: 700px) {
    display: none;
  }

  .bigHamburger {
    background-color: red;
  }
`;

export const Dropdown = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  /* background: red; */

  .dropdownbtn {
    text-decoration: none;
    position: relative;
    text-align: center;
    color: #ffffff;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    padding-bottom: 0.3rem;
    margin: 10px;
    margin-right: 2.5rem;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;
    transition: all 400ms ease-in;

    /* bigger display */
    @media only screen and (min-width: 1441px) {
      font-size: 24px;
      line-height: 26px;
      /* background: yellow; */
    }
  }

  .dropdownMenu {
    position: absolute;
    top: 0;
    left: 0;
    /* background: yellow; */
    width: 200px;
    display: flex;
    display: ${(props) => (props.dropdown === false ? "none" : "")};
    flex-direction: column;
    margin-top: 4rem;
    text-align: left;
    background: linear-gradient(
        0deg,
        rgba(1, 23, 41, 0.62),
        rgba(1, 23, 41, 0.62)
      ),
      linear-gradient(0deg, rgba(1, 23, 41, 0.62), rgba(1, 23, 41, 0.62)),
      rgba(1, 23, 41, 0.62);
    background: rgba(0, 0, 0, 0.75);
  }

  /* bigger display */
  @media only screen and (min-width: 1441px) {
    /* width: 350px;
    background: blueviolet; */
  }

  // Media query
  @media (max-width: 700px) {
    display: none;
  }
`;

export const DropdownLInk = styled(Link)`
  text-decoration: none;
  position: relative;
  text-align: left;
  color: #ffffff;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  padding-left: 0.3rem;
  padding-bottom: 0.3rem;
  margin: 10px;
  transition: all 300ms ease-in;

  /* bigger display */
  @media only screen and (min-width: 1441px) {
    font-size: 24px;
    line-height: 26px;
    /* background: yellow; */
  }

  // Media query
  @media (max-width: 700px) {
    display: none;
  }
`;

// Mobile menu dropdown
export const ExtendedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
      0deg,
      rgba(1, 23, 41, 0.62),
      rgba(1, 23, 41, 0.62)
    ),
    linear-gradient(0deg, rgba(1, 23, 41, 0.62), rgba(1, 23, 41, 0.62)),
    rgba(1, 23, 41, 0.62);

  // Media query
  @media (min-width: 700px) {
    display: none;
  }
`;

export const HamburgerMobile = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  /* background: red; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -5px;
  font-size: 18px;
  font-weight: 600;

  // Media query
  @media (min-width: 700px) {
    display: none;
  }
`;

export const DropdownMobile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  /* background: red; */

  .dropdownbtnMobile {
    text-decoration: none;
    position: relative;
    text-align: center;
    color: #ffffff;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    padding-bottom: 0.3rem;
    margin: 10px;
    display: flex;
    align-items: center;
    gap: 0.3rem;
    cursor: pointer;
    transition: all 400ms ease-in;
  }

  .dropdownMenuMobile {
    top: 0;
    left: 0;
    /* background: yellow; */
    width: 200px;
    display: flex;
    display: ${(props) => props.dropdownMobile && "none"};
    flex-direction: column;
    text-align: left;

    background: linear-gradient(
        0deg,
        rgba(1, 23, 41, 0.62),
        rgba(1, 23, 41, 0.62)
      ),
      linear-gradient(0deg, rgba(1, 23, 41, 0.62), rgba(1, 23, 41, 0.62)),
      rgba(1, 23, 41, 0.62);
  }

  // Media query
  @media (min-width: 700px) {
    display: none;
  }
`;

export const DropdownLInkMobile = styled(Link)`
  text-decoration: none;
  position: relative;
  text-align: center;
  color: grey;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  padding-left: 0.3rem;
  padding-bottom: 0.3rem;
  margin: 10px;
  transition: all 300ms ease-in;

  &:hover {
    color: white;
  }

  // Media query //hide in big screen
  @media (min-width: 700px) {
    display: none;
  }
`;

export const NavbarLInkMobile = styled(Link)`
  text-decoration: none;
  position: relative;
  text-align: center;
  color: #ffffff;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  padding-bottom: 0.3rem;
  margin: 10px;
  transition: all 300ms ease-in;

  &:hover {
    border-bottom: 1px solid white;
  }
`;
