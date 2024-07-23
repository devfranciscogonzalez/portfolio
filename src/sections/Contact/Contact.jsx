import { H3 } from "../../components";
import { Section } from "../Section.styles";
import { ContactForm, EmailCopy } from "./components";
import { ContactFormWrapper, ContactHeader } from "./Contact.styles";

const ContactSection = () => (
  <Section id="contact">

    <ContactHeader>
      <H3>Contaco</H3>
    </ContactHeader>
    <ContactFormWrapper>
      <ContactForm />
    {/* <EmailCopy /> */}
    </ContactFormWrapper>
  </Section>
);

export default ContactSection;
