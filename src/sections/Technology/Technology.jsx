import { H3, H4 } from "../../components";
import { Section } from "../Section.styles";
import { Item, List, } from "./components/List/List.styles";
import { TechnologyHeader, TechnologyWrapper } from "./Technology.styles";
import * as TechIcons from "../../assets/icons/technologies";
import { TECHNOLOGIES } from "../../constants/technologies";

const technologiesData = Object.values(TECHNOLOGIES).map((name) => ({
  name,
  icon: TechIcons[name],
}));

const TechnologySection = () => (
  <Section $variant="start" id="technology">
    <TechnologyHeader>
      <H3>Tecnologías</H3>
    </TechnologyHeader>
    <TechnologyWrapper>
      <List>
        {technologiesData.map(({ name, icon: Icon }) => (
          <Item key={name}>
            {<Icon />}
            {/* {Icon} */}
            <H4>{name}</H4>
          </Item>
        ))}
      </List>
    </TechnologyWrapper>
  </Section>
);

export default TechnologySection;
