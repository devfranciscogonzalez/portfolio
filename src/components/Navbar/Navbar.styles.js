import styled from "styled-components";

const Nav = styled.nav`
  width: 100%;
  height: ${({ theme }) => theme.spacing.xxlarge};
  max-width: ${({ theme }) => theme.breakpoints.laptop};
  border-radius: ${({ theme }) => theme.borderRadius.xlarge};
  background-color: hsla(0, 0%, 4%, 0.2);
  box-shadow: 0 0 0 1px hsla(0, 0%, 100%, 0.08);
  backdrop-filter: blur(24px) saturate(140%);
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
  color: white;

  a {
    color: #09f;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #ddd;
    }
  }
`;

export { Nav, NavItem, NavList };
