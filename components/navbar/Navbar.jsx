import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

// Styles
import { Wrapper } from "./Navbar.Styles";

// logo
// import logo from "../../public/images/GIITSC_LOGO.png"
import logo from "../../public/giitscLogo.png";

const Navbar = () => {
  return (
    <>
      <Wrapper>
        <Head>
          <title>GIITSC</title>
          <meta name="description" content="Global Impact " />
          <link rel="icon" href="/logo.png" />
        </Head>
        <section className="top-nav">
          <Link href="/" className="logoPart">
            <Image src={logo} alt="logo" width="65" height="35" />
            {/* <span>GIITSC</span> */}
          </Link>
          <input id="menu-toggle" type="checkbox" />
          <label className="menu-button-container" htmlFor="menu-toggle">
            <div className="menu-button"></div>
          </label>
          <ul className="menu">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <div className="serviceHead">Service &#9660;</div>
              <div className="services">
                <ul>
                  <li>
                    <Link href="/mobile">Mobile Development</Link>
                  </li>
                  <li>
                    <Link href="/networking">Networking</Link>
                  </li>
                  <li>
                    <Link href="/management">Project Management</Link>
                  </li>
                  <li>
                    <Link href="/training">Training</Link>
                  </li>
                  <li>
                    <Link href="/web">Web Development</Link>
                  </li>
                  <li>
                    <Link href="/marketing">Digital Marketing</Link>
                  </li>
                </ul>
              </div>
              {/* <div className="dropdown">
                <button className="dropbtn">
                  Dropdown
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div> */}
            </li>

            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </section>
      </Wrapper>
    </>
  );
};

export default Navbar;
