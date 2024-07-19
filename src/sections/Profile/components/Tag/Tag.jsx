import { TagSpan } from "./Tag.styles";
import PropTypes from "prop-types";

const Tag = ({ children }) => {
  return <TagSpan>{children}</TagSpan>;
};

Tag.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tag;
