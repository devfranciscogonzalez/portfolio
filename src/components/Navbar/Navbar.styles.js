import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  height: ${({ theme }) => theme.spacing.xxlarge};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: hsla(44, 100%, 93%, 0.2);
  box-shadow: 0 2px 6px 0 ${({ theme }) => theme.colors.boxShadow.primary};
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;

  @media (width <= 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  a {
    position: relative;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: ${({ theme }) => theme.fontSizes.small};
    letter-spacing: ${({ theme }) => theme.letterSpacings.small};
    color: ${({ theme }) => theme.colors.text.primary};
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: ${({ theme }) => theme.colors.text.subPrimary};
    }

    &::after {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      width: 0;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.primary};
      transition: width 0.2s ease, left 0.2s ease;
    }

    &:hover::after {
      width: 100%;
      left: 0;
    }

    &.active {
      color: ${({ theme }) => theme.colors.text.subPrimary};
    }

    @media (width <= 768px) {
      font-size: ${({ theme }) => theme.fontSizes.large};
    }
  }
`;

// const MobileNavList = styled.ul`
//   display: none;
//   flex-direction: column;
//   position: absolute;
//   top: 100%;
//   left: 0;
//   width: 100%;
//   background-color: hsla(44, 100%, 93%, 0.2);
//   list-style: none;

//   @media (width <= 768px) {
//     display: flex;
//   }
// `;

const MobileNavList = styled.ul`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  padding: ${({ theme }) => theme.padding.medium}
    ${({ theme }) => theme.padding.large} 0;
  list-style: none;

  @media (width <= 768px) {
    display: flex;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  height: 100%;
  @media (max-width: 768px) {
    display: block;
  }
`;

export { Nav, NavItem, NavList, MenuButton, MobileNavList };
