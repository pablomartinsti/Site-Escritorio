import Card from "../Card";
import { Container, Section } from "./styles";

import EviteMultas from "../../assets/Evite Multas e Problemas Fiscais Mantenha a Contabilidade em Dia.png";
import ReduzaImpostosPlanejamento from "../../assets/Reduza Impostos Planejamento.png";
import FluxoCaixaSaudável from "../../assets/Fluxo de Caixa Saudável.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const blogPosts = [
  {
    title: "Evite Multas e Problemas Fiscais",
    description:
      "Proteja seu negócio contra multas fiscais, Mantenha todas as obrigações legais em dia, Evite prejuízos e garanta tranquilidade.",
    img: EviteMultas,
    alt: "Imagem ilustrativa sobre evitar multas fiscais",
  },
  {
    title: "Reduza Impostos C/ Planejamento",
    description:
      "Pague menos impostos, Descubra como economizar com estratégias fiscais, Aumente sua margem de lucro.",
    img: ReduzaImpostosPlanejamento,
    alt: "Imagem ilustrativa sobre planejamento tributário",
  },
  {
    title: "Fluxo de Caixa Saudável",
    description:
      "Suas finanças estão sob controle? Entenda entradas e saídas com clareza, Tome decisões seguras e melhore o desempenho.",
    img: FluxoCaixaSaudável,
    alt: "Imagem ilustrativa sobre fluxo de caixa saudável",
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
              />
            ))}
          </Slider>
        </div>
      </Section>
    </Container>
  );
}

export default Carrosel;
