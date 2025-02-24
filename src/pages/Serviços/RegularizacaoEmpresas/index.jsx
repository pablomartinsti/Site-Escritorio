import { Container, Section } from "./styles";
import CarroselBlog from "../../../components/CarroselBlog";
import RegularizacaoEmpresasImg from "../../../assets/regularizacao-empresas.webp";

function RegularizacaoEmpresas() {
  return (
    <Container>
      <Section>
        <h1>
          Regularização de Empresas: Resolva Pendências e Mantenha seu Negócio
          Legalizado
        </h1>

        <img src={RegularizacaoEmpresasImg} alt="Regularização de Empresas" />

        <h2>
          Precisa regularizar sua empresa? Nós cuidamos de tudo para você!
        </h2>
        <p>
          Se sua empresa está com{" "}
          <strong>pendências fiscais, tributárias ou cadastrais</strong>, isso
          pode gerar restrições e até impedir a continuidade do seu negócio.
          Nossa equipe especializada em{" "}
          <strong>Regularização de Empresas</strong> oferece um serviço completo
          para deixar sua empresa 100% legalizada e em conformidade com as
          normas.
        </p>

        <p>
          Com a <strong>Martir Assessoria Contábil</strong>, você conta com:
        </p>

        <ul>
          <li>
            <strong>Consulta da situação fiscal</strong> da empresa junto aos
            órgãos competentes.
          </li>
          <li>
            <strong>Resolução de débitos tributários</strong> e renegociação de
            dívidas.
          </li>
          <li>
            <strong>Atualização cadastral</strong> na Receita Federal, Junta
            Comercial e órgãos municipais/estaduais.
          </li>
          <li>
            <strong>Regularização de pendências trabalhistas</strong> e
            previdenciárias.
          </li>
          <li>
            <strong>Baixa ou reativação de CNPJ</strong>, conforme a necessidade
            da empresa.
          </li>
        </ul>

        <p>
          Evite problemas legais e mantenha sua empresa regularizada. Conte com
          especialistas para resolver qualquer pendência de forma rápida e
          eficiente!
        </p>

        <a
          href="https://wa.me/5534997624502"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          REGULARIZE SUA EMPRESA AGORA
        </a>
      </Section>

      <CarroselBlog />
    </Container>
  );
}

export default RegularizacaoEmpresas;
