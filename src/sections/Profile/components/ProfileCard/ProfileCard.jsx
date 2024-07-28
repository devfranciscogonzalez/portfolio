import PropTypes from "prop-types";
import { H3, H4, Paragraph, Strong } from "../../../../components";
import { PROFILE_TEXT } from "../../../../constants/profileText";
import Tag from "../Tag/Tag";
import {
  CardContainer,
  CardContent,
  CardContentLeft,
  CardContentRight,
  CardHeader,
  SectionWrapper,
  TagGroup,
} from "./ProfileCard.styles";

const ProfileCard = ({ children }) => {
  const { title, knowledge, technicalSkills, mindset, acknowledgments } =
    PROFILE_TEXT;

  return (
    <CardContainer>
      <CardHeader>
        <H3>{title}</H3>
      </CardHeader>
      <CardContent>
        <CardContentLeft>{children}</CardContentLeft>
        <CardContentRight>
          <SectionWrapper>
            <H4>{knowledge.title}</H4>
            <Paragraph>
              Profesional con una sólida
              <Strong> formación científica </Strong> y
              <Strong> práctica en computación</Strong>,
              <Strong> informática</Strong> y <Strong> gestión</Strong> 🧑‍💻
            </Paragraph>
            <Paragraph>{knowledge.additionalInfo}</Paragraph>
            {knowledge.education && (
              <TagGroup>
                {knowledge.education.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </TagGroup>
            )}
          </SectionWrapper>
          <SectionWrapper>
            <H4>{technicalSkills.title}</H4>
            <Paragraph>
              En mi búsqueda por <Strong>proponer</Strong> y{" "}
              <Strong>desarrollar soluciones tecnológicas</Strong> 🤖, he
              adquirido experiencia en:
            </Paragraph>
            {technicalSkills.items && (
              <TagGroup>
                {technicalSkills.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </TagGroup>
            )}
          </SectionWrapper>
          <SectionWrapper>
            <H4>{mindset.title}</H4>
            <Paragraph>
              Enfocada en la <Strong>disciplina</Strong> y{" "}
              <Strong>dedicación</Strong> 📚, disfruto de mantenerme en un{" "}
              <Strong>estado constante de aprendizaje</Strong> 📖. Estoy siempre
              abierto a recibir <Strong>retroalimentación</Strong> y{" "}
              <Strong>enfrentar</Strong> nuevos desafíos 🚀
            </Paragraph>
          </SectionWrapper>
          <SectionWrapper>
            <H4>{acknowledgments.title}</H4>
            <Paragraph>
              Gracias por visitar mi perfil 🌟 ¡Estoy entusiasmado con la
              posibilidad de colaborar contigo! 🤝
            </Paragraph>
          </SectionWrapper>
          <br />
        </CardContentRight>
      </CardContent>
    </CardContainer>
  );
};

ProfileCard.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProfileCard;
