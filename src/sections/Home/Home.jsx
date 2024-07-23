import { ActionButton, H1, H2 } from "../../components";
import { HomeButtonWrapper, HomeHero } from "./Home.styles";
import { Section } from "../Section.styles";
import { DownloadSvg, EmailSvg } from "../../assets/icons/button";
import { SOCIAL_LINKS } from "../../constants/socialLinks";
import { USER } from "../../constants/userInfo";

const Home = () => (
  <Section $variant="center" id="home">
    <HomeHero>
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
    </HomeHero>
  </Section>
);

export default Home;
