import styled from "styled-components";

const AnchorButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.small};

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-decoration: none;
  text-align: center;
  height: ${({ theme }) => theme.spacing.xxlarge};
  font-weight:400;

  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;

  transition: background-color 0.3s ease;


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
  outline: 1px solid ${({ theme }) => theme.colors.primary};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryHover};
  }
`;

export { PrimaryButton, SecondaryButton };
