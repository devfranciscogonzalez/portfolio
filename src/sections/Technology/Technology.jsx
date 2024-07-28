import * as TechIcons from "../../assets/icons/technologies";
import { H3, Paragraph, Strong } from "../../components";
import { TECHNOLOGIES_TEXT } from "../../constants/technologies";
import { Section } from "../Section.styles";
import { ItemSpan, List } from "./components/List/List.styles";
import TechnologyItem from "./components/List/TechnologyItem";
import { TechnologyHeader } from "./Technology.styles";

const TechnologySection = () => {
  const { title, technologies } = TECHNOLOGIES_TEXT;

  const techItems = [
    { icon: TechIcons.HTML, name: technologies.html },
    { icon: TechIcons.CSS, name: technologies.css },
    { icon: TechIcons.JavaScript, name: technologies.javascript },
    { icon: TechIcons.TypeScript, name: technologies.typescript },
    { icon: TechIcons.React, name: technologies.react },
    { icon: TechIcons.PHP, name: technologies.php },
    { icon: TechIcons.Laravel, name: technologies.laravel },
    { icon: TechIcons.SQL, name: technologies.sql },
    { icon: TechIcons.Git, name: technologies.git },
    { icon: TechIcons.Figma, name: technologies.figma },
  ];

  return (
    <Section $variant="center" id="technology">
      <List>
        <ItemSpan>
          <TechnologyHeader>
            <H3>💻{title}</H3>
          </TechnologyHeader>
          <Paragraph>
            En mi búsqueda por crear soluciones óptimas y robustas, he{" "}
            <Strong>aprendido</Strong> y <Strong>utilizado</Strong> el siguiente
            conjunto de tecnologías:
          </Paragraph>
        </ItemSpan>
        {techItems.map(({ icon, name }) => (
          <TechnologyItem key={name} icon={icon} name={name} />
        ))}
      </List>
    </Section>
  );
};

export default TechnologySection;
