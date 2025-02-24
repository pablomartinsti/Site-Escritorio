import { Container, Section } from "./styles";
import CarroselBlog from "../../../components/CarroselBlog";
import DeclaracaoImpostoRendaImg from "../../../assets/declaracao-irpf.png";

function DeclaracaoImpostoRenda() {
  return (
    <Container>
      <Section>
        <h1>
          Declaração de Imposto de Renda: Evite Multas e Fique em Dia com a
          Receita Federal
        </h1>

        <img
          src={DeclaracaoImpostoRendaImg}
          alt="Declaração de Imposto de Renda"
        />

        <h2>Precisa declarar o Imposto de Renda? Deixe com a gente!</h2>
        <p>
          A <strong>Declaração de Imposto de Renda Pessoa Física (IRPF)</strong>{" "}
          é obrigatória para quem ultrapassa os limites de rendimentos definidos
          pela Receita Federal. Porém, muitos contribuintes acabam pagando{" "}
          <strong>mais impostos do que deveriam</strong> por falta de
          planejamento ou conhecimento.
        </p>

        <p>
          Com a <strong>Martir Assessoria Contábil</strong>, você garante uma{" "}
          <strong>declaração correta, segura e otimizada</strong>, sem riscos de
          cair na malha fina. Nosso serviço inclui:
        </p>

        <ul>
          <li>
            <strong>Preenchimento correto e seguro</strong> da sua declaração.
          </li>
          <li>
            <strong>Análise para identificar possíveis deduções</strong> e pagar
            menos impostos.
          </li>
          <li>
            <strong>Correção de erros</strong> em declarações anteriores.
          </li>
          <li>
            <strong>Acompanhamento do processamento</strong> junto à Receita
            Federal.
          </li>
          <li>
            <strong>Solicitação de restituição</strong> caso tenha valores a
            receber.
          </li>
        </ul>

        <p>
          Evite dores de cabeça e faça sua declaração com{" "}
          <strong>especialistas em imposto de renda</strong>. Não corra riscos
          com informações erradas ou omissões que possam gerar multas!
        </p>

        <a
          href="https://wa.me/5534997624502"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          FAÇA SUA DECLARAÇÃO AGORA
        </a>
      </Section>

      <CarroselBlog />
    </Container>
  );
}

export default DeclaracaoImpostoRenda;
