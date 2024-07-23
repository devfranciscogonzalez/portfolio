import {
  EducationButtonPrimary,
  EducationButtonSecondary,
} from "./EducationButton.styles";
import PropTypes from "prop-types";

const ActionEducationButton = ({
  isPrimary = false,
  href,
  icon: Icon,
  value = "",
}) => {
  const Button = isPrimary ? EducationButtonPrimary : EducationButtonSecondary;
  return (
    <Button
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={value}
    >
      <Icon />
      {value}
    </Button>
  );
};

ActionEducationButton.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  isPrimary: PropTypes.bool,
  value: PropTypes.string.isRequired,
};

export default ActionEducationButton;
