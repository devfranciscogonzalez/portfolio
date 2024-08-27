import { Section } from "../Section.styles";
import { ProjectCardWrapper, ProjectHeader } from "./Project.styles";
import { H3 } from "../../components";
import ProjectCard from "./components/ProjectCard/ProjectCard";
import ProjectCardTwo from "./components/ProjectCard/ProjectCardTwo";

const Project = () => (
  <Section id="project">
    <ProjectHeader>
      <H3>Projectos</H3>
    </ProjectHeader>
    <ProjectCardWrapper>
      <ProjectCard />
      <ProjectCardTwo />
    </ProjectCardWrapper>
  </Section>
);

export default Project;
