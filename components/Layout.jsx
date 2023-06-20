// components
import Navbar from "./navbar/Navbar";

// styles
import { Wrapper, Overlay } from "./Layout.Styles";
import Footer from "./footer/Footer";
import NavbarRedo from "./navbar/NavbarRedo";
import MyNavbar from "./navbar/MyNavbar";

const Layout = ({ children }) => {
  return (
    <>
      <Wrapper>
        <Overlay>
          {/* <Navbar /> */}
          <MyNavbar />
          {/* <NavbarRedo /> */}
          {children}
          <Footer />
        </Overlay>
      </Wrapper>
    </>
  );
};

export default Layout;
