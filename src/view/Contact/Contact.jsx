import { ContactForm, EmailCopy, H3 } from "../../components";
import { ContactFormWrapper, ContactHeader } from "./Contact.styles";

const Contact = () => {
  return (
    <>
      <ContactHeader>
        <H3>Contaco</H3>
      </ContactHeader>
      <ContactFormWrapper>
        <ContactForm />
      </ContactFormWrapper>
      <EmailCopy />
    </>
  );
};

export default Contact;
