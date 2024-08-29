import { Download, Email } from "../../assets/icons/button";
import { H1, H2 } from "../../components";
import { SOCIAL_LINKS } from "../../constants/socialLinks";
import { USER } from "../../constants/userInfo";
import { Section } from "../Section.styles";
import { ActionButton, AvailableForWork } from "./components";
import Welcome from "./components/Welcome/Welcome";
import { HomeButtonWrapper, HomeUserWrapper } from "./Home.styles";

const Home = () => {
  const { name, profession } = USER;
  const { curriculum, email } = SOCIAL_LINKS;
  return (
    <Section $variant="first" id="home">
      <HomeUserWrapper>
        <AvailableForWork />
        <H1>{name}</H1>
        <H2>{profession}</H2>
      </HomeUserWrapper>
      <HomeButtonWrapper>
        <ActionButton
          isPrimary
          href={curriculum}
          icon={Download}
          value="Descargar CV"
        />
        <ActionButton href={email} icon={Email} value="Correo Electrónico" />
      </HomeButtonWrapper>
      <Welcome />
    </Section>
  );
};

export default Home;
