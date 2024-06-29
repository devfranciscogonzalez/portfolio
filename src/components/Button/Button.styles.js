import styled from "styled-components";

const AnchorButton = styled.a`
  display: inline-block;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-decoration: none;
  text-align: center;
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.large};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;

  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const PrimaryButton = styled(AnchorButton)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

const SecondaryButton = styled(AnchorButton)`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.primary};
  /* box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2); */
  border: 1px solid ${({ theme }) => theme.colors.primary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryHover};
  }
`;

export { PrimaryButton, SecondaryButton };
