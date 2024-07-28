import styled from "styled-components";

const TagSpan = styled.span`
  display: inline-block;
  
  padding: ${({ theme }) => theme.padding.xsmall} ${({ theme }) => theme.padding.small};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  border-radius: ${({ theme }) => theme.borderRadius.small};

  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacings.small};
`;

export { TagSpan };
