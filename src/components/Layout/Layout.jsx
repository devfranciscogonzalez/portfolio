import PropTypes from "prop-types";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import { CenteredLayout } from "./Layout.styles";

const Layout = ({ children }) => {
  return (
    <CenteredLayout>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </CenteredLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
