import styled from "styled-components";
import { logoUbbColor } from "../../../../assets/images";

const CardContainer = styled.article`
  display: flex;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.padding.large}  ${({ theme }) => theme.padding.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.hover.secondary};

  &:hover img {
    content: url(${logoUbbColor});
  }

  &:hover #cite {
    color: #0040b0;
    text-decoration: underline;
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

const CardContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 220px;
  gap: ${({ theme }) => theme.spacing.medium};

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    order: 2;
    width: 100%;
  }
`;

const CardContentRight = styled.div`
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
`;

const CardLogoImg = styled.img`
  width: 180px;
  height: 119px;
`;

const EducationButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
`;

const EducationButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 36px;
  gap: ${({ theme }) => theme.spacing.xsmall};
  padding: ${({ theme }) => theme.padding.xsmall};

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  text-align: center;
  text-decoration: none;

  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  outline: 1px solid ${({ theme }) => theme.colors.utility.border};

  color: ${({ theme }) => theme.colors.text.primary};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.secondary};
  }
  
  @media (width <= ${({ theme }) => theme.breakpoints.smallMobile}) {
    line-height: ${({ theme }) => theme.lineHeights.xsmall};
  }
`;

export {
  CardContainer,
  CardContentLeft,
  CardContentRight,
  CardHeader,
  CardLogoAnchor,
  CardLogoImg,
  EducationButton,
  EducationButtonWrapper,
};
