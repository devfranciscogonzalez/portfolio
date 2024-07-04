import { DownloadSvg, EmailSvg } from "../../assets/icon";
import { H1, H2, PrimaryButton, SecondaryButton } from "../../components";
import SOCIAL_LINKS from "../../constants/socialLinks";
import { HomeButtonContainer, HomeContainer } from "./Home.styles";

const Home = () => {
  return (
    <HomeContainer>
      <H1>Francisco Miguel González Placencia</H1>
      <H2>Ingeniero Civil Informático</H2>
      <HomeButtonContainer>
        <PrimaryButton
          href={SOCIAL_LINKS.curriculum}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DownloadSvg />
          Descargar CV
        </PrimaryButton>
        <SecondaryButton
          href={SOCIAL_LINKS.email}
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailSvg />
          Correo Electrónico
        </SecondaryButton>
      </HomeButtonContainer>
    </HomeContainer>
  );
};

export default Home;
