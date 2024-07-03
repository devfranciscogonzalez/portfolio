import { BadgeContainer } from "./Badge.styles";

import PropTypes from "prop-types";

const Badge = ({ text }) => {
  return <BadgeContainer>{text}</BadgeContainer>;
};

Badge.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Badge;
