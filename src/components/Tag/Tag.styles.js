import styled from "styled-components";

const TagSpan = styled.span`
  display: inline-block;
  padding: ${({ theme }) => theme.padding.small};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  border: 1px solid ${({ theme }) => theme.colors.tertiary};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-family: ${({ theme }) => theme.fonts.secondary};
  text-transform: uppercase;
`;

export { TagSpan };
