import styled from "styled-components";

const ProjectHeader = styled.header`
  padding-bottom: ${({ theme }) => theme.padding.large};
`;
const ProjectCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.large};
`;

export { ProjectHeader, ProjectCardWrapper };
