import styled from "styled-components";

const EmailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.primary};
  outline: 1px solid ${({ theme }) => theme.colors.utility.border};

  background-color: ${({ theme }) => theme.colors.secondary};
`;

const EmailText = styled.a`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 300;
  
  cursor: pointer;

  padding: ${({ theme }) => theme.padding.medium};

  &:hover {
    color: ${({ theme }) => theme.colors.hover.primary};
    text-decoration: underline;
  }
`;

const CopyButtonPrimary = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xsmall};

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-align: center;
  text-decoration: none;

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;

  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  outline: 1px solid ${({ theme }) => theme.colors.utility.border};
  transition: color 0.3s ease, background-color 0.3s ease;
`;

const CopyButtonSecondary = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xsmall};

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-align: center;
  text-decoration: none;

  background-color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
  border: none;

  color: ${({ theme }) => theme.colors.text.primary};
`;
const CopyButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.small};
  background-color: ${({ theme }) => theme.colors.hover.secondary};
`;

export {
  EmailContainer,
  EmailText,
  CopyButtonPrimary,
  CopyButtonSecondary,
  CopyButtonWrapper,
};
