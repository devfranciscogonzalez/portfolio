import { H3, TechnologiesList, TechnologyItem } from "../../components";
import { TECHNOLOGIES } from "../../constants/technologies";
import { Laravel } from "../../assets/icon";

const Technology = () => {
  return (
    <>
      <H3>Tecnología </H3>
      <TechnologiesList>
        {Object.values(TECHNOLOGIES).map((technology) => (
          <TechnologyItem key={technology}>
            <Laravel />
            <Laravel />
            <p>Laravel</p>
          </TechnologyItem>
        ))}
      </TechnologiesList>
    </>
  );
};

export default Technology;
