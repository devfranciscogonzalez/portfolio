import { useEffect, useState } from "react";
import NavbarSvg from "./NavbarSvg";
import { SECTIONS } from "../../constants/sections";
import SocialMedia from "../SocialMedia/SocialMedia";
import {
  MenuButton,
  MobileNavList,
  Nav,
  NavItem,
  NavList,
  SocialMediaWrapper,
} from "./Navbar.styles";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    let currentSection = "";

    SECTIONS.forEach(({ id }) => {
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
      <MenuButton onClick={toggleMenu} aria-label="Botón de menú">
        <NavbarSvg isOpen={menuOpen} />
      </MenuButton>
      <NavList>
        {SECTIONS.map(({ id, label }) => (
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
          {SECTIONS.map(({ id, label }) => (
            <NavItem key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? "active" : ""}
                onClick={toggleMenu}
                aria-label={label}
              >
                {label}
              </a>
            </NavItem>
          ))}
          <SocialMediaWrapper>
            <SocialMedia />
          </SocialMediaWrapper>
        </MobileNavList>
      )}
    </Nav>
  );
};

export default Navbar;
