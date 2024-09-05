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
  ProjectDescriptionWrapper,
  SpanDescription,
} from "./ProjectListDescription.styles";

const ProjectListDescriptionTwo = () => {
  const { projectListDescription, projectListTechnologies } =
    PROJECT_TEXT.project2;

  return (
    <ProjectDescriptionWrapper>
      <ListDescriptionWrapper>
        <Paragraph>
          Planificación y desarrollo de una una aplicación web de{" "}
          <Strong> gestión de inventario</Strong> para una empresa constructora,
          ubicada en la comuna de Trehuaco, Región de Ñuble. Este sistema
          favoreció:
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

export default ProjectListDescriptionTwo;
