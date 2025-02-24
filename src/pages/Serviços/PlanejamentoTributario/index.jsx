import { Container, Section } from "./styles";
import CarroselBlog from "../../../components/CarroselBlog";
import PlanejamentoTributarioImg from "../../../assets/planejamento-tributario.png";

function PlanejamentoTributario() {
  return (
    <Container>
      <Section>
        <h1>Planejamento Tributário: Pague Menos Impostos de Forma Legal</h1>

        <img src={PlanejamentoTributarioImg} alt="Planejamento Tributário" />

        <h2>Reduza sua carga tributária e aumente os lucros da sua empresa!</h2>
        <p>
          Você sabia que sua empresa pode estar pagando mais impostos do que
          realmente deveria? O <strong>Planejamento Tributário</strong> é uma
          estratégia essencial para **reduzir custos, evitar multas e manter sua
          empresa sempre regularizada**.
        </p>

        <p>
          Com a nossa consultoria, analisamos o seu negócio e identificamos as
          melhores opções para **diminuir impostos de forma legal**. Nosso
          trabalho inclui:
        </p>

        {/* Lista formatada corretamente */}
        <ul>
          <li>
            Escolha do melhor regime tributário: Simples Nacional, Lucro
            Presumido ou Lucro Real.
          </li>
          <li>
            Revisão de tributos pagos para identificar oportunidades de
            economia.
          </li>
          <li>
            Planejamento estratégico para pagar apenas os impostos necessários.
          </li>
          <li>
            Prevenção de autuações fiscais e redução de riscos com a Receita
            Federal.
          </li>
          <li>Recuperação de créditos tributários pagos indevidamente.</li>
        </ul>

        <p>
          Com um planejamento tributário eficiente, sua empresa pode economizar
          milhares de reais todos os anos. Não corra riscos desnecessários!
          Conte com a nossa expertise para garantir que sua empresa pague menos
          impostos de forma legal e segura.
        </p>

        <a
          href="https://wa.me/5534997624502"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          FALE COM UM ESPECIALISTA
        </a>
      </Section>

      <CarroselBlog />
    </Container>
  );
}

export default PlanejamentoTributario;
