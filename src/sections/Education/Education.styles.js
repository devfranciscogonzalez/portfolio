import styled from "styled-components";

const EducationHeader = styled.header`
  padding-bottom: ${({ theme }) => theme.padding.large};
  width: 100%;
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 7fr;
  grid-template-rows: auto auto auto;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.medium};
  width: 100%;

  & > :nth-child(1) {
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    z-index: 1;
  }
  & > :nth-child(2) {
    grid-column: 1;
    grid-row: 1;
    align-self: center;
  }
  & > :nth-child(3) {
    grid-column: 2;
    grid-row: 1;
    align-self: center;
  }
`;

const BorderFirstRow = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.utility.border};
  border-bottom: 1px solid ${({ theme }) => theme.colors.utility.border};
  height: ${({ theme }) => theme.spacing.xlarge};
`;

const EducationCard = styled.article`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.padding.large};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

const CardHeader = styled.header`
  padding-bottom: ${({ theme }) => theme.padding.small};
  border-bottom: 1px dashed ${({ theme }) => theme.colors.utility.border};
`;

const CardContent = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.large};
  margin-top: ${({ theme }) => theme.spacing.large};
`;
const CardLogoAnchor = styled.a`
  min-width: 140px;
`;

const CardLogoImg = styled.img`
  aspect-ratio: 400 / 247;
`;

export {
  BorderFirstRow,
  CardContent,
  CardHeader,
  CardLogoAnchor,
  CardLogoImg,
  EducationCard,
  EducationGrid,
  EducationHeader,
};
