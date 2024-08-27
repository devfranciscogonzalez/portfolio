import Check from "../../../../assets/icons/check/Check";
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
  const { camanchacaUrl, clrUrl, projectListDescription } =
    PROJECT_TEXT.project1;

  return (
    <ProjectDescriptionWrapper>
      <ListDescriptionWrapper>
        <Paragraph>
          Enfocado en resolver los <Strong>problemas de coordinación</Strong> y
          <Strong> ejecución</Strong> de los servicios logísticos de la unidad
          negocio{" "}
          <ProjectAnchorText
            id="clr"
            href={clrUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Página web oficial del Centro Logístico Rocuant"
          >
            Centro Logístico Rocuant (CLR)
          </ProjectAnchorText>
          , perteneciente a la empresa {"  "}
          <ProjectAnchorText
            id="camanchaca"
            href={camanchacaUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Página web oficial de la empresa Camanchaca"
          >
            Camanchaca S.A.
          </ProjectAnchorText>
        </Paragraph>
        <ListDescription>
          {projectListDescription.map((description) => (
            <ItemDescription key={description}>
              <Check />
              <SpanDescription>{description}</SpanDescription>
            </ItemDescription>
          ))}
        </ListDescription>
      </ListDescriptionWrapper>
    </ProjectDescriptionWrapper>
  );
};

export default ProjectListDescription;
