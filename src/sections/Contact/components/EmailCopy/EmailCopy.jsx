import { CopyButton, EmailContainer, EmailText } from "./EmailCopy.styles";

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
      <CopyButton onClick={copyToClipboard}>Copiar</CopyButton>
    </EmailContainer>
  );
};

export default EmailCopy;
