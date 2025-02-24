import { Container, Section } from "./styles";
import CarroselBlog from "../../../components/CarroselBlog";
import ContabilidadeMensalImg from "../../../assets/contabilidade-mensal.png";

function ContabilidadeMensal() {
  return (
    <Container>
      <Section>
        <h1>
          Contabilidade Mensal: Gestão Financeira Completa e Sem Complicações
        </h1>

        <img src={ContabilidadeMensalImg} alt="Contabilidade Mensal" />

        <h2>Tenha uma contabilidade organizada e eficiente todos os meses!</h2>
        <p>
          A <strong>Contabilidade Mensal</strong> é essencial para manter sua
          empresa em conformidade com as obrigações fiscais e garantir uma
          gestão financeira saudável. Com a{" "}
          <strong>Martir Assessoria Contábil</strong>, você recebe um suporte
          completo para acompanhar todas as movimentações financeiras e tomar
          decisões estratégicas com segurança.
        </p>

        <p>Com nossos serviços de contabilidade mensal, você terá:</p>

        {/* Lista formatada corretamente */}
        <ul>
          <li>
            <strong>Registro e organização</strong> das transações financeiras
            da empresa.
          </li>
          <li>
            <strong>Apuração e emissão de guias</strong> de impostos mensais.
          </li>
          <li>
            <strong>Relatórios contábeis</strong> detalhados para análise e
            tomada de decisão.
          </li>
          <li>
            <strong>Assessoria em obrigações fiscais</strong> como SPED e
            declarações obrigatórias.
          </li>
          <li>
            <strong>Controle da folha de pagamento</strong> e encargos
            trabalhistas.
          </li>
        </ul>

        <p>
          Mantenha sua empresa regularizada, evite multas e tenha uma gestão
          financeira mais eficiente. Contrate nossa contabilidade mensal e
          garanta segurança e praticidade para seu negócio.
        </p>

        {/* Botão de contato via WhatsApp */}
        <a
          href="https://wa.me/5534997624502"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          CONTRATE A CONTABILIDADE MENSAL
        </a>
      </Section>

      <CarroselBlog />
    </Container>
  );
}

export default ContabilidadeMensal;
