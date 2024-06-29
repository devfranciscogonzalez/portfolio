import styled from "styled-components";

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: start;
`;

const HomeButtonContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing.large};
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
`;

export { HomeContainer, HomeButtonContainer };
