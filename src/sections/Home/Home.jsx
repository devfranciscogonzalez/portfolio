import { Download, Email } from "../../assets/icons/button";
import { H1, H2 } from "../../components";
import { SOCIAL_LINKS } from "../../constants/socialLinks";
import { USER } from "../../constants/userInfo";
import { Section } from "../Section.styles";
import { ActionButton, AvailableForWork } from "./components";
import { HomeButtonWrapper, HomeUserWrapper } from "./Home.styles";

const Home = () => (
  <Section $variant="first" id="home">
    <HomeUserWrapper>
      <AvailableForWork />
      <H1>{USER.name}</H1>
      <H2>{USER.profession}</H2>
    </HomeUserWrapper>
    <HomeButtonWrapper>
      <ActionButton
        isPrimary
        href={SOCIAL_LINKS.curriculum}
        icon={Download}
        value="Descargar CV"
      />
      <ActionButton
        href={SOCIAL_LINKS.email}
        icon={Email}
        value="Correo Electrónico"
      />
    </HomeButtonWrapper>
  </Section>
);

export default Home;
