import MainContainer from "./MainContent.styles";
import PropTypes from "prop-types";

const MainContent = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

MainContent.propTypes = {
  children: PropTypes.node,
};

export default MainContent;
