import { Container, Section } from "./styles";
import RegimeTributarioimg from "../../../assets/regime-tributario.webp";

function RegimeTributario() {
  return (
    <Container>
      <Section>
        <h1>
          Simples Nacional, MEI ou Lucro Presumido: Qual é o Melhor para sua
          Empresa?
        </h1>

        <img src={RegimeTributarioimg} alt="foto do regime tributario " />
        <p>
          Escolher o <strong>regime tributário</strong> correto é essencial para
          evitar o pagamento excessivo de impostos e garantir a legalidade do
          seu negócio. Mas afinal, qual a melhor opção para sua empresa? Vamos
          esclarecer as diferenças entre{" "}
          <strong>MEI, Simples Nacional e Lucro Presumido</strong> para ajudar
          você a tomar a melhor decisão.
        </p>

        <h2>📌 O que é MEI?</h2>
        <p>
          O <strong>Microempreendedor Individual (MEI)</strong> é um regime
          simplificado para quem fatura até{" "}
          <strong>R$ 81.000,00 por ano</strong>. As principais vantagens incluem
          a baixa carga tributária e a facilidade de formalização.
        </p>

        <h3>✅ Vantagens do MEI:</h3>
        <ul>
          <li>
            Baixa tributação: pagamento único mensal de impostos (DAS-MEI).
          </li>
          <li>Facilidade na emissão de notas fiscais.</li>
          <li>
            Direito a benefícios do INSS, como aposentadoria e auxílio-doença.
          </li>
        </ul>

        <h3>❌ Desvantagens do MEI:</h3>
        <ul>
          <li>Limitação de faturamento (máximo R$ 81.000,00/ano).</li>
          <li>Não pode ter mais de um funcionário.</li>
          <li>Nem todas as atividades podem se enquadrar no MEI.</li>
        </ul>

        <h2>📌 O que é Simples Nacional?</h2>
        <p>
          O <strong>Simples Nacional</strong> é um regime tributário voltado
          para pequenas empresas que faturam até{" "}
          <strong>R$ 4,8 milhões por ano</strong>. Ele unifica os tributos em
          uma única guia mensal, tornando o pagamento mais simples.
        </p>

        <h3>✅ Vantagens do Simples Nacional:</h3>
        <ul>
          <li>Tributação simplificada, com um único pagamento mensal.</li>
          <li>Menos burocracia em relação a outros regimes.</li>
          <li>
            Possibilidade de pagar menos impostos, dependendo do setor de
            atuação.
          </li>
        </ul>

        <h3>❌ Desvantagens do Simples Nacional:</h3>
        <ul>
          <li>Nem todas as atividades podem se enquadrar.</li>
          <li>
            A alíquota pode ser maior do que outros regimes em alguns casos.
          </li>
          <li>
            Empresas com grande volume de despesas podem não se beneficiar.
          </li>
        </ul>

        <h2>📌 O que é Lucro Presumido?</h2>
        <p>
          O <strong>Lucro Presumido</strong> é um regime para empresas que
          faturam até <strong>R$ 78 milhões por ano</strong>. Ele determina a
          base de cálculo dos impostos com base em um percentual pré-definido,
          que varia conforme a atividade da empresa.
        </p>

        <h3>✅ Vantagens do Lucro Presumido:</h3>
        <ul>
          <li>
            Possibilidade de pagar menos impostos, dependendo da margem de
            lucro.
          </li>
          <li>Não há obrigação de entrega do SPED Contábil.</li>
          <li>
            Mais flexibilidade para algumas empresas em comparação ao Simples
            Nacional.
          </li>
        </ul>

        <h3>❌ Desvantagens do Lucro Presumido:</h3>
        <ul>
          <li>Maior burocracia e exigência de contabilidade detalhada.</li>
          <li>
            Tributação fixa baseada em uma margem presumida, podendo ser
            desvantajosa para negócios com baixa lucratividade.
          </li>
          <li>Necessidade de apuração e recolhimento separado dos tributos.</li>
        </ul>

        <h2>📌 Qual regime é o melhor para minha empresa?</h2>
        <p>
          A escolha do regime tributário ideal depende de diversos fatores, como
          faturamento, atividade econômica e despesas da empresa. Para tomar a
          melhor decisão e evitar o pagamento excessivo de impostos, o ideal é
          contar com um <strong>contador especializado</strong>.
        </p>

        {/* Botão de contato via WhatsApp */}
        <a
          href="https://wa.me/5534997624502"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          FALE COM UM ESPECIALISTA AGORA
        </a>
      </Section>
    </Container>
  );
}

export default RegimeTributario;
