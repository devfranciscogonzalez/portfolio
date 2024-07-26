import { Download, Email } from "../../assets/icons/button";
import logo from "../../assets/logo/logo.svg";
import { ActionButton, H1, H2 } from "../../components";
import { SOCIAL_LINKS } from "../../constants/socialLinks";
import { USER } from "../../constants/userInfo";
import { Section } from "../Section.styles";
import AvailableForWork from "./components/AvailableForWork/AvailableForWork";
import { HomeButtonWrapper } from "./Home.styles";

const Home = () => (
  <Section $variant="center" id="home">
    <div style={{ width: "60%" }}>
      <AvailableForWork />
      <H1>{USER.name}</H1>
      <H2>{USER.profession}</H2>
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
    </div>
    <div
      style={{
        width: "50%",
        justifyContent: "flex-end",
        display: "flex",
        opacity: "0.3",
      }}
    >
      <img src={logo} alt="Logo" style={{ opacity: "0.2", height: "1000px" }} />
    </div>
  </Section>
);

export default Home;
