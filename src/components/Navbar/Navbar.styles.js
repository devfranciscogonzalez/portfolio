import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  height: ${({ theme }) => theme.spacing.xxlarge};

  border-radius: ${({ theme }) => theme.borderRadius.medium};
  outline: 1px solid ${({ theme }) => theme.colors.utility.border};

  background-color: hsla(44, 100%, 93%, 0.2);
  backdrop-filter: blur(10px);

  @media (width <= 768px) {
    height: ${({ theme }) => theme.spacing.xxlarge};
    max-height: ${({ theme }) => theme.spacing.xxlarge};
    transition: all 0.3s linear;

    ${({ $menuOpen, theme }) =>
      $menuOpen &&
      `
      max-height: 100dvh;
      height: calc(100dvh - ${theme.spacing.medium}); 
    `}

    ${({ $menuOpen, theme }) =>
      !$menuOpen &&
      ` 
      height: ${theme.spacing.xxlarge}; 
      min-height: ${theme.spacing.xxlarge};
    `}
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  height: 100%;

  @media (width <= 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 100%;
  a {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.small};
    letter-spacing: ${({ theme }) => theme.letterSpacings.medium};
    color: ${({ theme }) => theme.colors.text.primary};

    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      font-weight: 700;
    }

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      right: 50%;
      bottom: 30%;
      width: 0;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.primary};
      transition: width 0.3s ease, left 0.2s ease;
    }

    &:hover::after {
      width: 100%;
      left: 0;
      right: 0;
    }

    &.active {
      font-weight: 700;
    }
    @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: ${({ theme }) => theme.fontSizes.medium};
      letter-spacing: ${({ theme }) => theme.letterSpacings.medium};
    }
  }
`;

const NavItemLogo = styled.li`
  height: 100%;
  list-style: none;

  a {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      opacity: 0.8;
    }
  }
  svg {
    width: 35px;
    height: 35px;

    & path {
      fill: ${({ theme }) => theme.colors.primary};
    }
  }
`;

const MobileNavList = styled.ul`
  display: none;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xlarge};
  height: 100%;

  max-height: calc(100dvh - ${({ theme }) => theme.spacing.header});

  list-style: none;

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;

const MobileNavItem = styled.li`
  a {
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 400;
    font-size: ${({ theme }) => theme.fontSizes.small};
    letter-spacing: ${({ theme }) => theme.letterSpacings.medium};
    color: ${({ theme }) => theme.colors.text.primary};

    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      font-weight: 700;
    }

    &.active {
      font-weight: 700;
    }
    @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: ${({ theme }) => theme.fontSizes.medium};
      letter-spacing: ${({ theme }) => theme.letterSpacings.medium};
    }
  }
`;

const MenuButton = styled.button`
  display: none;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme }) => theme.spacing.xxlarge};
  width: 100%;
  padding: 0 ${({ theme }) => theme.spacing.small};

  background: none;
  border: none;

  cursor: pointer;

  svg {
    width: 35px;
    height: 35px;
    fill: ${({ theme }) => theme.colors.primary};
  }

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
  }
`;

const Svg = styled.svg`
  width: 24px;
  height: 24px;

  fill: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  transition: fill 0.3s ease;

  &:hover {
    opacity: 0.5;
  }

  @media (width <= ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 20px;
    height: 20px;
  }
`;

const Rect = styled.rect`
  transform-origin: center;
  transition: transform 0.3s ease;
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
  position: absolute;
  bottom: ${({ theme }) => theme.spacing.medium};
`;

export {
  Nav,
  NavItem,
  NavList,
  MenuButton,
  MobileNavList,
  Svg,
  Rect,
  SocialMediaWrapper,
  NavItemLogo,
  MobileNavItem,
};
