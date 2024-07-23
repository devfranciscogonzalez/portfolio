import styled from "styled-components";
import { logoUbbColor } from "../../../../assets/images";

const CardContainer = styled.article`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.padding.large} ${({ theme }) => theme.padding.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
  background-color: ${({ theme }) => theme.colors.primary};

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
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
  width: 100%;
  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    order: 2;
  }
`;

const CardContentRight = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const CardLogoAnchor = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 119px;

  &:hover img {
    content: url(${logoUbbColor});
  }
`;

const CardLogoImg = styled.img`
  width: 180px;
  height: 119px;
`;

export {
  CardContainer,
  CardContentLeft,
  CardContentRight,
  CardHeader,
  CardLogoAnchor,
  CardLogoImg,
};
