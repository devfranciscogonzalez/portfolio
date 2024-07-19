import PropTypes from "prop-types";
// import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { CenteredLayout, MainContainer } from "./Layout.styles";

const Layout = ({ children }) => {
  return (
    <CenteredLayout>
      <Header />
      <MainContainer>{children}</MainContainer>
      {/* <Footer /> */}
    </CenteredLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
