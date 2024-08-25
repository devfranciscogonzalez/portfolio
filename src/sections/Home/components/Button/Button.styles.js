import styled from "styled-components";

const AnchorButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.padding.medium};

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 400;
  text-align: center;
  text-decoration: none;

  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;

  transition: background-color 0.3s ease;

  @media (width <= ${({ theme }) => theme.breakpoints.smallTablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
    padding: ${({ theme }) => theme.padding.smallMedium};
    line-height: ${({ theme }) => theme.lineHeights.small};

    & svg {
      min-width: 20px;
      min-height: 20px;
    }
  }
`;

const PrimaryButton = styled(AnchorButton)`
  color: ${({ theme }) => theme.colors.text.secondary};
  background-color: ${({ theme }) => theme.colors.primary};
  width: 205px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.primary};
  }

  & svg {
    fill: ${({ theme }) => theme.colors.text.secondary};
  }
`;

const SecondaryButton = styled(AnchorButton)`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  outline: 1px solid ${({ theme }) => theme.colors.utility.border};
  width: 205px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.secondary};
  }

  & svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;

export { PrimaryButton, SecondaryButton };
