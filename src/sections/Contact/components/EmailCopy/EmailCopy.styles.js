import styled from "styled-components";

const EmailContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

const EmailOutline = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  outline: 1px solid ${({ theme }) => theme.colors.utility.border};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  text-align: center;
`;

const EmailText = styled.button`
  flex-grow: 1;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 300;

  padding: 0 ${({ theme }) => theme.padding.xsmall};

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

  padding: ${({ theme }) => theme.padding.smallMedium};

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-align: center;
  text-decoration: none;

  border: none;
  cursor: pointer;

  background-color: transparent;

  & svg {
    fill: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.secondary};
  }

  @media (width <= ${({ theme }) => theme.breakpoints.smallTablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
    padding: ${({ theme }) => theme.padding.smallMedium};

    & svg {
      min-width: 20px;
      min-height: 20px;
    }
  }
`;

const CopyButtonSecondary = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xsmall};
  padding: ${({ theme }) => theme.padding.smallMedium};

  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.small};
  text-align: center;
  text-decoration: none;

  cursor: pointer;
  border: none;

  color: ${({ theme }) => theme.colors.text.primary};

  & svg {
    fill: ${({ theme }) => theme.colors.primary};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.hover.secondary};
  }

  @media (width <= ${({ theme }) => theme.breakpoints.smallTablet}) {
    font-size: ${({ theme }) => theme.fontSizes.xsmall};
    padding: ${({ theme }) => theme.padding.smallMedium};

    & svg {
      min-width: 20px;
      min-height: 20px;
    }
  }
`;

const CopyButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${({ theme }) => theme.padding.xsmall};

  @media (width <= ${({ theme }) => theme.breakpoints.smallTablet}) {
    padding: 0;
  }
`;

export {
  EmailContainer,
  EmailText,
  CopyButtonPrimary,
  CopyButtonSecondary,
  CopyButtonWrapper,
  EmailOutline,
};
