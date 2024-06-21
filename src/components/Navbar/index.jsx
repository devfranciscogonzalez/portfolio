import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  background: #333;
  padding: 1rem;
  z-index: 1000;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  color: white;

  a {
    color: white;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #ddd;
    }
  }
`;

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
