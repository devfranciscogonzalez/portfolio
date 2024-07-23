import { DownloadSvg, EmailSvg } from "../../assets/icons/button";
import { ActionButton, H1, H2 } from "../../components";
import { SOCIAL_LINKS } from "../../constants/socialLinks";
import { USER } from "../../constants/userInfo";
import { Section } from "../Section.styles";
import { HomeButtonWrapper } from "./Home.styles";

const Home = () => (
  <Section $variant="first" id="home">
    <H1>{USER.name}</H1>
    <H2>{USER.profession}</H2>
    <HomeButtonWrapper>
      <ActionButton
        isPrimary
        href={SOCIAL_LINKS.curriculum}
        icon={DownloadSvg}
        value="Descargar CV"
      />
      <ActionButton
        href={SOCIAL_LINKS.email}
        icon={EmailSvg}
        value="Correo Electrónico"
      />
    </HomeButtonWrapper>
  </Section>
);

export default Home;
