import styled from "styled-components";

const CardContainer = styled.article`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.hover.secondary};
  width: 100%;

  & img {
    filter: grayscale(100%);
    transition: filter 0.3s ease;
  }

  &:hover img {
    filter: grayscale(0%);
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
  }
`;

const CardHeader = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.tertiary};

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    text-align: center;
  }
`;

const CardContentLeft = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.padding.large} 0;
  padding-left: ${({ theme }) => theme.padding.medium};
`;

const CardContentRight = styled.section`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  /* gap: ${({ theme }) => theme.spacing.medium}; */
  min-width: 350px;
  border-radius: 0 ${({ theme }) => theme.borderRadius.medium}
  ${({ theme }) => theme.borderRadius.medium} 0;
  overflow: hidden;

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    order: 2;
    width: 100%;
  }
`;

const CardLogoAnchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
`;

const CardLogoImg = styled.img`
  width: 350px;
  aspect-ratio: 2962 / 2371;
`;

export {
  CardContainer,
  CardContentLeft,
  CardContentRight,
  CardHeader,
  CardLogoAnchor,
  CardLogoImg,
};
