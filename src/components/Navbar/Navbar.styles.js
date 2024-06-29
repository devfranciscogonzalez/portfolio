import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  height: ${({ theme }) => theme.spacing.xxlarge};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: hsla(44, 100%, 93%, 0.2);
  /* box-shadow: 0 0 0 0.0625rem hsla(0, 0%, 0%, 0.08); */
  box-shadow: 0 2px 6px 0 hsla(0, 0%, 0%, 0.08);
  backdrop-filter: blur(10px);
  /* background-color: hsla(0, 0%, 4%, 0.2);
  box-shadow: 0 0 0 .0625rem hsla(0, 0%, 100%, 0.08); */
  /* backdrop-filter: blur(1.5rem) saturate(140%); */
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  height: 100%;
  align-items: center;
  list-style: none;
`;

const NavItem = styled.li`
  a {
    color: ${({ theme }) => theme.colors.text.primary};
    text-decoration: none;
    cursor: pointer;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: ${({ theme }) => theme.fontSizes.small};
    letter-spacing: 0.0625rem;
    text-transform: uppercase;
    &:hover {
      color: ${({ theme }) => theme.colors};
    }
  }
`;

export { Nav, NavItem, NavList };
