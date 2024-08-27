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
  ProjectDescriptionWrapper,
  SpanDescription,
} from "./ProjectListDescription.styles";

const ProjectListDescriptionTwo = () => {
  const { projectListDescription } = PROJECT_TEXT.project2;
  return (
    <ProjectDescriptionWrapper>
      <ListDescriptionWrapper>
        <Paragraph>
          Sistema web de <Strong>gestión de inventario</Strong> para una empresa
          constructora, enfocado en reducir la{" "}
          <Strong> pérdida de materiales</Strong> y{" "}
          <Strong>maximizar la eficiencia</Strong> en el uso de recursos.
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

export default ProjectListDescriptionTwo;
