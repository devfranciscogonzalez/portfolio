import styled from "styled-components";

const CardContainer = styled.article`
  display: flex;
  flex-direction: column;
  /* padding: ${({ theme }) => theme.padding.large}; */
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text.primary};

  & img {
    filter: grayscale(100%);
    transition: filter 0.3s ease;
  }

  &:hover img {
    filter: grayscale(0%);
  }

  & svg path {
    fill: ${({ theme }) => theme.colors.primary};
    transition: fill 0.3s ease;
  }

  &:hover svg path {
    fill: inherit;
  }

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.padding.medium};
  }
`;

const CardHeader = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

const CardContent = styled.article`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xlarge};

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const CardContentLeft = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 45%;
  min-width: 393px;
  gap: ${({ theme }) => theme.spacing.xxlarge};

  @media (width<= ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    min-width: auto;
    gap: ${({ theme }) => theme.spacing.medium};
  }
`;

const CardContentRight = styled.section`
  width: 55%;
  height: 344px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xlarge};
  overflow-y: auto;

  /* Estilos personalizados para el scrollbar */
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.tertiary};
    border-radius: ${({ theme }) => theme.borderRadius.medium};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.colors.tertiary};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.colors.hover.primary};
  }
  /*     
  scrollbar-color: ${({ theme }) => theme.colors.primary} ${({ theme }) =>
    theme.colors.secondary};
  scrollbar-width: thin; */

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
  }
`;


const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
  margin-right: ${({ theme }) => theme.spacing.medium};

  & h4 {
    border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};
  }
`;

const TagGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
  flex-wrap: wrap;
`;

export {
  CardContainer, CardContent, CardContentLeft,
  CardContentRight, CardHeader, SectionWrapper, TagGroup
};

