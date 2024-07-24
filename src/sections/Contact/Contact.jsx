import { H3, Paragraph } from "../../components";
import { Section } from "../Section.styles";
import { ContactForm, EmailCopy } from "./components";
import {
  ContactContainer,
  ContactFormWrapper,
  ContactHeader,
} from "./Contact.styles";

const ContactSection = () => (
  <Section $variant="center" id="contact">
    <ContactContainer>
      <ContactHeader>
        <H3>Contaco</H3>
        <Paragraph>
          ¡Gracias por visitar mi portafolio! Si tienes alguna pregunta,
          propuesta de colaboración completa el formulario y me pondre en
          contacto contigo o puedes contactarme por mis redes sociales.
        </Paragraph>
      </ContactHeader>
      <ContactFormWrapper>
        <ContactForm />
        <EmailCopy />
      </ContactFormWrapper>
    </ContactContainer>
  </Section>
);

export default ContactSection;
