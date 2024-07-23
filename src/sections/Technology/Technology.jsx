import * as TechIcons from "../../assets/icons/technologies";
import { H3, MediumText } from "../../components";
import { TECHNOLOGIES } from "../../constants/technologies";
import { Section } from "../Section.styles";
import {
  Item,
  List
} from "./components/List/List.styles";
import { TechnologyContainer, TechnologyHeader } from "./Technology.styles";

const TechnologySection = () => (
  <Section $variant="start" id="technology">
    <TechnologyContainer>
      <List>
        <Item>
          <TechnologyHeader>
            <H3>Tecnologías</H3>
          </TechnologyHeader>
        </Item>
        <Item>
          <TechIcons.HTML />
          <TechIcons.HTML />
          <MediumText>{TECHNOLOGIES.html}</MediumText>
        </Item>
        <Item>
          <TechIcons.CSS />
          <TechIcons.CSS />
          <MediumText>CSS</MediumText>
        </Item>
        <Item>
          <TechIcons.JavaScript />
          <TechIcons.JavaScript />
          <MediumText>JavaScript</MediumText>
        </Item>
        <Item>
          <TechIcons.TypeScript />
          <TechIcons.TypeScript />
          <MediumText>TypeScript</MediumText>
        </Item>
        <Item>
          <TechIcons.React />
          <TechIcons.React />
          <MediumText>React</MediumText>
        </Item>
        <Item>
          <TechIcons.Laravel />
          <TechIcons.Laravel />
          <MediumText>Laravel</MediumText>
        </Item>
        <Item>
          <TechIcons.SQL />
          <TechIcons.SQL />
          <MediumText>SQL</MediumText>
        </Item>
        <Item>
          <TechIcons.Git />
          <TechIcons.Git />
          <MediumText>Git</MediumText>
        </Item>
        <Item>
          <TechIcons.Figma />
          <TechIcons.Figma />
          <MediumText>Figma</MediumText>
        </Item>
      </List>
    </TechnologyContainer>
  </Section>
);

export default TechnologySection;
