import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.laptop};
  margin-top: ${({ theme }) => theme.spacing.header};
  padding: 0 ${({ theme }) => theme.padding.large};

  @media (width <= ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 0 ${({ theme }) => theme.padding.medium};
  }
`;

const HrFooter = styled.hr`
  width: 100%;
  border-color: ${({ theme }) => theme.colors.utility.border};
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.padding.small};

  @media (width < ${({ theme }) => theme.breakpoints.smallTablet}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.small};
    padding: ${({ theme }) => theme.padding.small} 0;
  }
`;

const FooterWrapperSocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
`;

const FooterSpan = styled.span`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacings.small};
  text-align: center;

  svg {
    vertical-align: -7%;
  }
`;

export {
  FooterContainer,
  FooterWrapperSocialMedia,
  FooterSpan,
  HrFooter,
  FooterContent,
};
