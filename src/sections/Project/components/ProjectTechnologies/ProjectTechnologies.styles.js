import styled from "styled-components";

const ProjectTechList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing.small};
`;

const ProjectTechItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    width: 32px;
    height: 32px;
  }
`;

export { ProjectTechList, ProjectTechItem };
