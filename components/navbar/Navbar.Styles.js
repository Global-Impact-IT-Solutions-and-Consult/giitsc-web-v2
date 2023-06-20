import styled from "styled-components";

export const Wrapper = styled.div `
  /* background-color: blue; */
  /* height: 50px; */
  display: flex;
  justify-content: center;

  @import url(https://fonts.googleapis.com/css?family=Raleway);

  .top-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: #3e89dc;
    height: 86px;
    padding: 1em 5rem;
    position: fixed;
    /* perspective: 1000px; */
    z-index: 5;
    /* width: 90vw; */
    width: 100%;
    margin: 0 auto;
    min-height: 60px;
    /* background-color: rgba(0, 0, 0, 0.75); */
    background: rgba(1, 23, 41, 0.62);
    background: var(--theme-color);
    backdrop-filter: blur(20px);
    box-shadow: 0 0 15px -6px #424242;
    /* border-radius: 21px; */
    /* margin-top: 1rem; */

    // TAB
    @media only screen and (min-width: 768px) and (max-width: 991px) {
      width: 100vw;
      margin-top: 0;
    }

    // MOBILE
    @media only screen and (max-width: 767px) {
      width: 100vw;
      margin-top: 0;
      padding-top: 1.5rem;
    }
  }

  .logoPart {
    display: flex;
    gap: 0.5rem;
    width: 8rem;
    align-items: center;
    justify-content: space-between;
    text-decoration: none;
  }

  .logoPart span {
    font-size: 24px;
    font-weight: 600;
    font-family: sans-serif;
    color: #3e89dc;
  }

  ul li {
    padding: 10px 10px;
  }

  ul li a {
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
  }

  ul li a::before {
    content: "";
    position: absolute;
    bottom: -7px;
    left: 43%;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    transition: 0.5s;
  }

  ul li a:hover::before {
    background-color: var(--text-yellow);
    color: var(--accent-color);
  }

  .menu {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 0;
    position: relative;
  }

  .menu > li {
    margin: 0 1rem;
    overflow: hidden;
  }

  .menu > li a {
    text-decoration: none;
    color: var(--text-white);
  }

  .menu > li a:hover {
    color: var(--themeColor);
  }

  .hide {
    display: none;
  }

  .menu2 {
    display: flex;
    flex-direction: row;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .menu2 > li {
    margin: 0 1rem;
    overflow: hidden;
  }

  .menu2 > li a {
    text-decoration: none;
    color: var(--text-white);
  }

  .menu2 > li a:hover {
    color: var(--themeColor);
  }

  .menu-button-container {
    display: none;
    height: 100%;
    width: 30px;
    cursor: pointer;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  #menu-toggle {
    display: none;
  }

  .menu-button,
  .menu-button::before,
  .menu-button::after {
    display: block;
    background-color: whitesmoke;
    position: absolute;
    height: 4px;
    width: 30px;
    transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 2px;
  }

  .menu-button::before {
    content: "";
    margin-top: -8px;
  }

  .menu-button::after {
    content: "";
    margin-top: 8px;
  }

  #menu-toggle:checked + .menu-button-container .menu-button::before {
    margin-top: 0px;
    transform: rotate(405deg);
  }

  #menu-toggle:checked + .menu-button-container .menu-button {
    background: rgba(255, 255, 255, 0);
  }

  #menu-toggle:checked + .menu-button-container .menu-button::after {
    margin-top: 0px;
    transform: rotate(-405deg);
  }

  .serviceHead {
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
    display: flex;
    align-items: center;
    /* background: red; */
    margin-top: 0.4rem;
    cursor: pointer;
  }

  .services {
    height: 320px;
    /* background: pink; */
    z-index: 2;
    position: absolute;
    padding: 1rem;
    padding-right: 5rem;
    margin-top: -1.5rem;
    margin-left: -2rem;
    width: 5rem;

    ul {
      display: none;
      /* background: red; */
      list-style: none;
      text-decoration: none;
      padding-top: 3rem;
      /* display: flex;
      flex-direction: column;
      gap: 0.8rem;
      justify-content: center;
      align-items: center;
      text-align: center; */
    }

    li {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;
      text-align: center;
      background: #fff;
      background: rgba(1, 23, 41, 0.62);
      backdrop-filter: blur(20px);
      /* box-shadow: 0 0 15px -6px #424242; */
      width: 10em;
      margin-bottom: 0.5rem;
      margin-left: -4rem;
      padding: 0.7rem 1rem;
      border-radius: 7px;
    }

    li a {
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 700;
      font-size: 10px;
      line-height: 12px;
      cursor: crosshair;
    }

    &:hover {
      ul {
        display: block;
      }
    }
  }

  @media (max-width: 1000px) {
    .hide {
      display: block;
    }

    .top-nav {
      border-radius: 0;
      min-height: 50px;
    }

    .menu-button-container {
      display: flex;
    }

    .menu {
      position: absolute;
      top: 0;
      margin-top: 50px;
      left: 0;
      flex-direction: column;
      width: 100%;
      justify-content: center;
      align-items: center;
    }

    .menu2 {
      display: none;
    }

    #menu-toggle ~ .menu li {
      height: 0;
      margin: 0;
      padding: 0;
      border: 0;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    #menu-toggle:checked ~ .menu li {
      border: 1px solid #333;
      height: 2.5em;
      padding: 0.5em;
      transition: height 400ms cubic-bezier(0.23, 1, 0.32, 1);
    }

    .menu > li {
      display: flex;
      justify-content: center;
      margin: 0;
      padding: 0.5em 0;
      width: 100%;
      color: var(--text-white);
      background-color: rgba(0, 0, 0, 0.75);
      /* background-color: var(--theme-color); */
    }

    .menu > li a {
      text-decoration: none;
      color: var(--text-white);
      color: yellow;
    }

    .menu > li a:hover {
      color: var(--text-yellow);
    }

    .menu > li:not(:last-child) {
      border-bottom: 1px solid #444;
    }
  }
`;