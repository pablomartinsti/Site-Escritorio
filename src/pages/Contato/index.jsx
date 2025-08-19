import Formulario from '../../components/Formulario';
import { Container, FormHeader } from './styles';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import News from '../../components/News';
function Contato() {
  return (
    <Container as="main" role="main">
      <Helmet>
        <title>Fale com a Martir Assessoria Contábil – Consultoria gratuita</title>
        <meta
          name="description"
          content="Entre em contato para tirar dúvidas e solicitar sua consultoria gratuita. Atendemos Uberlândia e todo o Brasil com soluções contábeis."
        />
        <link rel="canonical" href="https://martircontabil.com.br/contato" />
      </Helmet>

      <FormHeader as="header" aria-labelledby="formHeaderTitle">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
          id="formHeader"
        >
          <div className="img">
            <h1 id="formHeaderTitle">Solicite sua consultoria gratuita</h1>
            <p>Preencha o formulário e retornamos o contato.</p>
          </div>
        </motion.div>
      </FormHeader>

      {/* Se o componente do formulário aceitar, passe o aria-labelledby até o <form> */}
      <Formulario ariaLabelledby="formHeaderTitle" />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.4203042860113!2d-48.1886814!3d-18.912781399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a44fb3710118db%3A0x8a92809a839bd83d!2sMartir%20Assessoria%20Contabil!5e0!3m2!1spt-BR!2sbr!4v1755364576847!5m2!1spt-BR!2sbr"
        width="100%"
        height="450"
        style={{ border: 0, margin: '2rem 0', borderRadius: 12 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Mapa - Martir Assessoria Contábil"
      />

      <News />
    </Container>
  );
}

export default Contato;
