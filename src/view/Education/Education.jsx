import { H3 } from "../../components";
import { EducationHeader, EducationGrid } from "./Education.styles";
import styled from "styled-components";

const Title = styled.div`
  font-weight: 700;
`;

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
        <Title>Años</Title>
        <Title>Títulos</Title>
        <div>2024</div>
        <Card>Card Content for 2024</Card>
        <div>2023</div>
        <Card>Card Content for 2023</Card>
      </EducationGrid>
    </>
  );
};

export default Education;
