import { Check, Dot } from "../../../../assets/icons/check";
import {
  Paragraph,
  Strong,
} from "../../../../components/TextComponents/TextComponents";
import { PROJECT_TEXT } from "../../../../constants/projectText";
import {
  ItemDescription,
  ListDescription,
  ListDescriptionWrapper,
  ProjectAnchorText,
  ProjectDescriptionWrapper,
  SpanDescription,
} from "./ProjectListDescription.styles";

const ProjectListDescription = () => {
  const {
    camanchacaUrl,
    clrUrl,
    projectListDescription,
    projectListTechnologies,
  } = PROJECT_TEXT.project1;

  return (
    <ProjectDescriptionWrapper>
      <ListDescriptionWrapper>
        <Paragraph>
          Sistema web para la <Strong>planificación</Strong> y{" "}
          <Strong>gestión de servicios logísticos </Strong>del{" "}
          <ProjectAnchorText
            id="clr"
            href={clrUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Página web oficial del Centro Logístico Rocuant"
          >
            Centro Logístico Rocuant (CLR)
          </ProjectAnchorText>
          , una unidad de negocio perteneciente a la empresa {"  "}
          <ProjectAnchorText
            id="camanchaca"
            href={camanchacaUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Página web oficial de la empresa Camanchaca"
          >
            Camanchaca S.A.
          </ProjectAnchorText>{" "}
          Este sistema resolvió:
        </Paragraph>
        <ListDescription>
          {projectListDescription.map((description) => (
            <ItemDescription key={description}>
              <Check />
              <SpanDescription>{description}</SpanDescription>
            </ItemDescription>
          ))}
        </ListDescription>
        <Paragraph>
          <Strong $blue> Se utilizo las siguientes tecnologías: </Strong>
        </Paragraph>
        <ListDescription>
          {Object.entries(projectListTechnologies).map(([key, value]) => (
            <ItemDescription key={key}>
              <Dot />

              <SpanDescription>
                <Strong>{key}</Strong>: {value}
              </SpanDescription>
            </ItemDescription>
          ))}
        </ListDescription>
      </ListDescriptionWrapper>
    </ProjectDescriptionWrapper>
  );
};

export default ProjectListDescription;
