import { Container, Section } from "./styles";
import CarroselBlog from "../../../components/CarroselBlog";
import ConsultoriaSuporteContabilImg from "../../../assets/ConsultoriaSuporteContabil.svg";

function ConsultoriaSuporteContabil() {
  return (
    <Container>
      <Section>
        <h1>
          Consultoria e Suporte na Área Contábil: Soluções Estratégicas para Seu
          Negócio
        </h1>

        <img
          src={ConsultoriaSuporteContabilImg}
          alt="Consultoria e Suporte na Área Contábil"
        />

        <h2>Precisa de orientação contábil para tomar decisões seguras?</h2>
        <p>
          A <strong>consultoria contábil</strong> é fundamental para que
          empresas tomem decisões estratégicas e evitem problemas fiscais. Com
          nosso <strong>suporte especializado</strong>, você terá total controle
          sobre a gestão financeira e contábil do seu negócio.
        </p>

        <p>
          Seja para esclarecer dúvidas, revisar processos ou implementar novas
          estratégias financeiras, a{" "}
          <strong>Martir Assessoria Contábil </strong>
          oferece uma consultoria personalizada para sua empresa.
        </p>

        <p>Com nossos serviços de consultoria, você terá:</p>

        {/* Lista formatada corretamente */}
        <ul>
          <li>
            <strong>Análise detalhada</strong> da contabilidade e das obrigações
            fiscais da sua empresa.
          </li>
          <li>
            <strong>Identificação de oportunidades</strong> para redução de
            custos e melhoria da gestão financeira.
          </li>
          <li>
            <strong>Orientação tributária</strong> para garantir o pagamento
            correto dos impostos.
          </li>
          <li>
            <strong>Suporte contábil contínuo</strong> para solucionar dúvidas e
            ajustar processos internos.
          </li>
          <li>
            <strong>Planejamento estratégico</strong> para crescimento
            financeiro e estabilidade empresarial.
          </li>
        </ul>

        <p>
          Tenha segurança na tomada de decisões e evite problemas futuros. Nossa
          equipe está pronta para oferecer todo o suporte que sua empresa
          precisa!
        </p>

        {/* Botão de contato via WhatsApp */}
        <a
          href="https://wa.me/5534997624502"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          AGENDE SUA CONSULTORIA AGORA
        </a>
      </Section>

      <CarroselBlog />
    </Container>
  );
}

export default ConsultoriaSuporteContabil;
