import PropTypes from "prop-types";
import { Link, Play } from "../../../../assets/icons/button";
import { GitHub } from "../../../../assets/icons/socialMedia";
import { PROJECT_TEXT } from "../../../../constants/projectText";
import {
  MenuButtonWrapper,
  ProjectAnchor,
  ProjectButton,
} from "./ProjectMenuButton.styles";

const ProjectMenuButton = ({ handleOpenVideo }) => {
  const { codeUrl, demoUrl } = PROJECT_TEXT.proyecto1;

  return (
    <MenuButtonWrapper>
      <ProjectButton
        onClick={handleOpenVideo}
        aria-label="Ver video del proyecto Planificador de Servicios Logísticos"
      >
        <Play /> Ver video
      </ProjectButton>
      <ProjectAnchor
        href={codeUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver codigo del proyecto Planificador de Servicios Logísticos"
      >
        <GitHub /> Ver codigo
      </ProjectAnchor>
      <ProjectAnchor
        href={demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver demo del proyecto Planificador de Servicios Logísticos"
      >
        <Link /> Ver demo
      </ProjectAnchor>
    </MenuButtonWrapper>
  );
};

ProjectMenuButton.propTypes = {
  handleOpenVideo: PropTypes.func.isRequired,
};

export default ProjectMenuButton;
