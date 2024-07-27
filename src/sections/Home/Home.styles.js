import styled from "styled-components";

const HomeUserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.small};
  
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

  @media (width <= ${({ theme }) => theme.breakpoints.smallTablet}) {
    gap: ${({ theme }) => theme.spacing.small};
    justify-content: center;
    width: 100%;
  }
`;

export { HomeButtonWrapper, HomeUserWrapper };
