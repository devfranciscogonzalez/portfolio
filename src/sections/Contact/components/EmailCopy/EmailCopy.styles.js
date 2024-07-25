import styled from "styled-components";

const EmailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.secondary};
`;

const EmailOutline = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  outline: 1px solid ${({ theme }) => theme.colors.utility.border};
  text-align: center;
  width: 100%;
  border-radius: ${({ theme }) => theme.spacing.small};
`;

const EmailText = styled.a`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.primary};
  flex-grow: 1;
  cursor: pointer;

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

  padding: ${({ theme }) => theme.padding.medium};

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-align: center;
  text-decoration: none;

  border: none;
  cursor: pointer;

  background-color: ${({ theme }) => theme.colors.hover.secondary};

  & svg {
    fill: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    opacity: 0.7;
  }
`;

const CopyButtonSecondary = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xsmall};
  padding: ${({ theme }) => theme.padding.medium};

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-align: center;
  text-decoration: none;

  background-color: ${({ theme }) => theme.colors.hover.secondary};
  cursor: pointer;
  border: none;

  color: ${({ theme }) => theme.colors.text.primary};

  & svg {
    fill: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    opacity: 0.7;
  }
`;
const CopyButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  EmailContainer,
  EmailText,
  CopyButtonPrimary,
  CopyButtonSecondary,
  CopyButtonWrapper,
  EmailOutline,
};
