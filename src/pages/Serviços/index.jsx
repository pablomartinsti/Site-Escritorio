import { Container, Section, H1 } from "./styles";
import Cta from "../../components/Formulario";
import CarroselBlog from "../../components/CarroselBlog";
import Card from "../../components/Card";
import AberturaEmpresa from "../../assets/abertura-empresas.png";
import PlanejamentoTributário from "../../assets/planejamento-tributario.png";
import GestãoFolhaPagamento from "../../assets/gestao-folha-pagamento.png";
import DeclaracaoPf from "../../assets/declaracao-irpf.png";
import DeclaracaoPj from "../../assets/declaracao-irpj.png";
import RegularizaçãoEmpresas from "../../assets/regularizacao-empresas.png";

function Serviços() {
  return (
    <Container>
      <Section>
        <H1>Nossos Serviços</H1>
        <p style={{ margin: "1rem 0", textAlign: "center" }}>
          Oferecemos soluções contábeis estratégicas para empresas e pessoas
          físicas.
        </p>

        <div className="box">
          <div>
            <Card
              title="Declaração de Imposto de Renda Pessoa Física"
              description="Deixe sua declaração em dia com suporte especializado e confiável."
              img={DeclaracaoPf}
            />
          </div>
          <div>
            <Card
              title="Declaração de Imposto de Renda Pessoa Jurídica"
              description="Evite problemas fiscais com declarações feitas de forma segura e eficiente."
              img={DeclaracaoPj}
            />
          </div>
          <div>
            <Card
              title="Regularização de Empresas"
              description="Resolva pendências e mantenha sua empresa em conformidade legal."
              img={RegularizaçãoEmpresas}
              alt="Regularização de Empresas"
            />
          </div>
          <div>
            <Card
              title="Abertura de Empresas"
              description="Inicie sua empresa com suporte completo na documentação e registros necessários."
              img={AberturaEmpresa}
            />
          </div>
          <div>
            <Card
              title="Planejamento Tributário"
              description="Reduza custos com um planejamento fiscal estratégico e personalizado."
              img={PlanejamentoTributário}
            />
          </div>
          <div>
            <Card
              title="Gestão de Folha de Pagamento"
              description="Administre salários e encargos trabalhistas com precisão e segurança."
              img={GestãoFolhaPagamento}
            />
          </div>
          <div>
            <Card
              title="Declaração de Imposto de Renda Pessoa Física"
              description="Deixe sua declaração em dia com suporte especializado e confiável."
              img={DeclaracaoPf}
            />
          </div>
          <div>
            <Card
              title="Declaração de Imposto de Renda Pessoa Jurídica"
              description="Evite problemas fiscais com declarações feitas de forma segura e eficiente."
              img={DeclaracaoPj}
            />
          </div>
          <div>
            <Card
              title="Regularização de Empresas"
              description="Resolva pendências e mantenha sua empresa em conformidade legal."
              img={RegularizaçãoEmpresas}
              alt="Regularização de Empresas"
            />
          </div>
        </div>
      </Section>

      <Cta />
      <CarroselBlog />
    </Container>
  );
}

export default Serviços;
