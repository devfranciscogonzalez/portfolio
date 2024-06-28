import PropTypes from "prop-types";
import Header from "../Header/Header";
import MainContent from "../MainContent/MainContent";
import { Container } from "./Layout.styles";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
