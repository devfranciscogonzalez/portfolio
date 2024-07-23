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
          propuesta de colaboración o simplemente quieres saludar, no dudes en
          ponerte en contacto conmigo. Estoy siempre abierto a nuevas
          oportunidades y emocionado por conectar con personas apasionadas por
          la tecnología.
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
