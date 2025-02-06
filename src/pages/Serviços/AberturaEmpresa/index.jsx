import { Container, Section } from "./styles";

import CarroselBlog from "../../../components/CarroselBlog";

function Empresas() {
  return (
    <Container>
      <Section>
        <h1>
          Abertura de Empresa: Transforme Seu Sonho em Realidade com Facilidade!
        </h1>
        <h2>Você Sonha em Ter Seu Próprio Negócio?</h2>
        <p>
          Já imaginou ter sua própria empresa, mas não sabe por onde começar? A
          burocracia parece complicada e cheia de desafios? Não se preocupe! A
          Martir Assessoria Contábil está aqui para facilitar todo o processo
          para você.
        </p>
        <p>
          Com anos de experiência e um time especializado, cuidamos de tudo para
          que você possa focar no que realmente importa: fazer seu negócio
          crescer! Oferecemos um serviço completo, que inclui:
        </p>
        <li>Consulta e escolha do melhor tipo de empresa para você.</li>
        <li>Registro no CNPJ e Junta Comercial.</li>
        <li>Inscrição Estadual e Municipal.</li>
        <li>Emissão de alvarás e licenças necessárias.</li>
        <li>Orientação tributária para pagar menos impostos dentro da lei.</li>
        <p>
          Não perca tempo nem dinheiro com processos demorados e confusos. Com
          nosso suporte, você evita erros e garante que sua empresa esteja 100%
          regularizada, pronta para operar sem dores de cabeça.
        </p>
        <a>SOLICITE SEU ORÇAMENTO</a>
      </Section>

      <CarroselBlog />
    </Container>
  );
}

export default Empresas;
