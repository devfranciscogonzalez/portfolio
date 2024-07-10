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
  gap: ${({ theme }) => theme.spacing.medium} 0;
  width: 100%;

  & >:first-child, & >:nth-child(2){
    padding: ${({ theme }) => theme.spacing.small} 0;
    border-top: 1px solid ${({ theme }) => theme.colors.border.primary};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  }
`;

const GridTitle = styled.div`
  grid-column: 1 / span 2;
  border-top: 1px solid ${({ theme }) => theme.colors.border.primary};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border.primary};
  display: flex;
  padding: ${({ theme }) => theme.spacing.small} 0;
`;

export { EducationHeader, EducationGrid, GridTitle };
