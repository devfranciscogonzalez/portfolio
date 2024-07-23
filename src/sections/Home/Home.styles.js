import styled from "styled-components";

const HomeButtonWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};

  margin-top: ${({ theme }) => theme.spacing.xlarge};

  @media (width <= ${({ theme }) => theme.breakpoints.mobile}) {
    gap: ${({ theme }) => theme.spacing.small};
  }
`;

export { HomeButtonWrapper };
