import SocialMedia from "../SocialMedia/SocialMedia";
import {
  FooterContainer,
  FooterWrapperSocialMedia,
  FooterSpan,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSpan>Francisco Miguel Gonzalez Placencia | 2024</FooterSpan>
      <FooterWrapperSocialMedia>
        <SocialMedia />
      </FooterWrapperSocialMedia>
    </FooterContainer>
  );
};

export default Footer;
