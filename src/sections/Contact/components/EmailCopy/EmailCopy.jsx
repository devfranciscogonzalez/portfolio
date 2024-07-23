import { CopySvg, EmailSvg } from "../../../../assets/icons/button";
import {
  CopyButtonPrimary,
  CopyButtonSecondary,
  CopyButtonWrapper,
  EmailContainer,
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
      <EmailText>{email}</EmailText>
      <CopyButtonWrapper>
        <CopyButtonPrimary onClick={copyToClipboard}>
          <CopySvg />
        </CopyButtonPrimary>
        <CopyButtonSecondary onClick={copyToClipboard}>
          <EmailSvg />
        </CopyButtonSecondary>
      </CopyButtonWrapper>
    </EmailContainer>
  );
};

export default EmailCopy;
