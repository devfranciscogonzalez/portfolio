import styled from 'styled-components';

const Button = styled.button`
  padding: ${({ theme }) => theme.spacing.medium} ${({ theme }) => theme.spacing.large};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textOnPrimary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

const SecondaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.textOnSecondary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryHover};
  }
`;

export { PrimaryButton, SecondaryButton };
