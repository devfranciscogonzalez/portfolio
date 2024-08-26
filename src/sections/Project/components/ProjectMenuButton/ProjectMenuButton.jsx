import PropTypes from "prop-types";
import { Hidden, Link, Play } from "../../../../assets/icons/button";
import { GitHub } from "../../../../assets/icons/socialMedia";
import { PROJECT_TEXT } from "../../../../constants/projectText";
import {
  MenuButtonWrapper,
  ProjectAnchor,
  ProjectButton,
} from "./ProjectMenuButton.styles";

const ProjectMenuButton = ({ handleOpenVideo, openVideo }) => {
  const { codeUrl, demoUrl } = PROJECT_TEXT.project1;

  return (
    <MenuButtonWrapper>
      <ProjectButton
        onClick={handleOpenVideo}
        aria-label={`${
          openVideo
            ? "Ocultar video del proyecto Planificador de Servicios Logísticos"
            : "Ver video del proyecto Planificador de Servicios Logísticos"
        }`}
        style={
          openVideo ? { backgroundColor: "hsl(44, 100%, 93%)" } : undefined
        }
      >
        {openVideo ? <Hidden /> : <Play />}
        {openVideo ? "Ocultar" : "Ver Video"}
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
  openVideo: PropTypes.bool.isRequired,
};

export default ProjectMenuButton;
