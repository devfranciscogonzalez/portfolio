import { HomeContainer } from "./Home.styles";
import { H1, Paragraph, SmallText, MediumText } from "../../components";

const Home = () => {
  return (
    <HomeContainer>
      <H1>Francisco Miguel Gonzalez Placencia</H1>
      <MediumText>Ingeniero Civil Informático</MediumText>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt assumenda
        tenetur tempore qui nulla adipisci dolore maiores voluptas vel nihil
        iure minima aliquid magni consequuntur incidunt, eum minus corporis
        totam! 0123
      </Paragraph>
      <SmallText>Prueba soy un texto nuevo 0</SmallText>
    </HomeContainer>
  );
};

export default Home;
