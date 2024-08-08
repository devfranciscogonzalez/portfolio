import styled from "styled-components";

const CardContainer = styled.article`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.padding.large} ${({ theme }) => theme.padding.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.hover.secondary};

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const CardContentLeft = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
  min-width: 220px;
  
  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    order: 2;
    width: 100%;
  }
`;

const CardContentRight = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`;


export { CardContainer, CardContentLeft, CardContentRight };