import { useEffect, useState } from "react";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { ProyectoInventario } from "../../../../assets/images";
import { H4 } from "../../../../components";
import { PROJECT_TEXT } from "../../../../constants/projectText";
import {
  getFromLocalStorage,
  setToLocalStorage,
} from "../../../../utils/storage";
import ProjectListDescription from "../ProjectListDescription/ProjectListDescription";
import ProjectMenuButton from "../ProjectMenuButton/ProjectMenuButton";
import ProjectTechnologies from "../ProjectTechnologies/ProjectTechnologies";
import {
  CardContainer,
  CardContent,
  CardContentLeft,
  CardContentRight,
  CardHeader,
  CardImg,
} from "./ProjectCard.styles";
import { TECHNOLOGIES_TEXT } from "../../../../constants/technologies";
import * as TechIcons from "../../../../assets/icons/technologies";

const ProjectCardTwo = () => {
  const { title } = PROJECT_TEXT.project2;

  const { technologies } = TECHNOLOGIES_TEXT;

  const techItems = [
    { icon: TechIcons.Appsheet, name: technologies.appsheet },
    { icon: TechIcons.Sheets, name: technologies.sheets },
  ];

  const [openVideo, setOpenVideo] = useState(
    getFromLocalStorage("openVideo", false)
  );

  useEffect(() => {
    setToLocalStorage("openVideo", openVideo);
  }, [openVideo]);

  const handleOpenVideo = () => {
    setOpenVideo(!openVideo);
  };
  return (
    <CardContainer>
      <CardContent>
        <CardContentLeft $useOrder={true}>
          <CardHeader>
            <H4>{title}</H4>
          </CardHeader>
          <ProjectTechnologies techItems={techItems} />
          <ProjectListDescription />
        </CardContentLeft>
        <CardContentRight>
          <CardImg
            src={ProyectoInventario}
            alt="Imagen del Proyecto Aplicación de Inventario"
          />
          <ProjectMenuButton
            handleOpenVideo={handleOpenVideo}
            openVideo={openVideo}
          />
        </CardContentRight>
      </CardContent>
    </CardContainer>
  );
};

export default ProjectCardTwo;
