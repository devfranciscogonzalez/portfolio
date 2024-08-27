import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import * as TechIcons from "../../../../assets/icons/technologies";
import { ProyectoInventario } from "../../../../assets/images";
import { H4 } from "../../../../components";
import { PROJECT_TEXT } from "../../../../constants/projectText";
import { TECHNOLOGIES_TEXT } from "../../../../constants/technologies";
import ProjectListDescriptionTwo from "../ProjectListDescription/ProjectListDescriptionTwo";
import ProjectoMenuButtonTwo from "../ProjectMenuButton/ProjectoMenuButtonTwo";
import ProjectTechnologies from "../ProjectTechnologies/ProjectTechnologies";
import {
  CardContainer,
  CardContent,
  CardContentLeft,
  CardContentRight,
  CardHeader,
  CardImg,
} from "./ProjectCard.styles";

const ProjectCardTwo = () => {
  const { title } = PROJECT_TEXT.project2;

  const { technologies } = TECHNOLOGIES_TEXT;

  const techItems = [
    { icon: TechIcons.Appsheet, name: technologies.appsheet },
    { icon: TechIcons.Sheets, name: technologies.sheets },
  ];

  return (
    <CardContainer>
      <CardContent>
        <CardContentLeft $right={true}>
          <CardHeader>
            <H4>{title}</H4>
          </CardHeader>
          <ProjectTechnologies techItems={techItems} />
          <ProjectListDescriptionTwo />
        </CardContentLeft>
        <CardContentRight>
          <CardImg
            $right={true}
            src={ProyectoInventario}
            alt="Imagen del Proyecto Aplicación de Inventario"
          />
          <ProjectoMenuButtonTwo />
        </CardContentRight>
      </CardContent>
    </CardContainer>
  );
};

export default ProjectCardTwo;
