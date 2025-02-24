import { Container, Section, BlogGrid } from "./styles";
import { Link } from "react-router-dom";

import ImpostoRenda from "../../assets/imposto-renda.webp";
import RegimeTributario from "../../assets/regime-tributario.webp";
import PlanejamentoTributarioimg from "../../assets/planejamento-tributario.webp";

const posts = [
  {
    id: 1,
    title: "Imposto de Renda: Quem Precisa Declarar? Tire suas Dúvidas!",
    description:
      "Saiba se você é obrigado a declarar o IR e quais documentos são necessários.",
    img: ImpostoRenda,
    link: "/blog/imposto-de-renda",
  },
  {
    id: 2,
    title:
      "Simples Nacional, MEI ou Lucro Presumido: Qual é o Melhor para sua Empresa?",
    description:
      "Descubra qual regime tributário é mais vantajoso para seu negócio.",
    img: RegimeTributario,
    link: "/blog/regime-tributario",
  },
  {
    id: 3,
    title: "Planejamento Tributário: Como Pagar Menos Impostos de Forma Legal?",
    description:
      "Veja como otimizar os tributos da sua empresa e economizar dinheiro.",
    img: PlanejamentoTributarioimg,
    link: "/blog/planejamento-tributario",
  },
];

function Blog() {
  return (
    <Container>
      <Section>
        <h1>Blog Contábil: Dicas e Notícias </h1>
        <p>
          Fique por dentro das últimas novidades fiscais e dicas contábeis para
          manter sua empresa regularizada.
        </p>

        <BlogGrid>
          {posts.map((post) => (
            <div key={post.id} className="blog-card">
              <img src={post.img} alt={post.title} />
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <Link to={post.link}>Leia mais</Link>
            </div>
          ))}
        </BlogGrid>
      </Section>
    </Container>
  );
}

export default Blog;
