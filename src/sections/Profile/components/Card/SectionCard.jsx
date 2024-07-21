import PropTypes from "prop-types";
import { H4, Paragraph } from "../../../../components";
import Tag from "../Tag/Tag";
import { TagGroup } from "./Card.styles";
import { SectionWrapper } from "./SectionCard.styles";

const SectionCard = ({ title, description, additionalInfo, tags }) => (
  <SectionWrapper>
    <H4>{title}</H4>
    <Paragraph>{description}</Paragraph>
    {additionalInfo && <Paragraph>{additionalInfo}</Paragraph>}
    {tags && (
      <TagGroup>
        {tags.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </TagGroup>
    )}
  </SectionWrapper>
);

SectionCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  additionalInfo: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

export default SectionCard;
