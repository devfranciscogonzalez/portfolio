import { H3 } from "../../components";
import { Section } from "../Section.styles";
import { ContactForm, EmailCopy } from "./components";
import { ContactFormWrapper, ContactHeader } from "./Contact.styles";

const ContactSection = () => (
  <Section $variant="center" id="contact">
    <ContactHeader>
      <H3>Contaco</H3>
    </ContactHeader>
    <ContactFormWrapper>
      <ContactForm />
    </ContactFormWrapper>
    <EmailCopy />
  </Section>
);

export default ContactSection;
