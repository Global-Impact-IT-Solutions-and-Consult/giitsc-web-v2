import Link from "next/link";
import Image from "next/image";

// styles
import {
  Wrapper,
  Overlay,
  Content,
  Top,
  TopLeft,
  TopRight,
  Bottom,
} from "./Footer.Styles";

// logo
import logo from "../../public/images/GIITSC_LOGO.png";

const Footer = () => {
  return (
    <Wrapper>
      {/* <Overlay> */}
      <Content>
        <Top>
          <div className="pair">
            <div className="address">Address</div>
            <div className="bottom">
              14, Amoo Street, By Rainoil Filling Station Agege Ogba.
            </div>
          </div>
          {/* Company */}
          <div className="pair">
            <div className="heading">Company</div>
            <div className="bottom">
              <ul>
                <li>
                  <Link href="/about">About</Link>
                </li>
                {/* <li>
                  <Link href="/services">Services</Link>
                </li> */}
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Services */}
          <div className="pair">
            <div className="heading">Services</div>
            <div className="bottom">
              <ul>
                <li>
                  <Link href="/mobile">Mobile App Dev</Link>
                </li>
                <li>
                  <Link href="/networking">Networking</Link>
                </li>
                <li>
                  <Link href="/management">Project Management</Link>
                </li>
                <li>
                  <Link href="/training">Trainings</Link>
                </li>
                <li>
                  <Link href="/web">Web Development</Link>
                </li>
                <li>
                  <Link href="/marketing">Digital Marketing</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Socials */}
          <div className="pair">
            <div className="heading">Socials</div>
            <div className="bottom">
              <ul>
                <li>
                  <Link href="/facebook">Facebook</Link>
                </li>
                <li>
                  <Link href="/twitter">Twitter</Link>
                </li>
                <li>
                  <Link href="/instagra">Instagram</Link>
                </li>
                <li>
                  <Link href="/linkedIn">LinkedIn</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* <TopLeft>
            <Link href="/" className="logoPart">
              <Image src={logo} alt="logo" width="65" height="35" />
              <span>GIITSC</span>
            </Link>
            <h5>
              Our mission is to serve as a technology consultant providing
              solutions to businesses of all sizes. Our certified experts
              partners with our customers to develop customized, cost-effective
              solutions that reduce expense, increase efficiency, and provide
              the competitive advantage you need to take your business to the
              next level.
            </h5>
          </TopLeft> */}
          {/* <TopRight>
            <h4 className="text-white">Useful Links</h4>
            <div className="topRightBottom">
              <Link href="/">Services</Link>
              <Link href="/">About us</Link>
              <Link href="/">Contact us</Link>
            </div>
          </TopRight> */}
        </Top>
        <Bottom className="text-white">
          &#169; GIITSC 2023.
          {/* All Rights Reserved */}
        </Bottom>
      </Content>
      {/* </Overlay> */}
    </Wrapper>
  );
};

export default Footer;
