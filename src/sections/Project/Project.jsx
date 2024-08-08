import { Section } from "../Section.styles";
import { ProjectHeader } from "./Project.styles";
import { H3 } from "../../components";
import ProjectCard from "./components/ProjectCard/ProjectCard";

const Project = () => (
  <Section $variant="start" id="project">
    <ProjectHeader>
      <H3>Projectos</H3>
    </ProjectHeader>
    <ProjectCard />
  </Section>
);

export default Project;
