import SocialMedia from "../SocialMedia/SocialMedia";
import {
  FooterContainer,
  FooterWrapperSocialMedia,
  FooterSpan,
  HrFooter,
  FooterContent,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <HrFooter />
      <FooterContent>
        <FooterSpan>Construido con React y Styled-Components | 2024</FooterSpan>
        <FooterWrapperSocialMedia>
          <SocialMedia />
        </FooterWrapperSocialMedia>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
