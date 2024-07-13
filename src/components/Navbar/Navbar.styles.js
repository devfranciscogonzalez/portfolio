import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  height: ${({ theme }) => theme.spacing.xxlarge};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: hsla(44, 100%, 93%, 0.2);
  box-shadow: 0 2px 6px 0 ${({ theme }) => theme.colors.boxShadow.primary};
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

const NavList = styled.ol`
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
  a {
    position: relative;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: ${({ theme }) => theme.fontSizes.medium};
    letter-spacing: ${({ theme }) => theme.letterSpacings.small};
    color: ${({ theme }) => theme.colors.text.primary};
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      font-weight: 700;
    }

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0%;
      width: 0;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.primary};
      transition: width 0.3s ease, left 0.2s ease;
    }

    &:hover::after {
      width: 100%;
      left: 0;
    }

    &.active {
      font-weight: 700;
    }

    @media (width <= 768px) {
      font-size: ${({ theme }) => theme.fontSizes.medium};
      letter-spacing: ${({ theme }) => theme.letterSpacings.medium};
    }
  }
`;

const MobileNavList = styled.ol`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
  height: 100%;
  max-height: calc(100dvh - ${({ theme }) => theme.spacing.header});
  padding: ${({ theme }) => theme.padding.medium} ${({ theme }) => theme.padding.large};
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
  height: ${({ theme }) => theme.spacing.xxlarge};
  margin: 0 ${({ theme }) => theme.spacing.medium} 0 auto;
  padding: ${({ theme }) => theme.padding.xsmall};

  @media (width <= 768px) {
    display: block;
  }
`;

const Svg = styled.svg`
  width: 16px;
  height: 16px;
  fill: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

const Rect = styled.rect`
  transform-origin: center;
  transition: transform 0.3ms ease;
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
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
};
