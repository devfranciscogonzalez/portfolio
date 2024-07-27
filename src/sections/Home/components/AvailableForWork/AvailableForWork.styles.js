import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgb(76, 175, 80, 0.7);
  }
  
  70% {
    box-shadow: 0 0 0 6px rgb(51, 217, 178, 0);
  }
  
  100% {
    box-shadow: 0 0 0 0 rgb(51, 217, 178, 0);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
`;

const PulsingDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  animation: ${pulse} 2s infinite;
  background-color: rgb(76, 175, 80);
`;

const Text = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.text.tertiary};
`;

export { Container, PulsingDot, Text };
