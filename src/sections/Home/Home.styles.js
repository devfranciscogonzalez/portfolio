import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateX(20px);
    filter: blur(4px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
    filter: blur(0);
  }
`;

const HomeUserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.small};

  & > :first-child {
    animation: ${slideUp} 0.8s ease;
  }
  & > :last-child {
    animation: ${slideUp} 0.8s ease;
  }

  @media (width <= ${({ theme }) => theme.breakpoints.smallTablet}) {
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

const HomeButtonWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  margin-top: ${({ theme }) => theme.spacing.xlarge};
  animation: ${slideUp} 0.8s ease;

  @media (width <= ${({ theme }) => theme.breakpoints.smallTablet}) {
    gap: ${({ theme }) => theme.spacing.small};
    justify-content: center;
    width: 100%;
  }
`;

export { HomeButtonWrapper, HomeUserWrapper };
