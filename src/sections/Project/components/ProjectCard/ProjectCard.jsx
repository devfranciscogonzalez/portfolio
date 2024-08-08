import { ProyectoCamanchaca } from "../../../../assets/images"
import { H4, Paragraph, SmallText } from "../../../../components"
import { CardContainer, CardContentLeft, CardContentRight, CardHeader, CardLogoAnchor, CardLogoImg } from "./ProjectCard.styles"


const ProjectCard = () => {
  return (
    <CardContainer>
      <CardContentLeft>
        <CardHeader>
          <H4>Planificador de Servicios Logísticos</H4>
        </CardHeader>
        <SmallText>Proyecto para optar al título profesional de Ingeniero Civil en Informática</SmallText>
        <Paragraph>Desarrollar un sistema web de planificación que respalde la gestión de servicios. Este sistema registrará los datos necesarios para la ejecución de los procesos y garantizará su disponibilidad para los responsables de llevarlos a cabo. </Paragraph>
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