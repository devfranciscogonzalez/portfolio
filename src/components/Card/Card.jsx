import { H2, Paragraph } from "../TextComponents/TextComponents";
import {
  CardContainer,
  CardContent,
  CardFooter,
  CardHeader,
  CardContentLeft,
  CardContentRight,
} from "./Card.styles";
import lorem from "../../assets/images/lorem.jpg";
const Card = () => {
  return (
    <CardContainer>
      <CardHeader>
        <H2>Perfil</H2>
      </CardHeader>
      <CardContent>
        <CardContentLeft>
          <Paragraph>
            Conocimientos sólidos en HTML, CSS, JavaScript y React. Manejo de
            sistema de control de versiones Git y de alojamiento de repositorios
            Github . Proactivo, trabajo en equipo, liderazgo, búsqueda de
            soluciones de alta calidad.
          </Paragraph>
        </CardContentLeft>
        <CardContentRight>
          <img src={lorem} alt="lorem" />
        </CardContentRight>
      </CardContent>
      <CardFooter>
        <Paragraph>Soy el Footer</Paragraph>
      </CardFooter>
    </CardContainer>
  );
};

export default Card;
