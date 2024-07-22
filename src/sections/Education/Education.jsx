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
  const educationItems = [
    {
      date: "13-05-2024",
      title: "Titulo de Ingeniero Civil en Informática",
      description: EDUCATION_TEXT.descriptionICINF,
    },
    {
      date: "26-04-2024",
      title: "Grado de Licenciado en ciencias de la ingenieria",
      description: EDUCATION_TEXT.descriptionLicenciado,
    },
  ];

  return (
    <Section $variant="start" id="education">
      <EducationHeader>
        <H3>{EDUCATION_TEXT.title}</H3>
      </EducationHeader>
      <EducationGrid>
        <BorderFirstRow />
        <MediumText>Fecha</MediumText>
        <MediumText>Formación Académica</MediumText>
        {educationItems.map((item, index) => (
          <EducationCard key={index} {...item} />
        ))}
      </EducationGrid>
    </Section>
  );
};

export default Education;
