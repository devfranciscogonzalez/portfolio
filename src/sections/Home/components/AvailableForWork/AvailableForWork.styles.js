import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgb(46, 125, 89, 0.7);
  }
  
  70% {
    box-shadow: 0 0 0 4px rgb(46, 125, 89, 0);
  }
  
  100% {
    box-shadow: 0 0 0 0 rgb(46, 125, 89, 0);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;

  gap: ${({ theme }) => theme.spacing.small};
`;

const PulsingDot = styled.div`
  display: inline;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  animation: ${pulse} 2s infinite;
  background-color: rgb(46 125 89);

  @media (width <= ${({ theme }) => theme.breakpoints.mobile}) {
    width: 10px;
    height: 10px;
  }
`;

const Text = styled.span`
  height: 16px;

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-transform: uppercase;

  color: rgb(46 125 89);

  @media (width <= ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

export { Container, PulsingDot, Text };
