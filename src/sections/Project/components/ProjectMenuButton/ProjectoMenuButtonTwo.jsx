import { Document, Link } from "../../../../assets/icons/button";
import { PROJECT_TEXT } from "../../../../constants/projectText";
import { MenuButtonWrapper, ProjectAnchor } from "./ProjectMenuButton.styles";

const ProjectoMenuButtonTwo = () => {
  const { documentUrl, demoUrl } = PROJECT_TEXT.project2;

  return (
    <MenuButtonWrapper>
      <ProjectAnchor
        href={documentUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver documentación del proyecto Aplicación de Inventario"
      >
        <Document /> Documentación
      </ProjectAnchor>
      <ProjectAnchor
        href={demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver demo del proyecto Aplicación de Inventario"
      >
        <Link /> Ver demo
      </ProjectAnchor>
    </MenuButtonWrapper>
  );
};

export default ProjectoMenuButtonTwo;
