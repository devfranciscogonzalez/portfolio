import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  inset: 0 0 auto 0;
  z-index: ${({ theme }) => theme.zIndex.fixed};

  &::before {
    content: "";
    position: absolute;
    height: ${({ theme }) => theme.spacing.large};
    width: 100%;
    top: 0;
    left: 0;
    backdrop-filter: blur(5px);
  }
`;

const NavBarContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.spacing.xxlarge};
  padding: 0 ${({ theme }) => theme.padding.large};
  margin-top: ${({ theme }) => theme.spacing.medium};
`;

export { HeaderContainer, NavBarContainer };
