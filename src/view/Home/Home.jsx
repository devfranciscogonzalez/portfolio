import { DownloadSvg, EmailSvg } from "../../assets/icon/button";
import { ActionButton, H1, H2 } from "../../components";
import { SOCIAL_LINKS } from "../../constants/socialLinks";
import { USER } from "../../constants/userInfo";
import { HomeButtonWrapper, HomeHero } from "./Home.styles";

const Home = () => {
  return (
    <HomeHero>
      <H1>{USER.name}</H1>
      <H2>{USER.profession}</H2>
      <HomeButtonWrapper>
        <ActionButton
          href={SOCIAL_LINKS.curriculum}
          icon={DownloadSvg}
          isPrimary
          value="Descargar CV"
        />
        <ActionButton
          href={SOCIAL_LINKS.email}
          icon={EmailSvg}
          value="Correo Electrónico"
        />
      </HomeButtonWrapper>
    </HomeHero>
  );
};

export default Home;
