import PropTypes from "prop-types";
import { Svg, Rect } from "./Navbar.styles";


const NavbarSvg = ({ isOpen }) => {
  return (
    <Svg viewBox="0 0 16 16">
      <Rect
        x={0}
        y={0}
        width={16}
        height={1}
        style={{
          transform: isOpen ? "rotate(45deg) translate(0px, 7px)" : "none",
        }}
      />
      <Rect
        x={0}
        y={7}
        width={16}
        height={1}
        style={{
          transform: isOpen ? "rotate(-45deg) translate(0px, 0px)" : "none",
        }}
      />
      <Rect x={0} y={15} width={16} height={1} />
    </Svg>
  );
};

NavbarSvg.propTypes = {
  isOpen: PropTypes.bool,
};

export default NavbarSvg;
