import styled from "styled-components";
import { H3, MediumText } from "../../components";
import {
  BorderFirstRow,
  EducationGrid,
  EducationHeader,
} from "./Education.styles";

const Card = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
`;

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
        <Card>Card Content for 2024</Card>
        <MediumText>2023</MediumText>
        <Card>Card Content for 2023</Card>
      </EducationGrid>
    </>
  );
};

export default Education;
