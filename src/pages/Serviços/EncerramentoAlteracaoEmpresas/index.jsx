import { Container, Section } from "./styles";
import CarroselBlog from "../../../components/CarroselBlog";
import EncerramentoAlteracaoEmpresasImg from "../../../assets/encerramento-alteracao-empresa.webp";

function EncerramentoAlteracaoEmpresas() {
  return (
    <Container>
      <Section>
        <h1>
          Encerramento e Alteração de Empresas: Regularize seu Negócio com
          Segurança
        </h1>

        <img
          src={EncerramentoAlteracaoEmpresasImg}
          alt="Encerramento e Alteração de Empresas"
        />

        <h2>
          Precisa alterar ou encerrar sua empresa? Nós cuidamos de tudo para
          você!
        </h2>
        <p>
          Seja para fazer alterações no CNPJ, mudar o regime tributário ou até
          mesmo encerrar suas atividades, a{" "}
          <strong>Martir Assessoria Contábil</strong> oferece suporte completo
          para garantir que tudo seja feito da forma correta e sem complicações.
        </p>

        <p>
          O processo de encerramento ou alteração de uma empresa envolve várias
          etapas burocráticas e fiscais. Nossa equipe especializada cuida de
          todos os detalhes, garantindo um processo rápido e seguro.
        </p>

        <p>Com nossos serviços, você conta com:</p>

        <ul>
          <li>
            <strong>Alteração de Razão Social, Endereço ou Atividades</strong>{" "}
            junto à Receita Federal.
          </li>
          <li>
            <strong>Mudança de Regime Tributário</strong> para garantir a melhor
            estratégia fiscal.
          </li>
          <li>
            <strong>Encerramento seguro</strong> de empresas, com baixa no CNPJ
            e órgãos reguladores.
          </li>
          <li>
            <strong>Regularização de pendências fiscais e tributárias</strong>{" "}
            antes do encerramento.
          </li>
          <li>
            <strong>Consultoria especializada</strong> para ajudar na tomada de
            decisão sobre mudanças na empresa.
          </li>
        </ul>

        <p>
          Evite multas e problemas futuros com um processo de encerramento ou
          alteração bem feito. Nossa equipe está pronta para auxiliar você do
          início ao fim!
        </p>

        <a
          href="https://wa.me/5534997624502"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          FALE COM UM ESPECIALISTA AGORA
        </a>
      </Section>

      <CarroselBlog />
    </Container>
  );
}

export default EncerramentoAlteracaoEmpresas;
