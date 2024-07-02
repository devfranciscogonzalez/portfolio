import styled from "styled-components";

const H1 = styled.h1`
  font-family: ${({ theme }) => theme.fonts.tertiary};
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  line-height: ${({ theme }) => theme.lineHeights.medium};
  font-weight: 600;
  /* letter-spacing: ${({ theme }) => theme.letterSpacings.large}; */
  /* text-decoration: underline; */
  /* color: ${({ theme }) => theme.colors.text.primary}; */
`;

const H2 = styled.h2`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  line-height: 1.3;
  font-weight: 600;
  /* color: ${({ theme }) => theme.colors.secondary}; */
`;

const H3 = styled.h3`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 300;
  letter-spacing: ${({ theme }) => theme.letterSpacings.small};
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.text.subPrimary};
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

export { H1, H2, H3, Paragraph, SmallText, MediumText };
