import styled from "styled-components";

const Blockquote = styled.blockquote`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-style: italic;
  font-weight: 300;
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
`;

export { Blockquote, CiteText };
