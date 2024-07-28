import styled from "styled-components";

// TITULO PRINCIPAL MI NOMBRE
const H1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.tertiary};
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  font-weight: 600;

  @media (width <= ${({ theme }) => theme.breakpoints.smallTablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
  }
`;
// TITULO SECUNDARIO CARRERA
const H2 = styled.h2`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: 1.8rem;
  font-weight: 300;
  letter-spacing: ${({ theme }) => theme.letterSpacings.large};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.primary};

  @media (width <= ${({ theme }) => theme.breakpoints.smallTablet}) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    line-height: ${({ theme }) => theme.lineHeights.medium};
  }
`;

// TODOS LOS DE LAS SECTIONS Y CARDS
const H3 = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-weight: 700;
  text-decoration: underline;

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }
`;

// TITULO SECIONES DE LAS CARDS DE PROFILE
const H4 = styled.h4`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  letter-spacing: ${({ theme }) => theme.letterSpacings.small};
  font-weight: 500;
  text-transform: uppercase;

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.small};
    line-height: ${({ theme }) => theme.lineHeights.medium};
  }

  @media (width <= ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
    line-height: ${({ theme }) => theme.lineHeights.medium};
  }
`;

const SmallText = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 300;
`;

// EDUCACION GRID
const MediumText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 300;
  text-transform: uppercase;

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

const Paragraph = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 300;

  @media (width <= ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

const Strong = styled.strong`
  font-weight: 400;
`;

export { H1, H2, H3, H4, MediumText, Paragraph, SmallText, Strong };
