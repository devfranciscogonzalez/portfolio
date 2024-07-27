import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  /* 0% {
    box-shadow: 0 0 0 0 rgb(76, 175, 80, 0.7);
  }
  
  70% {
    box-shadow: 0 0 0 6px rgb(51, 217, 178, 0);
  }
  
  100% {
    box-shadow: 0 0 0 0 rgb(51, 217, 178, 0);
  } */
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
`;

const PulsingDot = styled.div`
  width: 16px;
  height: 16px;

  border-radius: 50%;
  animation: ${pulse} 2s infinite;
  background-color: rgb(76, 175, 80);

  @media (width <= ${({ theme }) => theme.breakpoints.mobile}) {
    width: 8px;
    height: 8px;
  }
`;

const Text = styled.span`
  height: 16px;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-transform: uppercase;

  color: rgb(76, 175, 80);

  @media (width <= ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export { Container, PulsingDot, Text };
