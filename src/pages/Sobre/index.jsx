import { Container, Section, H1, H2 } from "./styles";
import CarroselServiços from "../../components/CarroselServiços";
import Formulario from "../../components/Formulario";
import CarroselBlog from "../../components/CarroselBlog";

import img from "../../assets/sobre-martir-assessoria-contabil.png";
function Sobre() {
  return (
    <Container>
      <Section>
        <div className="img">
          <H1>Sobre a Martir Assessoria Contábil</H1>
        </div>
        <div className="box-sobre">
          <img src={img} alt="sobre a martir assessoria contabil" />
          <div className="box-conteudo">
            <H2>Compromisso com a sua Tranquilidade Financeira</H2>
            <p>
              {" "}
              A Martir Assessoria Contábil nasceu com o propósito de oferecer
              suporte contábil completo para empresas e pessoas físicas,
              garantindo segurança, organização e conformidade fiscal.
            </p>
            <p>
              Estamos há 2 anos no mercado, mas nossa fundadora e contadora
              possui mais de 10 anos de experiência na área contábil, atuando
              com gestão financeira, tributos e planejamento estratégico para
              diversos segmentos.
            </p>
            <p>
              {" "}
              Nosso objetivo é descomplicar a contabilidade e ajudar nossos
              clientes a crescerem de forma segura e sustentável.
            </p>
            <p>
              <span> ✔ </span>Atendimento personalizado e humanizado
            </p>
            <p>
              {" "}
              <span> ✔ </span>Soluções contábeis eficientes e estratégicas
            </p>
            <p>
              {" "}
              <span> ✔ </span>Atualização constante sobre leis e regulamentações
            </p>
            <p>
              {" "}
              <span> ✔ </span>Compromisso com o crescimento do seu negócio
            </p>
            <p>
              {" "}
              <span> ✔ </span>Atendemos empresas e profissionais de diversos
              setores
            </p>
          </div>
        </div>
        <div className="box-cards">
          <div className="cards">
            <H2>Missão 🎯</H2>
            <p>
              Oferecer soluções contábeis estratégicas e personalizadas,
              garantindo segurança fiscal, organização financeira e crescimento
              sustentável para empresas e pessoas físicas.
            </p>
          </div>
          <div className="cards">
            <H2>Visão 🚀</H2>
            <p>
              Ser referência em assessoria contábil, reconhecida pela
              excelência, confiabilidade e inovação, proporcionando uma
              experiência diferenciada aos nossos clientes.
            </p>
          </div>
          <div className="cards">
            <H2>Valores 🏛️</H2>
            <p>
              ✅ Ética {"\n"} ✅ Transparência {"\n"} ✅ Compromisso
              {"\n"} ✅ Inovação
              {"\n"} ✅ Excelência {"\n"} ✅ Confiança
            </p>
          </div>{" "}
        </div>
      </Section>

      <CarroselServiços />

      <Formulario />
      <CarroselBlog />
    </Container>
  );
}

export default Sobre;
