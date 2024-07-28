import styled, { keyframes } from "styled-components";

const bounce = keyframes`
0%, 100% {
    transform: translateY(-25%);
    animation-timing-function: cubic-bezier(.8,0,1,1);
}
50% {
    transform: none;
    animation-timing-function: cubic-bezier(0,0,.2,1);
}
`;

const WelcomeContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.small};
  position: absolute;
  bottom: 24px;

  svg {
    animation: ${bounce} 1s infinite;
    fill: #525252;
  }

  @media (width <= ${({ theme }) => theme.breakpoints.smallTablet}) {
    svg {
      width: 15px;
      height: 15px;
    }
  }
`;

const WelcomeText = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 300;
  color: #525252;

  @media (width <= ${({ theme }) => theme.breakpoints.smallTablet}) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export { WelcomeContainer, WelcomeText };
