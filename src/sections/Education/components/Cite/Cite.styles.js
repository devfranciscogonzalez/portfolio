import styled from "styled-components";

const Blockquote = styled.blockquote`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-style: italic;
  font-weight: 300;

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.small};
    line-height: ${({ theme }) => theme.lineHeights.medium};
  }
`;

const CiteText = styled.a`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text.primary};

  cursor: pointer;

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
    line-height: ${({ theme }) => theme.lineHeights.medium};
  }
`;

export { Blockquote, CiteText };
