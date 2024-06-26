import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  position: sticky;
  top: ${({ theme }) => theme.spacing.medium};
  z-index: ${({ theme }) => theme.zIndex.sticky};
`;

const NavBarContainer = styled.div`
  height: ${({ theme }) => theme.spacing.header};
`;

export { HeaderContainer, NavBarContainer };
