import styled from "styled-components";

// TITULO PRINCIPAL MI NOMBRE
const H1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.tertiary};
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  font-weight: 600;
  line-height: ${({ theme }) => theme.lineHeights.medium};

  @media (width <= ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.xlarge};
  }
`;
// TITULO SECUNDARIO CARRERA
const H2 = styled.h2`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 300;
  letter-spacing: ${({ theme }) => theme.letterSpacings.small};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.subPrimary};

  @media (width <= ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

// TITULO SECTIONS Y CARDS
const H3 = styled.h3`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-weight: 500;
  /* line-height: 1.3; */
  text-decoration: underline;
`;

// TITULO SECIONES DE LAS CARDS
const H4 = styled.h4`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  /* letter-spacing: ${({ theme }) => theme.letterSpacings.small}; */
  /* text-transform: uppercase; */
  font-weight: 500;
  padding-bottom: ${({ theme }) => theme.spacing.medium};
`;

const Paragraph = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 300;
  line-height: 1.6;
  /* color: ${({ theme }) => theme.colors.text}; */
`;

const SmallText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-family: ${({ theme }) => theme.fonts.secondary};
  line-height: 1.4;
  margin: 0.5em 0;
  /* color: ${({ theme }) => theme.colors.text}; */
`;

const MediumText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fonts.primary};
  line-height: 1.4;
  margin: 0.5em 0;
  /* color: ${({ theme }) => theme.colors.text}; */
`;

export { H1, H2, H3, H4, Paragraph, SmallText, MediumText };
