import styled from "styled-components";

const HeaderContainer = styled.header`
  position: fixed;
  inset: 0 0 auto 0;
  z-index: ${({ theme }) => theme.zIndex.fixed};
  &::before {
    content: "";
    position: absolute;
    height: ${({ theme }) => theme.spacing.large};
    inset: 0 0 auto 0;
    backdrop-filter: blur(5px);
  }
`;

const NavBarContainer = styled.section`
  display: flex;
  justify-content: center;
  padding: ${({ theme }) => theme.padding.medium}
    ${({ theme }) => theme.padding.large} 0;

  @media (width <= 768px) {
    padding: ${({ theme }) => theme.padding.small}
      ${({ theme }) => theme.padding.small} 0;
  }
`;

export { HeaderContainer, NavBarContainer };
