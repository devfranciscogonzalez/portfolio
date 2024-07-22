import { H4, MediumText, Paragraph } from "../../../../components";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardHeader,
  CardLogoAnchor,
  CardLogoImg,
} from "./EducationCard.styles";
import { EDUCATION_TEXT } from "../../../../constants/educationText";
import { logoUbbWhite } from "../../../../assets/images/index";

const EducationCard = ({ date, title, description }) => (
  <>
    <MediumText>{date}</MediumText>
    <Card>
      <CardHeader>
        <H4>{title}</H4>
      </CardHeader>
      <CardContent>
        <CardLogoAnchor
          href={EDUCATION_TEXT.universityUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CardLogoImg src={logoUbbWhite} alt="Universidad del Bío-Bío" />
        </CardLogoAnchor>
        <Paragraph>{description}</Paragraph>
      </CardContent>
    </Card>
  </>
);

EducationCard.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default EducationCard;
