import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Send, SendCheck } from "../../../../assets/icons/button";
import {
  ButtonForm,
  Form,
  FormFieldset,
  FormLabel,
  Input,
  TextArea,
} from "./ContactForm.styles";

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactForm = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(() => {
        setIsSent(true);
        form.current.reset();
        setTimeout(() => {
          setIsSent(false);
        }, 1000);
      });
  };

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <FormFieldset>
        <FormLabel>
          Nombre
          <Input
            type="text"
            name="user_name"
            maxLength={50}
            required
            placeholder="Francisco González"
          />
        </FormLabel>
        <FormLabel>
          Email
          <Input
            type="email"
            name="user_email"
            maxLength={50}
            required
            placeholder="devfranciscogonzalez@gmail.com"
          />
        </FormLabel>
        <FormLabel>
          ¿En qué puedo ayudarte?
          <TextArea
            name="message"
            rows={4}
            maxLength={500}
            required
            placeholder="Estoy interesado en colaborar contigo en un proyecto..."
          />
        </FormLabel>
        <ButtonForm type="submit">
          {isSent ? <SendCheck /> : <Send />}
          {isSent ? "Enviado" : "Enviar"}
        </ButtonForm>
      </FormFieldset>
    </Form>
  );
};

export default ContactForm;
