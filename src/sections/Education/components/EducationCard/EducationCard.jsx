import PropTypes from "prop-types";
import { Curriculum, School } from "../../../../assets/icons/button";
import { logoUbbWhite } from "../../../../assets/images/index";
import { H4 } from "../../../../components";
import { EDUCATION_TEXT } from "../../../../constants/educationText";

import Cite from "../Cite/Cite";
import {
  CardContainer,
  CardContentLeft,
  CardContentRight,
  CardHeader,
  CardLogoAnchor,
  CardLogoImg,
  EducationButton,
  EducationButtonWrapper,
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
          <EducationButton
            href={curriculumUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Malla Curricular"
          >
            <Curriculum /> Malla Curricular
          </EducationButton>
          <EducationButton
            href={readMoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Leer más"
          >
            <School /> Leer más
          </EducationButton>
        </EducationButtonWrapper>
      </CardContentLeft>
      <CardContentRight>
        <CardHeader>
          <H4>{title}</H4>
        </CardHeader>
        <Cite description={description} />
      </CardContentRight>
    </CardContainer>
  );
};

EducationCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default EducationCard;
