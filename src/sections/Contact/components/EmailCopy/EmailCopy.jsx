import { CopySvg, EmailSvg } from "../../../../assets/icons/button";
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
  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("Correo copiado al portapapeles");
      })
      .catch((err) => {
        alert("Error al copiar el correo", err);
      });
  };

  return (
    <EmailContainer>
      <EmailOutline>
        <EmailText>{email}</EmailText>
        <CopyButtonWrapper>
          <CopyButtonPrimary onClick={copyToClipboard}>
            <CopySvg />
          </CopyButtonPrimary>
          <CopyButtonSecondary onClick={copyToClipboard}>
            <EmailSvg />
          </CopyButtonSecondary>
        </CopyButtonWrapper>
      </EmailOutline>
    </EmailContainer>
  );
};

export default EmailCopy;
