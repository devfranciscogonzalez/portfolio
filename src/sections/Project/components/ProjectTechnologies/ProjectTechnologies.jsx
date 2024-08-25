import { TECHNOLOGIES_TEXT } from "../../../../constants/technologies";
import * as TechIcons from "../../../../assets/icons/technologies";
import { ProjectTechList, ProjectTechItem } from "./ProjectTechnologies.styles";

const ProjectTechnologies = () => {
  const { technologies } = TECHNOLOGIES_TEXT;

  const techItems = [
    { icon: TechIcons.JavaScript, name: technologies.javascript },
    { icon: TechIcons.React, name: technologies.react },
    { icon: TechIcons.PHP, name: technologies.php },
    { icon: TechIcons.Laravel, name: technologies.laravel },
    { icon: TechIcons.PostgreSql, name: technologies.postgre },
    { icon: TechIcons.Git, name: technologies.git },
  ];

  return (
    <ProjectTechList>
      {techItems.map((tech, index) => (
        <ProjectTechItem key={`${tech}-${index}`} >
          <tech.icon />
        </ProjectTechItem >

      ))}
    </ProjectTechList>
  );
};


export default ProjectTechnologies;