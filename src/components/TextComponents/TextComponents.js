import styled from "styled-components";

const H1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  font-family: ${({ theme }) => theme.fonts.tertiary};
  line-height: 1.3em;
  text-decoration: underline;
  /* color: ${({ theme }) => theme.colors.text.primary}; */
`;

const H2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-family: ${({ theme }) => theme.fonts.secondary};
  line-height: 1.3;
  font-weight: 300;
  /* color: ${({ theme }) => theme.colors.secondary}; */
`;

const H3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-family: ${({ theme }) => theme.fonts.primary};
  line-height: 1.4;
  margin: 0.5em 0;
  /* color: ${({ theme }) => theme.colors.tertiary}; */
`;

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-family: ${({ theme }) => theme.fonts.primary};
  line-height: 1.5;
  margin: 1em 0;
  color: ${({ theme }) => theme.colors.text};
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
  font-family: ${({ theme }) => theme.fonts.secondary};
  line-height: 1.4;
  margin: 0.5em 0;
  /* color: ${({ theme }) => theme.colors.text}; */
`;

export { H1, H2, H3, Paragraph, SmallText, MediumText };
