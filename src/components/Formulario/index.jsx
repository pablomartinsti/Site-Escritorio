import { useRef, useState, useCallback } from "react";
import emailjs from "@emailjs/browser";
import { Container, Section } from "./styles";
import { FaEnvelope, FaUser, FaPhone, FaWhatsapp } from "react-icons/fa";
import InputMask from "react-input-mask";
import { z } from "zod";

const formSchema = z.object({
  from_name: z.string().min(3, "Nome precisa ter pelo menos 3 caracteres"),
  from_email: z.string().email("E-mail inválido"),
  phone: z.string().min(10, "Número de telefone inválido"),
  message: z
    .string()
    .min(10, "A mensagem precisa ter pelo menos 10 caracteres"),
});

function Formulario() {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = useCallback(async (e) => {
    e.preventDefault();
    setIsSending(true);
    setMessage("");
    setErrorMessage("");

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    const result = formSchema.safeParse(data);
    if (!result.success) {
      const errorMessages = result.error.errors
        .map((err) => err.message)
        .join(", ");
      setErrorMessage(errorMessages);
      setMessage(errorMessages);
      setIsSending(false);
      return;
    }

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setMessage("Mensagem enviada com sucesso!");
      formRef.current.reset();
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      setErrorMessage("Erro ao enviar mensagem. Tente novamente.");
      setMessage("Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSending(false);
    }
  }, []);

  return (
    <Container>
      <Section>
        <div className="box-cta">
          <div className="box">
            <h2>
              Conte com Nossa Experiência para Soluções Contábeis Personalizadas
            </h2>
            <p>
              Simplifique suas finanças! Estamos aqui para ajudar você a
              alcançar os melhores resultados na gestão contábil do seu negócio.
              Preencha o formulário ou entre em contato pelo WhatsApp ou e-mail.
            </p>

            <div>
              <div className="icon">
                <FaWhatsapp size="20" color="#E8B931" />
                <a
                  href="https://wa.me/5534997624502"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  (34) 9 9762-4502
                </a>
              </div>
              <div className="icon">
                <FaEnvelope size="20" color="#E8B931" />
                <a href="mailto:karinehelenacontadora@gmail.com">
                  Karinehelenacontadora@gmail.com
                </a>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={sendEmail}>
            <div className="input-group">
              <label htmlFor="name">Nome</label>
              <div className="input-box">
                <FaUser className="icon-input" aria-hidden="true" />
                <input
                  type="text"
                  id="name"
                  name="from_name"
                  placeholder="Digite seu nome"
                  required
                  disabled={isSending}
                  aria-label="Nome completo"
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <div className="input-box">
                <FaEnvelope className="icon-input" aria-hidden="true" />
                <input
                  type="email"
                  id="email"
                  name="from_email"
                  placeholder="Digite seu e-mail"
                  required
                  disabled={isSending}
                  aria-label="Endereço de e-mail"
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="phone">Telefone</label>
              <div className="input-box">
                <FaPhone className="icon-input" aria-hidden="true" />
                <InputMask
                  mask="(99) 9 9999-9999"
                  maskChar={null}
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="(34) 9 9762-4502"
                  required
                  disabled={isSending}
                  aria-label="Telefone"
                />
              </div>
            </div>

            <div className="input-group">
              <label htmlFor="message">Mensagem</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Escreva sua mensagem aqui..."
                required
                disabled={isSending}
              ></textarea>
            </div>

            {message && (
              <p className={`message ${errorMessage ? "error" : "success"}`}>
                {message}
              </p>
            )}

            <button type="submit" disabled={isSending}>
              {isSending ? "Enviando..." : "Solicitar Consultoria Gratuita"}
            </button>
          </form>
        </div>
      </Section>
    </Container>
  );
}

export default Formulario;
