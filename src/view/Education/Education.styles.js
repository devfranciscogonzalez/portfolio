import styled from "styled-components";

const EducationHeader = styled.header`
  padding-bottom: ${({ theme }) => theme.padding.large};
  width: 100%;
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto auto auto;
  align-items: start;
  gap: ${({ theme }) => theme.spacing.medium};
`;

export { EducationHeader, EducationGrid };
