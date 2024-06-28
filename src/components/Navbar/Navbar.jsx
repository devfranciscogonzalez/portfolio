import { Nav, NavList, NavItem } from "./Navbar.styles";

const Navbar = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <a href="#home">Home</a>
        </NavItem>
        <NavItem>
          <a href="#education">Educación</a>
        </NavItem>
        <NavItem>
          <a href="#technology">Tecnologías</a>
        </NavItem>
        <NavItem>
          <a href="#project">Proyectos</a>
        </NavItem>
        <NavItem>
          <a href="#contact">Contacto</a>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;
