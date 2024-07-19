import PropTypes from "prop-types";
import { BadgeContainer } from "./Badge.styles";

const Badge = ({ children }) => {
  return <BadgeContainer>{children}</BadgeContainer>;
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Badge;
