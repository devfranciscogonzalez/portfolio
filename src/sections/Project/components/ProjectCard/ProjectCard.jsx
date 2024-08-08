import { CardContainer, CardContentLeft, CardContentRight, CardHeader, CardLogoAnchor, CardLogoImg } from "./ProjectCard.styles"
import { ProyectoCamanchaca } from "../../../../assets/images"
import { H4 } from "../../../../components"


const ProjectCard = () => {
  return (
    <CardContainer>
      <CardContentLeft>
        <CardHeader>
          <H4>Planificador de Servicios Logísticos</H4>
        </CardHeader>
      </CardContentLeft>
      <CardContentRight>
        <CardLogoAnchor
          href="https://www.ubiobio.cl/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardLogoImg src={ProyectoCamanchaca} alt="Universidad del Bío-Bío" />
        </CardLogoAnchor>
      </CardContentRight>

    </CardContainer>
  )
}

export default ProjectCard