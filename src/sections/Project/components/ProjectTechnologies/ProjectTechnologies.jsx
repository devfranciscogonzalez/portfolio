import PropTypes from "prop-types";
import { ProjectTechItem, ProjectTechList } from "./ProjectTechnologies.styles";

const ProjectTechnologies = ({ techItems }) => {
  return (
    <ProjectTechList>
      {techItems.map((tech, index) => (
        <ProjectTechItem key={`${tech}-${index}`}>
          <tech.icon />
        </ProjectTechItem>
      ))}
    </ProjectTechList>
  );
};

ProjectTechnologies.propTypes = {
  techItems: PropTypes.array,
};

export default ProjectTechnologies;
