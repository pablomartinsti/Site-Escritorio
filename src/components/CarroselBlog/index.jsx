import Card from "../Card";
import { Container, Section } from "./styles";

import ImpostoRenda from "../../assets/imposto-renda.webp";
import RegimeTributario from "../../assets/regime-tributario.webp";

import PlanejamentoTributarioimg from "../../assets/planejamento-tributario.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const blogPosts = [
  {
    title: "Imposto de Renda: Quem Precisa Declarar? Tire suas Dúvidas!",
    description:
      "Saiba se você é obrigado a declarar o IR e quais documentos são necessários.",
    img: ImpostoRenda,
    alt: "Imagem ilustrativa sobre imposto de renda",
    link: "/blog/imposto-de-renda",
  },
  {
    title:
      "Simples Nacional, MEI ou Lucro Presumido: Qual é o Melhor para sua Empresa?",
    description:
      "Descubra qual regime tributário é mais vantajoso para seu negócio.",
    img: RegimeTributario,
    alt: "Imagem ilustrativa sobre planejamento tributário",
    link: "/blog/regime-tributario",
  },
  {
    title: "Planejamento Tributário: Como Pagar Menos Impostos de Forma Legal?",
    description:
      "Veja como otimizar os tributos da sua empresa e economizar dinheiro.",
    img: PlanejamentoTributarioimg,
    alt: "Imagem ilustrativa sobre fluxo de caixa saudável",
    link: "/blog/planejamento-tributario",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true, // ✅ Evita warnings e cortes no conteúdo
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

function Carrosel() {
  return (
    <Container>
      <Section>
        <div className="box-card">
          <h2>
            Aprenda a reduzir impostos e otimizar sua gestão financeira. Confira
            nosso blog!
          </h2>
          <Slider {...settings}>
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                title={post.title}
                description={post.description}
                img={post.img}
                alt={post.alt}
                link={post.link}
              />
            ))}
          </Slider>
        </div>
      </Section>
    </Container>
  );
}

export default Carrosel;
