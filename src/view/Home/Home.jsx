import { H1, H3, PrimaryButton, SecondaryButton } from "../../components";
import { HomeContainer, HomeButtonContainer } from "./Home.styles";
import { EmailSvg, DownloadSvg } from "../../assets/icon";
const Home = () => {
  return (
    <HomeContainer>
      <H1>Francisco Miguel González Placencia</H1>
      <H3>Ingeniero Civil Informático</H3>

      <HomeButtonContainer>
        <PrimaryButton
          href="/path/to/CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DownloadSvg />
          Descargar CV
        </PrimaryButton>
        <SecondaryButton
          href="https://www.linkedin.com/in/tu-perfil"
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
