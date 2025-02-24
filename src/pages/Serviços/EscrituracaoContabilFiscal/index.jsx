import { Container, Section } from "./styles";
import CarroselBlog from "../../../components/CarroselBlog";
import EscrituracaoContabilFiscalImg from "../../../assets/Escrituracao-contabil.webp";

function EscrituracaoContabilFiscal() {
  return (
    <Container>
      <Section>
        <h1>
          Escrituração Contábil e Fiscal: Mantenha sua Empresa em Conformidade
        </h1>

        <img
          src={EscrituracaoContabilFiscalImg}
          alt="Escrituração Contábil e Fiscal"
        />

        <h2>Evite Multas e Organize sua Contabilidade com Eficiência</h2>
        <p>
          A <strong>Escrituração Contábil e Fiscal</strong> é um processo
          essencial para garantir que sua empresa esteja sempre dentro das
          normas da Receita Federal, evitando multas e complicações tributárias.
        </p>

        <p>
          Com a <strong>Martir Assessoria Contábil</strong> , sua empresa terá
          uma
          <strong> contabilidade organizada, segura e sempre atualizada</strong>
          . Nosso serviço inclui:
        </p>

        <ul>
          <li>
            Registro e organização de todas as movimentações financeiras da
            empresa.
          </li>
          <li>Classificação correta de receitas e despesas.</li>
          <li>
            Geração de relatórios contábeis, como Balanço Patrimonial e
            Demonstração de Resultados.
          </li>
          <li>
            Entrega das obrigações fiscais, como SPED Contábil e SPED Fiscal.
          </li>
          <li>
            Monitoramento de tributos pagos e análise de oportunidades para
            economia tributária.
          </li>
        </ul>

        <p>
          Ter uma escrituração contábil bem feita é essencial para a tomada de
          decisões estratégicas e para manter sua empresa{" "}
          <strong>regularizada e saudável financeiramente</strong>.
        </p>

        <a
          href="https://wa.me/5534997624502"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          SOLICITE UMA ANÁLISE CONTÁBIL
        </a>
      </Section>

      <CarroselBlog />
    </Container>
  );
}

export default EscrituracaoContabilFiscal;
