import { useEffect, useState } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import { SquareUp } from "../../../../assets/icons/button";
import { ProyectoCamanchaca } from "../../../../assets/images";
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
  CardAnchorTitle,
  CardContainer,
  CardContent,
  CardContentLeft,
  CardContentRight,
  CardHeader,
  CardImg,
  CardSpan,
  CardVideo,
} from "./ProjectCard.styles";

const ProjectCard = () => {
  const { videoUrl, videId } = PROJECT_TEXT.proyecto1;

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
        <CardContentLeft>
          <CardHeader>
            <H4>Planificador de Servicios Logísticos</H4>
          </CardHeader>
          <ProjectTechnologies />
          <ProjectListDescription />
        </CardContentLeft>
        <CardContentRight>
          <CardImg
            src={ProyectoCamanchaca}
            alt="Imagen de un Camión con el logo Camanchaca"
          />
          <ProjectMenuButton handleOpenVideo={handleOpenVideo} />
        </CardContentRight>
      </CardContent>
      {openVideo && (
        <CardVideo>
          <CardHeader>
            <CardAnchorTitle
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ver demo del proyecto Planificador de Servicios Logísticos"
            >
              <CardSpan>
                Sistema Web: Planificador de Servicios Logísticos
              </CardSpan>
              <SquareUp />
            </CardAnchorTitle>
          </CardHeader>
          <LiteYouTubeEmbed
            id={videId}
            title="Demostración Completa del Sistema Web Planificador de Servicios Logísticos"
          />
        </CardVideo>
      )}
    </CardContainer>
  );
};

export default ProjectCard;
