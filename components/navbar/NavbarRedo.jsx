import React, { useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import MyFunction from "./nav";

const NavbarRedo = () => {
  const myRef = useRef();

  // const MyFunction = () => {
  //   if (myRef.className === "topnav") {
  //     myRef.className += " responsive";
  //   } else {
  //     myRef.className = "topnav";
  //   }
  // };

  return (
    <>
      <Head>
        <Link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>

      <body>
        <div className="topnav" ref={myRef} id="myTopnav">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <div className="dropdown">
            <button className="dropbtn">
              Dropdown
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <a href="#about">About</a>
          <a
            href="javascript:void(0);"
            style="font-size:15px;"
            className="icon"
            onclick={MyFunction()}
          >
            &#9776;
          </a>
        </div>

        {/* <MyFunction /> */}
      </body>
    </>
  );
};

export default NavbarRedo;
