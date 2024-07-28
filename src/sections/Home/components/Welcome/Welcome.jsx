import { ArrowDown } from "../../../../assets/icons/arrow";
import { WelcomeContainer, WelcomeText } from "./Welcome.styles";

const Welcome = () => {
  return (
    <WelcomeContainer>
      <WelcomeText>👋 Hola, bienvenid@</WelcomeText>
      <ArrowDown />
    </WelcomeContainer>
  );
};

export default Welcome;
