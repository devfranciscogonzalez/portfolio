import PropTypes from "prop-types";
import { CurriculumSvg, SchoolSvg } from "../../../../assets/icons/button";
import { logoUbbWhite } from "../../../../assets/images/index";
import { H4, Paragraph } from "../../../../components";
import { EDUCATION_TEXT } from "../../../../constants/educationText";
import { EducationButtonWrapper } from "../../Education.styles";
import ActionEducationButton from "../EducationButton/ActionEducationButton";
import {
  CardContainer,
  CardContentLeft,
  CardContentRight,
  CardHeader,
  CardLogoAnchor,
  CardLogoImg,
} from "./EducationCard.styles";

const EducationCard = ({ title, description }) => {
  const { universityUrl, curriculumUrl, readMoreUrl } = EDUCATION_TEXT;
  return (
    <CardContainer>
      <CardContentLeft>
        <CardLogoAnchor
          href={universityUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardLogoImg src={logoUbbWhite} alt="Universidad del Bío-Bío" />
        </CardLogoAnchor>
        <EducationButtonWrapper>
          <ActionEducationButton
            isPrimary
            href={curriculumUrl}
            icon={CurriculumSvg}
            value="Malla Curricular"
          />
          <ActionEducationButton
            href={readMoreUrl}
            icon={SchoolSvg}
            value="Leer más"
          />
        </EducationButtonWrapper>
      </CardContentLeft>
      <CardContentRight>
        <CardHeader>
          <H4>{title}</H4>
        </CardHeader>
        <Paragraph>{description}</Paragraph>
      </CardContentRight>
    </CardContainer>
  );
};

EducationCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default EducationCard;
