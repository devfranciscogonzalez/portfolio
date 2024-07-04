import styled from "styled-components";

const BadgeContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 96px;

  gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.padding.small} 0;

  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text.tertiary};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacings.small};
  text-align: center;

`;

export { BadgeContainer };
