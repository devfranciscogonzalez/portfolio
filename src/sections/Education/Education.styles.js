import styled from "styled-components";

const EducationHeader = styled.header`
  padding-bottom: ${({ theme }) => theme.padding.large};
  width: 100%;
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 11fr;
  grid-template-rows: auto auto auto;
  align-items: flex-start;
  column-gap: ${({ theme }) => theme.spacing.medium};
  row-gap: ${({ theme }) => theme.spacing.large};
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

export { BorderFirstRow, EducationGrid, EducationHeader };

