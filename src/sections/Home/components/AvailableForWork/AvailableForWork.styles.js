import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(51, 217, 178, 0.7);
  }
  
  70% {
    box-shadow: 0 0 0 6px rgba(51, 217, 178, 0);
  }
  
  100% {
    box-shadow: 0 0 0 0 rgba(51, 217, 178, 0);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.padding.xsmall};
  border: 1px solid #33d9b2;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  opacity: 0.5;
`;

const PulsingDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #33d9b2;
  animation: ${pulse} 2s infinite;
`;

const Text = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  /* color: ${({ theme }) => theme.colors.text.tertiary}; */
  color: #33d9b2;
  text-align: center;
`;

export { Container, PulsingDot, Text };
