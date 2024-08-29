import { Section } from "../Section.styles";
import { ProjectCardWrapper, ProjectHeader } from "./Project.styles";
import { H3 } from "../../components";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import ProjectCardTwo from "./components/ProjectCard/ProjectCardTwo";
import { PROJECT_TEXT } from "../../constants/projectText";

const Project = () => {
  const { title } = PROJECT_TEXT;
  return (
    <Section id="project">
      <ProjectHeader>
        <H3>🗂️{title}</H3>
      </ProjectHeader>
      <ProjectCardWrapper>
        <ProjectCard />
        <ProjectCardTwo />
      </ProjectCardWrapper>
    </Section>
  );
};
export default Project;
