import { Container, Section } from "./styles";
import ImpostoRenda from "../../../assets/imposto-renda.png";

function ImpostoDeRenda() {
  return (
    <Container>
      <Section>
        <h1>Imposto de Renda: Quem Precisa Declarar? Tire suas Dúvidas!</h1>

        <img src={ImpostoRenda} alt="foto imposto de renda" />

        <p>
          Todos os anos, milhares de brasileiros têm dúvidas sobre a{" "}
          <strong>Declaração do Imposto de Renda Pessoa Física (IRPF)</strong>.
          Para evitar problemas com a Receita Federal e manter suas obrigações
          em dia, veja quem precisa declarar e como fazer isso corretamente.
        </p>

        <h2>📌 Quem é obrigado a declarar o Imposto de Renda?</h2>
        <p>
          Se você se encaixa em qualquer uma das situações abaixo, precisa
          enviar sua declaração:
        </p>

        <ul>
          <li>
            Recebeu rendimentos tributáveis acima de{" "}
            <strong>R$ 30.639,90</strong> no ano anterior.
          </li>
          <li>
            Recebeu rendimentos isentos, não tributáveis ou tributados na fonte
            acima de <strong>R$ 200.000,00</strong>.
          </li>
          <li>
            Possui <strong>bens ou direitos acima de R$ 800.000,00</strong>{" "}
            (imóveis, veículos, investimentos, etc.).
          </li>
          <li>Realizou operações na Bolsa de Valores, mesmo sem lucro.</li>
          <li>
            Obteve receita bruta de atividade rural acima de{" "}
            <strong>R$ 153.199,50</strong>.
          </li>
          <li>
            Ganhou capital com a venda de bens (como imóveis) sujeitos à
            tributação.
          </li>
          <li>
            Se tornou residente no Brasil e permaneceu no país até 31 de
            dezembro do ano anterior.
          </li>
        </ul>

        <h2>📌 Quais documentos são necessários para declarar?</h2>
        <p>
          Para facilitar sua declaração, tenha os seguintes documentos em mãos:
        </p>
        <ul>
          <li>CPF e título de eleitor.</li>
          <li>
            Informes de rendimentos do empregador e instituições financeiras.
          </li>
          <li>Comprovantes de despesas médicas e educação.</li>
          <li>Documentos de bens (imóveis, veículos, investimentos, etc.).</li>
          <li>Recibos de aluguéis recebidos ou pagos.</li>
        </ul>

        <h2>📌 O que acontece se eu não declarar?</h2>
        <p>
          Se você estiver obrigado a declarar e não entregar dentro do prazo,
          poderá sofrer as seguintes penalidades:
        </p>
        <ul>
          <li>
            Multa mínima de <strong>R$ 165,74</strong>, podendo chegar a{" "}
            <strong>20% do imposto devido</strong>.
          </li>
          <li>
            Restrição no CPF, dificultando financiamentos e transações
            bancárias.
          </li>
          <li>
            Risco de cair na <strong>malha fina</strong> e precisar prestar
            esclarecimentos à Receita Federal.
          </li>
        </ul>

        <h2>📌 Como posso fazer minha declaração de forma segura?</h2>
        <p>
          Para evitar erros e garantir que você pague apenas o necessário, conte
          com um contador especializado! A{" "}
          <strong>Martir Assessoria Contábil</strong> pode cuidar de tudo para
          você de forma segura e eficiente.
        </p>

        {/* Botão de contato via WhatsApp */}
        <a
          href="https://wa.me/5534997624502"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          FAÇA SUA DECLARAÇÃO AGORA
        </a>
      </Section>
    </Container>
  );
}

export default ImpostoDeRenda;
