import { useEffect, useState } from "react";
import {
  MenuButton,
  MobileNavList,
  Nav,
  NavItem,
  NavList,
} from "./Navbar.styles";
import NavbarSvg from "./NavbarSvg/NavbarSvg";

const sections = [
  { id: "home", label: "Home" },
  { id: "profile", label: "Perfil" },
  { id: "education", label: "Educación" },
  { id: "technology", label: "Tecnologías" },
  { id: "project", label: "Proyectos" },
  { id: "contact", label: "Contacto" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    let currentSection = "";
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (
        element &&
        element.offsetTop <= scrollPosition &&
        element.offsetTop + element.offsetHeight > scrollPosition
      ) {
        currentSection = id;
      }
    });

    setActiveSection(currentSection);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Nav $menuOpen={menuOpen}>
      <MenuButton onClick={toggleMenu}>
        <NavbarSvg isOpen={menuOpen} />
      </MenuButton>
      <NavList>
        {sections.map(({ id, label }) => (
          <NavItem key={id}>
            <a
              href={`#${id}`}
              className={activeSection === id ? "active" : ""}
              aria-label={label}
            >
              {label}
            </a>
          </NavItem>
        ))}
      </NavList>
      {menuOpen && (
        <MobileNavList>
          {sections.map(({ id, label }) => (
            <NavItem key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? "active" : ""}
                aria-label={label}
                onClick={toggleMenu}
              >
                {label}
              </a>
            </NavItem>
          ))}
        </MobileNavList>
      )}
    </Nav>
  );
};

export default Navbar;
