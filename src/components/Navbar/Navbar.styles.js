import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.desktop};
  height: ${({ theme }) => theme.spacing.xxlarge};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  /* background-color: hsla(0, 0%, 4%, 0.2);
  box-shadow: 0 0 0 1px hsla(0, 0%, 100%, 0.08); */
  background-color: hsla(44, 100%, 93%, 0.6);
  box-shadow: 0 0 0 1px hsla(0, 0%, 0%, 0.08);
  /* backdrop-filter: blur(24px) saturate(140%); */
  backdrop-filter: blur(10px);
  margin: 0 auto;
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

    &:hover {
      color: #ddd;
    }
  }
`;

export { Nav, NavItem, NavList };
