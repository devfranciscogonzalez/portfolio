import PropTypes from "prop-types";
import { PROFILE_TEXT } from "../../constants/portfolioText";
import { H3, H4, Paragraph } from "../TextComponents/TextComponents";
import {
  CardContainer,
  CardContainerSkills,
  CardContent,
  CardContentLeft,
  CardContentRight,
  // CardFooter,
  CardHeader,
  TagGroup,
} from "./Card.styles";
import Tag from "../Tag/Tag";

const Card = ({ children }) => {
  return (
    <CardContainer>
      <CardHeader>
        <H3>{PROFILE_TEXT.title}</H3>
      </CardHeader>
      <CardContent>
        <CardContentLeft>{children}</CardContentLeft>
        <CardContentRight>
          <H4>Conociminetos</H4>
          <Paragraph>
            Soy un profesional con una sólida formación científica y práctica en
            computación, informática y gestión. Mi educación abarca:
          </Paragraph>
          <TagGroup>
            {PROFILE_TEXT.conocimiento.formacion.map((item, index) => (
              <Tag key={index}>{item}</Tag>
            ))}
          </TagGroup>
          <br />
          <H4>Motivacion</H4>
          <Paragraph>Mi motivación se centra en:</Paragraph>
          <ul style={{ marginLeft: "30px" }}>
            <li>{PROFILE_TEXT.motivacion.estabilidad}</li>
            <li>{PROFILE_TEXT.motivacion.mejorasTecnologicas}</li>
            <li>{PROFILE_TEXT.motivacion.solucionarProblemas}</li>
            <li>{PROFILE_TEXT.motivacion.crearProductos}</li>
          </ul>
          <br />
          <H4>Mentalidad</H4>
          <Paragraph>{PROFILE_TEXT.mentalidad}</Paragraph>
          <br />
          <H4>Frases que me definen</H4>
          <ul style={{ marginLeft: "30px" }}>
            {PROFILE_TEXT.frasesQueMeDefinen.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <br />
          <H4>Objetivos</H4>
          <ul style={{ marginLeft: "30px" }}>
            {PROFILE_TEXT.objetivos.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <br />
          <H4>Estrategia</H4>
          <ul style={{ marginLeft: "30px" }}>
            {PROFILE_TEXT.estrategia.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <br />
          <CardContainerSkills></CardContainerSkills>
        </CardContentRight>
      </CardContent>

      {/* <CardFooter>
        <Paragraph>Soy el Footer</Paragraph>
      </CardFooter> */}
    </CardContainer>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
