import { useState } from "react";
import {
  CopySvg,
  EmailSvg,
  CopyCheckSvg,
} from "../../../../assets/icons/button";
import { SOCIAL_LINKS } from "../../../../constants/socialLinks";
import {
  CopyButtonPrimary,
  CopyButtonSecondary,
  CopyButtonWrapper,
  EmailContainer,
  EmailOutline,
  EmailText,
} from "./EmailCopy.styles";

const email = "devfranciscogonzalez@gmail.com";

const EmailCopy = () => {
  const [isCopy, setIsCopy] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setIsCopy(true);
        setTimeout(() => {
          setIsCopy(false);
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <EmailContainer>
      <EmailOutline>
        <EmailText>{email}</EmailText>
        <CopyButtonWrapper>
          <CopyButtonPrimary
            onClick={copyToClipboard}
            aria-label="Copiar Correo"
          >
            {isCopy ? <CopyCheckSvg /> : <CopySvg />}
          </CopyButtonPrimary>
          <CopyButtonSecondary
            href={SOCIAL_LINKS.email}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Correo Electrónico"
          >
            <EmailSvg />
          </CopyButtonSecondary>
        </CopyButtonWrapper>
      </EmailOutline>
    </EmailContainer>
  );
};

export default EmailCopy;
