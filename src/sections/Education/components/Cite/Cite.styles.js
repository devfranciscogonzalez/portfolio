import styled from "styled-components";

const Blockquote = styled.blockquote`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-style: italic;
  font-weight: 300;

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.small};
  }
`;

const CiteText = styled.a`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 300;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text.primary};

  cursor: pointer;
  &:hover {
    color: #0040b0;
  }

  @media (width <= ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
  }
`;

export { Blockquote, CiteText };
