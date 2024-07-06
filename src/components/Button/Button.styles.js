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
  padding: ${({ theme }) => theme.spacing.small};
  border-radius: 50%;
  cursor: pointer;
`;

export { PrimaryButton, SecondaryButton, SocialMediaButton };
