import SocialMedia from "../SocialMedia/SocialMedia";
import { Strong } from "../TextComponents/TextComponents";
import {
  FooterContainer,
  FooterWrapperSocialMedia,
  FooterSpan,
  HrFooter,
  FooterContent,
} from "./Footer.styles";
import { React } from "../../assets/icons/technologies";

const Footer = () => {
  return (
    <FooterContainer>
      <HrFooter />
      <FooterContent>
        <FooterSpan>
          Construido con <Strong $react>React</Strong>
          <React size="xsmall" /> y<Strong $styledcomponents> Styled-Components</Strong>💅
          | 2024
        </FooterSpan>
        <FooterWrapperSocialMedia>
          <SocialMedia />
        </FooterWrapperSocialMedia>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
