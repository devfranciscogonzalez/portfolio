import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: ${({ theme }) => theme.spacing.medium};
  z-index: ${({ theme }) => theme.zIndex.sticky};
  display: flex;
  justify-content: center;
`;

// const Logo = styled.img`
//   /* Your CSS styles for the logo */
// `;

// const Nav = styled.nav`
//   /* Your CSS styles for the navigation */
// `;

// const NavLink = styled.a`
//   /* Your CSS styles for the navigation links */
// `;

export { HeaderContainer };
