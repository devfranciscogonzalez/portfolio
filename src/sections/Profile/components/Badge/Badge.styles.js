import styled from "styled-components";

const BadgeContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};

  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-weight: 300;

  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacings.small};
  text-align: center;

  @media (width <= ${({ theme }) => theme.breakpoints.smallMobile}) {
    min-width: 40%;
    justify-content: center;
    margin-top: ${({ theme }) => theme.spacing.small};
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
  }
`;

export { BadgeContainer };
