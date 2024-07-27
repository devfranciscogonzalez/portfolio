import { PrimaryButton, SecondaryButton } from "./Button.styles";
import PropTypes from "prop-types";

const HomeActionButton = ({ href, icon: Icon, value = "", isPrimary = false }) => {
  const Button = isPrimary ? PrimaryButton : SecondaryButton;
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

HomeActionButton.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  isPrimary: PropTypes.bool,
  value: PropTypes.string.isRequired,
};

export default HomeActionButton;
