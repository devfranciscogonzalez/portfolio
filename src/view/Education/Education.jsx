import { logoUbbWhite } from "../../assets/images";
import { H3, MediumText, Paragraph } from "../../components";
import {
  BorderFirstRow,
  CardContent,
  CardHeader,
  CardLogoAnchor,
  CardLogoImg,
  EducationCard,
  EducationGrid,
  EducationHeader,
} from "./Education.styles";

const UNIVERSITY_URL = "https://www.ubiobio.cl/";
const TEXT_CARD = {
  TEXT_ONE:
    "El ingeniero civil informático de la Universidad del Bío-Bío, es un profesional capacitado para comprender la problemática organizacional en el ámbito de la informática y, a partir de ello, plantear y desarrollar soluciones pertinentes. Lo anterior se traduce en la formulación, evaluación, e implementación de proyectos de tecnologías de información y comunicación.",
  TEXT_TWO:
    "El grado académico de licenciado en Ciencias de la Ingeniería permite la continuación de estudios de postgrado en instituciones nacionales o internacionales, con posibilidad de integrarse a equipos de investigación académica para aportar al desarrollo del conocimiento.",
};

const Education = () => {
  return (
    <>
      <EducationHeader>
        <H3>Educación</H3>
      </EducationHeader>
      <EducationGrid>
        <BorderFirstRow />
        <MediumText>Años</MediumText>
        <MediumText>Títulos</MediumText>
        <MediumText>2024</MediumText>
        <EducationCard>
          <CardHeader>
            <MediumText>Titulo de Ingeniero Civil en Informática</MediumText>
          </CardHeader>
          <CardContent>
            <CardLogoAnchor
              href={UNIVERSITY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardLogoImg src={logoUbbWhite} alt="Universidad del Bío-Bío" />
            </CardLogoAnchor>
            <Paragraph>{TEXT_CARD.TEXT_ONE}</Paragraph>
          </CardContent>
        </EducationCard>
        <MediumText>2023</MediumText>
        <EducationCard>
          <CardHeader>
            <MediumText>
              Grado de Licenciado en ciencias de la ingenieria
            </MediumText>
          </CardHeader>
          <CardContent>
            <CardLogoAnchor
              href={UNIVERSITY_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <CardLogoImg src={logoUbbWhite} alt="Universidad del Bío-Bío" />
            </CardLogoAnchor>
            <Paragraph>{TEXT_CARD.TEXT_TWO}</Paragraph>
          </CardContent>
        </EducationCard>
      </EducationGrid>
    </>
  );
};

export default Education;
