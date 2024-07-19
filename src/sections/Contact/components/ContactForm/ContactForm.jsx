import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FormFieldset, FormLabel } from "./ContactForm.styles";
// import { FormFieldset } from "./ContactForm.styles";

const EMAILJS_ID = {
  serviceId: "service_jn22ztn",
  templateId: "template_ar0ridz",
  publicKey: "rWNkzNXICzokntHK6",
};

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(EMAILJS_ID.serviceId, EMAILJS_ID.templateId, form.current, {
        publicKey: EMAILJS_ID.publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <FormFieldset>
        <legend>Formulario de Contacto</legend>
        <FormLabel>
          Nombre
          <input
            type="text"
            name="user_name"
            maxLength={50}
            required
            placeholder="Nombre"
          />
        </FormLabel>
        <FormLabel>
          Email
          <input
            type="email"
            name="user_email"
            maxLength={50}
            required
            placeholder="Email"
          />
        </FormLabel>
        <FormLabel>
          ¿En qué puedo ayudarte?
          <textarea
            name="message"
            rows={4}
            maxLength={500}
            required
            placeholder="Mensaje"
          />
        </FormLabel>
        <button type="submit">Enviar</button>
      </FormFieldset>
    </form>
  );
};

export default ContactForm;
