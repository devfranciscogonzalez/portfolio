import styled from "styled-components";

const AnchorButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  padding: ${({ theme }) => theme.spacing.medium};

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 400;
  text-align: center;
  text-decoration: none;

  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;

  transition: background-color 0.3s ease;

  @media (width <= ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes.small};
    padding: ${({ theme }) => theme.spacing.smallMedium};
  }
`;

const PrimaryButton = styled(AnchorButton)`
  color: ${({ theme }) => theme.colors.text.secondary};
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

const SecondaryButton = styled(AnchorButton)`
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  outline: 1px solid ${({ theme }) => theme.colors.border.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryHover};
  }
`;

const SocialMediaButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  transform: scale(1);
  transition: transform 0.3s ease, background-color 0.3s ease, fill 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.colors.secondaryHover};
  }
  & svg:hover {
    fill: ${({ theme }) => theme.colors.text.secondaryHover};
  }
`;

export { PrimaryButton, SecondaryButton, SocialMediaButton };
