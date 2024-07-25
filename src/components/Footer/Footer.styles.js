import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.medium};
  width: 100%;
  max-width: ${({ theme }) => theme.breakpoints.laptop};
  padding: ${({ theme }) => theme.padding.large};

  text-align: center;
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

export { FooterContainer, FooterWrapperSocialMedia, FooterSpan };
