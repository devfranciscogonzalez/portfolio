import { useState } from "react";
import { CopyCheck, Copy, Email } from "../../../../assets/icons/button";
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
        }, 1000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <EmailContainer>
      <EmailOutline>
        <EmailText
          href={SOCIAL_LINKS.email}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Correo Electrónico"
        >
          {email}
        </EmailText>
        <CopyButtonWrapper>
          <CopyButtonPrimary
            onClick={copyToClipboard}
            aria-label="Copiar Correo"
            disabled={isCopy}
          >
            {isCopy ? <CopyCheck /> : <Copy />}
          </CopyButtonPrimary>
          <CopyButtonSecondary
            href={SOCIAL_LINKS.email}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Correo Electrónico"
          >
            <Email />
          </CopyButtonSecondary>
        </CopyButtonWrapper>
      </EmailOutline>
    </EmailContainer>
  );
};

export default EmailCopy;
