import PropTypes from "prop-types";
import { MediumText } from "../../../../components";
import { Item } from "./List.styles";

const TechnologyItem = ({ icon: Icon, name }) => (
  <Item>
    <Icon />
    <Icon />
    <MediumText $bold>{name}</MediumText>
  </Item>
);

TechnologyItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
};

export default TechnologyItem;
