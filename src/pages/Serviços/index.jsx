import { Container, Section, H1 } from "./styles";
import Cta from "../../components/Formulario";
import CarroselBlog from "../../components/CarroselBlog";
import Card from "../../components/Card";
import AberturaEmpresa from "../../assets/abertura-empresas.webp";
import PlanejamentoTributário from "../../assets/planejamento-tributario.webp";
import EscrituracaoContabilFiscal from "../../assets/Escrituracao-contabil.webp";
import DeclaracaoPf from "../../assets/declaracao-irpf.webp";
import ContabilidadeMensalImg from "../../assets/contabilidade-mensal.webp";
import RegularizaçãoEmpresas from "../../assets/regularizacao-empresas.webp";
import EncerramentoAlteracaoEmpresa from "../../assets/encerramento-alteracao-empresa.webp";
import ConsultoriaSuporteContabil from "../../assets/ConsultoriaSuporteContabil.webp";
import EmissaoNotasFiscais from "../../assets/EmissaoNotasFiscais.webp";

function Serviços() {
  return (
    <Container>
      <Section>
        <H1>Nossos Serviços</H1>
        <h2>
          Oferecemos soluções contábeis estratégicas para empresas e pessoas
          físicas.
        </h2>

        <div className="box">
          <div>
            <Card
              title="Abertura de Empresas"
              description="Inicie sua empresa com suporte completo na documentação e registros necessários."
              img={AberturaEmpresa}
              link="/servico/abertura-de-empresa"
            />
          </div>
          <div>
            <Card
              title="Planejamento Tributário"
              description="Reduza custos com um planejamento fiscal estratégico e personalizado."
              img={PlanejamentoTributário}
              link="/servico/planejamento-tributario"
            />
          </div>
          <div>
            <Card
              title="Escrituração Contábil e Fiscal"
              description="Mantenha sua contabilidade organizada e evite problemas fiscais."
              img={EscrituracaoContabilFiscal}
              link="/servico/escrituracao-contabil-fiscal"
            />
          </div>
          <div>
            <Card
              title="Declaração de Imposto de Renda Pessoa Física"
              description="Deixe sua declaração em dia com suporte especializado e confiável."
              img={DeclaracaoPf}
              link="/servico/declaracao-imposto-renda"
            />
          </div>
          <div>
            <Card
              title="Contabilidade Mensal"
              description="Mantenha sua empresa em conformidade fiscal com uma contabilidade organizada e segura todos os meses."
              img={ContabilidadeMensalImg}
              link="/servico/contabilidade-mensal"
            />
          </div>
          <div>
            <Card
              title="Regularização de Empresas"
              description="Resolva pendências e mantenha sua empresa em conformidade legal."
              img={RegularizaçãoEmpresas}
              link="/servico/regularizacao-empresas"
            />
          </div>
          <div>
            <Card
              title="Encerramento e Alteração de Empresas"
              description="Realize mudanças no seu CNPJ ou encerre sua empresa com total segurança jurídica."
              img={EncerramentoAlteracaoEmpresa}
              link="/servico/encerramento-alteracao-empresas"
            />
          </div>
          <div>
            <Card
              title="Consultoria e Suporte na Área Contábil"
              description="Conte com um especialista para resolver dúvidas e garantir a melhor estratégia contábil para sua empresa."
              img={ConsultoriaSuporteContabil}
              link="/servico/consultoria-suporte-contabil"
            />
          </div>
          <div>
            <Card
              title="Emissão de Notas Fiscais"
              description="Regularize e administre a emissão de notas fiscais para sua empresa de forma simples e segura."
              img={EmissaoNotasFiscais}
              link="/servico/emissao-notas-fiscais"
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
