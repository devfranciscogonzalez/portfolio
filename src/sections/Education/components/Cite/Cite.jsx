import { Strong } from "../../../../components";
import PropTypes from "prop-types";
import { EDUCATION_TEXT } from "../../../../constants/educationText";
import { Blockquote, CiteText } from "./Cite.styles";

const Citation = ({ description }) => {
  return (
    <>
      <Blockquote cite={EDUCATION_TEXT.readMoreUrl}>{description}</Blockquote>
      <CiteText
        id="cite"
        href={EDUCATION_TEXT.readMoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Referencia de la información"
      >
        Referencia: Universidad del Bío-Bío. (s.f.).{" "}
        <Strong>Campo ocupacional</Strong>. En{" "}
        <em>Ingeniería Civil en Informática, Concepción</em>.
      </CiteText>
    </>
  );
};

Citation.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Citation;
