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

const EMAILJS_ID = {
  serviceId: "service_jn22ztn",
  templateId: "template_ar0ridz",
  publicKey: "rWNkzNXICzokntHK6",
};

const ContactForm = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        EMAILJS_ID.serviceId,
        EMAILJS_ID.templateId,
        form.current,
        EMAILJS_ID.publicKey
      )
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
