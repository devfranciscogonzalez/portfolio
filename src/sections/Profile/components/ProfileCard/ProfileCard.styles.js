import styled from "styled-components";

const CardContainer = styled.section`
  display: flex;
  flex-direction: column;

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
`;

const CardContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.medium};

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const CardContentLeft = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 47%;
  min-width: 393px;
  gap: ${({ theme }) => theme.spacing.xxlarge};

  @media (width<= ${({ theme }) => theme.breakpoints.tablet}) {
    width: 100%;
    min-width: auto;
    gap: ${({ theme }) => theme.spacing.medium};
  }
`;

const CardContentRight = styled.article`
  display: flex;
  flex-direction: column;
  width: 53%;
  height: 344px;
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
  gap: ${({ theme }) => theme.spacing.xsmall};
  flex-wrap: wrap;
`;

export {
  CardContainer,
  CardContent,
  CardContentLeft,
  CardContentRight,
  SectionWrapper,
  TagGroup,
};
