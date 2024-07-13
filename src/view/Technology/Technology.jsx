import * as TechIcons from "../../assets/icon/technologies";
import { H3, H4, TechnologyList, TechnologyItem } from "../../components";
import { TECHNOLOGIES } from "../../constants/technologies";
import { TechnologyHeader, TechnologyWrapper } from "./Technology.styles";

const technologiesData = Object.values(TECHNOLOGIES).map((name) => ({
  name,
  icon: TechIcons[name],
}));

const Technology = () => {
  return (
    <>
      <TechnologyHeader>
        <H3>Tecnologías</H3>
      </TechnologyHeader>
      <TechnologyWrapper>
        <TechnologyList>
          {technologiesData.map(({ name, icon: Icon }) => (
            <TechnologyItem key={name}>
              {<Icon />}
              {/* {Icon} */}
              <H4>{name}</H4>
            </TechnologyItem>
          ))}
        </TechnologyList>
      </TechnologyWrapper>
    </>
  );
};

export default Technology;
