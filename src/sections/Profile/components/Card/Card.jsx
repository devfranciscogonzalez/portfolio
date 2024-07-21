import PropTypes from "prop-types";
import { H3 } from "../../../../components";
import { PROFILE_TEXT } from "../../../../constants/profileText";
import SectionCard from "./SectionCard";
import {
  CardContainer,
  CardContent,
  CardContentLeft,
  CardContentRight,
  CardHeader,
} from "./Card.styles";

const Card = ({ children }) => {
  const { title, knowledge, technicalSkills, mindset, acknowledgments } =
    PROFILE_TEXT;

  return (
    <CardContainer>
      <CardHeader>
        <H3>{title}</H3>
      </CardHeader>
      <CardContent>
        <CardContentLeft>{children}</CardContentLeft>
        <CardContentRight>
          <SectionCard
            title={knowledge.title}
            description={knowledge.description}
            additionalInfo={knowledge.additionalInfo}
            tags={knowledge.education}
          />
          <SectionCard
            title={technicalSkills.title}
            description={technicalSkills.description}
            tags={technicalSkills.items}
          />
          <SectionCard
            title={mindset.title}
            description={mindset.description}
          />
          <SectionCard
            title={`${acknowledgments.title}🙏`}
            description={acknowledgments.description}
          />
        </CardContentRight>
      </CardContent>
    </CardContainer>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
