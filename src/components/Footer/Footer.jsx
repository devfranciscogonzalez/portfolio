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
        <FooterSpan>Francisco Miguel Gonzalez Placencia | 2024</FooterSpan>
        <FooterWrapperSocialMedia>
          <SocialMedia />
        </FooterWrapperSocialMedia>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
