import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import React, { useState, useEffect } from "react";

// styles
import {
  Dropdown,
  DropdownLInk,
  DropdownLInkMobile,
  DropdownMobile,
  ExtendedWrapper,
  Hamburger,
  HamburgerMobile,
  InnerWrapper,
  Left,
  LinkHolder,
  LogoHolder,
  NavbarLInk,
  NavbarLInkMobile,
  Right,
  RightInner,
  Wrapper,
} from "./MyNav.Styles";

// icons
import logo from "../../public/icons/nav/logo.png";
import menu from "../../public/icons/nav/hamburger.png";
import { motion, transform, useTransform, useScroll } from "framer-motion";

const MyNavbar = () => {
  const [extendNav, setExtendNav] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdownMobile, setDropdownMobile] = useState(false);
  const [slideAnimate, setSlideAnimate] = useState(false);

  const [changeBg, setChangeBg] = useState(true);
  console.log("🚀 ~ file: MyNavbar.jsx:38 ~ MyNavbar ~ changeBg:", changeBg);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // browser code
      const changeBgHandler = () => {
        if (window.scrollY >= 90) {
          setChangeBg(true);
        } else {
          setChangeBg(false);
        }
      };

      window.addEventListener("scroll", changeBgHandler);
    }
  });

  // const { scrollYProgress } = useScroll();

  const onWebMenuClick = () => {
    setSlideAnimate(!slideAnimate);
    setDropdown(false);
  };

  const onMobileMenuClick = () => {
    setExtendNav(!extendNav);
    setDropdownMobile(!dropdownMobile);
  };

  return (
    <Wrapper
      extendNav={extendNav}
      changeBg={changeBg}
      // style={{ scaleX: scrollYProgress }}
      className={changeBg ? "solidBg" : ""}
      // className="solidBg"
    >
      <Head>
        <title>Global Impact I.T Solutions & Consult</title>
        <meta name="description" content="Global Impact " />
        <link rel="icon" href="/logo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
      </Head>
      {/* Normal menu */}
      <InnerWrapper>
        <Left>
          <Link href="/" className="logoPart">
            <Image src={logo} alt="logo" width="65" height="35" />
          </Link>
        </Left>
        <Right>
          <RightInner>
            <LinkHolder
              initial={{ opacity: 0, x: 450 }}
              animate={{
                opacity: slideAnimate ? 1 : 0,
                x: slideAnimate ? 0 : 450,
              }}
              transition={{ duration: 1 }}
            >
              <NavbarLInk href="/">Home</NavbarLInk>
              <Dropdown dropdown={dropdown}>
                <div
                  className="dropdownbtn"
                  onClick={() => setDropdown(!dropdown)}
                >
                  <span>Services</span>
                  <i class="fa fa-caret-down"></i>
                </div>
                <div className="dropdownMenu">
                  <DropdownLInk
                    onClick={() => setDropdown(false)}
                    href="/mobile"
                  >
                    Mobile Development
                  </DropdownLInk>
                  <DropdownLInk
                    onClick={() => setDropdown(false)}
                    href="/networking"
                  >
                    Networking
                  </DropdownLInk>
                  <DropdownLInk
                    onClick={() => setDropdown(false)}
                    href="/management"
                  >
                    Project Management
                  </DropdownLInk>
                  <DropdownLInk
                    onClick={() => setDropdown(false)}
                    href="/training"
                  >
                    Training
                  </DropdownLInk>
                  <DropdownLInk onClick={() => setDropdown(false)} href="/web">
                    Web Development
                  </DropdownLInk>
                  <DropdownLInk
                    onClick={() => setDropdown(false)}
                    href="/marketing"
                  >
                    Digital Marketing
                  </DropdownLInk>
                </div>
              </Dropdown>
              <NavbarLInk href="/about">About us</NavbarLInk>
              <NavbarLInk href="/contact">Contact</NavbarLInk>

              {/* <HamburgerMobile onClick={() => setExtendNav(!extendNav)}>
                {extendNav ? (
                  <>&#10005;</>
                ) : (
                  <Image src={menu} alt="logo" width="25" height="32" />
                )}
              </HamburgerMobile> */}
            </LinkHolder>
            <Hamburger onClick={onWebMenuClick}>
              {slideAnimate ? (
                <>&#10005;</>
              ) : (
                <Image src={menu} alt="logo" width="25" height="32" />
              )}
            </Hamburger>
            <HamburgerMobile onClick={() => setExtendNav(!extendNav)}>
              {extendNav ? (
                <>&#10005;</>
              ) : (
                <Image src={menu} alt="logo" width="25" height="32" />
              )}
            </HamburgerMobile>
          </RightInner>
        </Right>
      </InnerWrapper>

      {/* Mobile menu */}
      <ExtendedWrapper>
        {extendNav && (
          <>
            <NavbarLInkMobile onClick={() => setExtendNav(!extendNav)} href="/">
              Home
            </NavbarLInkMobile>
            <DropdownMobile dropdownMobile={dropdownMobile}>
              <div
                className="dropdownbtnMobile"
                onClick={() => setDropdownMobile(!dropdownMobile)}
              >
                <span>Services</span>
                <i className="fa fa-caret-down"></i>
              </div>
              <div className="dropdownMenuMobile">
                <DropdownLInkMobile onClick={onMobileMenuClick} href="/mobile">
                  Mobile Development
                </DropdownLInkMobile>
                <DropdownLInkMobile
                  onClick={onMobileMenuClick}
                  href="/networking"
                >
                  Networking
                </DropdownLInkMobile>
                <DropdownLInkMobile
                  onClick={onMobileMenuClick}
                  href="/management"
                >
                  Project Management
                </DropdownLInkMobile>
                <DropdownLInkMobile
                  onClick={onMobileMenuClick}
                  href="/training"
                >
                  Training
                </DropdownLInkMobile>
                <DropdownLInkMobile onClick={onMobileMenuClick} href="/web">
                  Web Development
                </DropdownLInkMobile>
                <DropdownLInkMobile
                  onClick={onMobileMenuClick}
                  href="/marketing"
                >
                  Digital Marketing
                </DropdownLInkMobile>
              </div>
            </DropdownMobile>
            <NavbarLInkMobile
              onClick={() => setExtendNav(!extendNav)}
              href="/about"
            >
              About us
            </NavbarLInkMobile>
            <NavbarLInkMobile
              onClick={() => setExtendNav(!extendNav)}
              href="/contact"
            >
              Contact
            </NavbarLInkMobile>
          </>
        )}
      </ExtendedWrapper>
    </Wrapper>
  );
};

export default MyNavbar;
