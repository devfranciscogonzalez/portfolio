import { MediumText } from "../../../../components";
import { Item } from "./List.styles";
import PropTypes from "prop-types";

const TechnologyItem = ({ icon: Icon, name }) => (
  <Item>
    <Icon />
    <Icon />
    <MediumText>{name}</MediumText>
  </Item>
);

TechnologyItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
};

export default TechnologyItem;
