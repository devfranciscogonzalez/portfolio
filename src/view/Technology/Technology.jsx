import {
  Laravel,
  React,
  Css,
  Figma,
  Git,
  Html,
  JavaScript,
  Sql,
  TypeScript,
} from "../../assets/icon/technologies";
import { H3, H4, TechnologiesList, TechnologyItem } from "../../components";
import { TECHNOLOGIES } from "../../constants/technologies";
import { TechnologyHeader, TechnologyWrapper } from "./Technology.styles";

const technologiesData = [
  { name: TECHNOLOGIES.REACT, icon: <React /> },
  { name: TECHNOLOGIES.LARAVEL, icon: <Laravel /> },
  { name: TECHNOLOGIES.JAVASCRIPT, icon: <JavaScript /> },
  { name: TECHNOLOGIES.TYPESCRIPT, icon: <TypeScript /> },
  { name: TECHNOLOGIES.HTML, icon: <Html /> },
  { name: TECHNOLOGIES.CSS, icon: <Css /> },
  { name: TECHNOLOGIES.SQL, icon: <Sql /> },
  { name: TECHNOLOGIES.GIT, icon: <Git /> },
  { name: TECHNOLOGIES.FIGMA, icon: <Figma /> },
];

const Technology = () => {
  return (
    <>
      <TechnologyHeader>
        <H3>Tecnologías</H3>
      </TechnologyHeader>
      <TechnologyWrapper>
        <TechnologiesList>
          {technologiesData.map(({ name, icon }) => (
            <TechnologyItem key={name}>
              {icon}
              {icon}
              <H4>{name}</H4>
            </TechnologyItem>
          ))}
        </TechnologiesList>
      </TechnologyWrapper>
    </>
  );
};

export default Technology;
