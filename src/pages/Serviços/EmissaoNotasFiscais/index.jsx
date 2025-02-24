import { Container, Section } from "./styles";
import CarroselBlog from "../../../components/CarroselBlog";
import EmissaoNotasFiscaisImg from "../../../assets/EmissaoNotasFiscais.webp";

function EmissaoNotasFiscais() {
  return (
    <Container>
      <Section>
        <h1>Emissão de Notas Fiscais: Regularize e Organize sua Empresa</h1>

        <img src={EmissaoNotasFiscaisImg} alt="Emissão de Notas Fiscais" />

        <h2>Precisa emitir notas fiscais corretamente? Nós ajudamos você!</h2>
        <p>
          A <strong>emissão de notas fiscais</strong> é uma obrigação
          fundamental para empresas que vendem produtos ou prestam serviços.
          Emitir notas corretamente evita problemas com a Receita Federal e
          garante maior organização financeira para sua empresa.
        </p>

        <p>
          Com a <strong>Martir Assessoria Contábil</strong>, sua empresa recebe
          suporte completo para emissão de notas fiscais de maneira rápida e
          segura.
        </p>

        <p>Com nossos serviços de emissão de notas fiscais, você terá:</p>

        {/* Lista formatada corretamente */}
        <ul>
          <li>
            <strong>Cadastro e habilitação</strong> da sua empresa para emissão
            de notas fiscais eletrônicas (NF-e e NFS-e).
          </li>
          <li>
            <strong>Configuração do sistema de notas fiscais</strong> de acordo
            com seu tipo de atividade.
          </li>
          <li>
            <strong>Orientação sobre tributos</strong> aplicáveis à sua nota
            fiscal.
          </li>
          <li>
            <strong>Suporte na emissão correta</strong> de notas fiscais para
            evitar erros e multas.
          </li>
          <li>
            <strong>Regularização de pendências</strong> caso sua empresa esteja
            com problemas na emissão de notas.
          </li>
        </ul>

        <p>
          Regularize a emissão das suas notas fiscais e evite problemas com a
          Receita Federal. Nossa equipe está pronta para auxiliar sua empresa
          com total segurança!
        </p>

        {/* Botão de contato via WhatsApp */}
        <a
          href="https://wa.me/5534997624502"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          SOLICITE SUPORTE PARA EMISSÃO DE NOTAS
        </a>
      </Section>

      <CarroselBlog />
    </Container>
  );
}

export default EmissaoNotasFiscais;
