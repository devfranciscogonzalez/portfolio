import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: ${({ theme }) => theme.zIndex.fixed};

  &::before {
    content: "";
    position: absolute;
    height: ${({ theme }) => theme.spacing.large};
    width: ${({ theme }) => theme.breakpoints.desktop};
    top: 0;
    left: ${({ theme }) => theme.spacing.large};
    backdrop-filter: blur(5px);
  }
`;

const NavBarContainer = styled.section`
  height: ${({ theme }) => theme.spacing.header};
  padding: 0 ${({ theme }) => theme.spacing.large};
  margin-top: ${({ theme }) => theme.spacing.large};
`;

export { HeaderContainer, NavBarContainer };
