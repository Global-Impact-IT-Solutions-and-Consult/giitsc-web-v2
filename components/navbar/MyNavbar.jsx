"use client";

import { useEffect, useState, useCallback } from "react";

import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
// import React, { useState, useEffect,  } from "react";

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

  const [changeBg, setChangeBg] = useState(false);

  const changeBgHandler = useCallback((e) => {
    // console.log(window.scrollY);
    if (window.scrollY >= screen.height) {
      setChangeBg(true);
    } else {
      setChangeBg(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // browser code
      // console.log({ window });
      window.addEventListener("scroll", changeBgHandler, { passive: true });
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", changeBgHandler, {
          passive: true,
        });
      }
    };
  }, []);

  // const { scrollYProgress } = useScroll();

  const onWebMenuClick = () => {
    setSlideAnimate(!slideAnimate);
    setDropdown(false);
  };

  const onMobileMenuClick = () => {
    setExtendNav(!extendNav);
    setDropdownMobile(!dropdownMobile);
  };

  // ****** DB DATA ******* //
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      const client = new ApolloClient({
        uri: "http://localhost/wp/graphql",
        cache: new InMemoryCache(),
      });

      const response = await client.query({
        query: gql`
          query unemployed {
            navMenus {
              nodes {
                navMenu {
                  link
                  title
                  submenu {
                    link
                    title
                  }
                }
              }
            }
          }
        `,
      });

      const getResponse = response.data.navMenus.nodes.map(
        (item) => item.navMenu
      );

      setApiData(getResponse);
    }

    fetchServices();
  }, []);

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
              {apiData?.length > 0 && (
                <>
                  {apiData.map((item, i) => (
                    <>
                      {item.submenu ? (
                        <>
                          <Dropdown dropdown={dropdown}>
                            <div
                              className="dropdownbtn"
                              onClick={() => setDropdown(!dropdown)}
                            >
                              <span>{item.title}</span>
                              <i className="fa fa-caret-down"></i>
                            </div>
                            <div className="dropdownMenu">
                              {item.submenu.map((subItem, i) => (
                                <DropdownLInk
                                  key={i}
                                  onClick={() => setDropdown(false)}
                                  href={`${subItem.link}`}
                                >
                                  {subItem.title}
                                </DropdownLInk>
                              ))}
                            </div>
                          </Dropdown>
                        </>
                      ) : (
                        <NavbarLInk key={i} href={`${item.link}`}>
                          {item.title}
                        </NavbarLInk>
                      )}
                    </>
                  ))}
                </>
              )}
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
            {apiData?.length > 0 && (
              <>
                {apiData.map((item, i) => (
                  <>
                    {item.submenu ? (
                      <>
                        <Dropdown dropdown={dropdown}>
                          <div
                            className="dropdownbtn"
                            onClick={() => setDropdown(!dropdown)}
                          >
                            <span>{item.title}</span>
                            <i className="fa fa-caret-down"></i>
                          </div>
                          <div className="dropdownMenu"></div>
                        </Dropdown>

                        <DropdownMobile dropdownMobile={dropdownMobile}>
                          <div
                            className="dropdownbtnMobile"
                            onClick={() => setDropdownMobile(!dropdownMobile)}
                          >
                            <span>Services</span>
                            <i className="fa fa-caret-down"></i>
                          </div>
                          <div className="dropdownMenuMobile">
                            {item.submenu.map((subItem, i) => (
                              <DropdownLInkMobile
                                key={i}
                                onClick={onMobileMenuClick}
                                href={`${subItem.link}`}
                              >
                                {subItem.title}
                              </DropdownLInkMobile>
                            ))}
                          </div>
                        </DropdownMobile>
                      </>
                    ) : (
                      <NavbarLInkMobile
                        onClick={() => setExtendNav(!extendNav)}
                        href={`${item.link}`}
                      >
                        {item.title}
                      </NavbarLInkMobile>
                    )}
                  </>
                ))}
              </>
            )}
          </>
        )}
      </ExtendedWrapper>
    </Wrapper>
  );
};

export default MyNavbar;
