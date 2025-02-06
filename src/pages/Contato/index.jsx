import Formulario from "../../components/Formulario";
import { Container } from "./styles";
import CarroselBlog from "../../components/CarroselBlog";

function Contato() {
  return (
    <Container>
      <Formulario />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d943.6050760715027!2d-48.18868139999998!3d-18.912781400000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a44f3e0b5fe993%3A0xf725ef2becc9dcee!2sMartir%20Assessoria%20Cont%C3%A1bil%20%E2%80%93%20Escrit%C3%B3rio%20de%20Contabilidade%20em%20Uberl%C3%A2ndia!5e0!3m2!1sen!2sbr!4v1738253870159!5m2!1sen!2sbr"
        width="100%"
        height="450"
        style={{ border: 0, margin: "2rem 0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <CarroselBlog />
    </Container>
  );
}

export default Contato;
