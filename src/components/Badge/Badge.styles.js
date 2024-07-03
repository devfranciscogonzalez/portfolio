import styled from "styled-components";

const BadgeContainer = styled.span`
  display: inline-block;
  padding: ${({theme}) => theme.padding.xsmall} ${({theme}) => theme.padding.small};
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacings.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  outline: 1px solid ${({ theme }) => theme.colors.border};
`;

export { BadgeContainer };
