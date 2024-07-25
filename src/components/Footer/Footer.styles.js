import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.laptop};
  padding: 0 ${({ theme }) => theme.padding.large};

  text-align: center;
`;

const HrFooter = styled.hr`
  width: 100%;
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.utility.border};
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.padding.medium} 0;

  @media (width < ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.small};
  }
`;

const FooterWrapperSocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterSpan = styled.span`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: ${({ theme }) => theme.letterSpacings.small};
  text-align: center;
`;

export {
  FooterContainer,
  FooterWrapperSocialMedia,
  FooterSpan,
  HrFooter,
  FooterContent,
};
