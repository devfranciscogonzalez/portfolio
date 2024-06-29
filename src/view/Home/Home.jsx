import { H1, H2, PrimaryButton, SecondaryButton } from "../../components";
import { HomeContainer } from "./Home.styles";

const Home = () => {
  return (
    <HomeContainer>
      <H1>Francisco Miguel González Placencia</H1>
      <H2>Ingeniero Civil Informático</H2>
      <br />
      <PrimaryButton onClick={() => (window.location.href = "/path/to/CV.pdf")}>
        Descargar CV
      </PrimaryButton>
      <SecondaryButton
        onClick={() => (window.location.href = "/path/to/Contact")}
      >
        {" "}
        Contacto{" "}
      </SecondaryButton>
    </HomeContainer>
  );
};

export default Home;
