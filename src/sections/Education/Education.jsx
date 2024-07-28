import { H3, MediumText } from "../../components";
import { EDUCATION_TEXT } from "../../constants/educationText";
import { Section } from "../Section.styles";
import {
  BorderFirstRow,
  EducationGrid,
  EducationHeader,
} from "./Education.styles";
import EducationCard from "./components/EducationCard/EducationCard";

const Education = () => {
  const { title, engineer, licenciado } = EDUCATION_TEXT;
  return (
    <Section $variant="start" id="education">
      <EducationHeader>
        <H3>🎓{title}</H3>
      </EducationHeader>
      <EducationGrid>
        <BorderFirstRow />
        <MediumText>Fecha</MediumText>
        <MediumText>Formación Académica</MediumText>

        <MediumText>{engineer.date}</MediumText>
        <EducationCard
          title={engineer.title}
          description={engineer.description}
        />
        <MediumText>{licenciado.date}</MediumText>
        <EducationCard
          title={licenciado.title}
          description={licenciado.description}
        />
      </EducationGrid>
    </Section>
  );
};

export default Education;
