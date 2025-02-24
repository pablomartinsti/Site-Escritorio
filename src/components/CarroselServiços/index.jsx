import { Helmet } from "react-helmet-async";
import Card from "../Card";
import { Container, Section } from "./styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import AberturaEmpresa from "../../assets/abertura-empresas.png";
import PlanejamentoTributário from "../../assets/planejamento-tributario.png";
import GestãoFolhaPagamento from "../../assets/gestao-folha-pagamento.png";
import DeclaracaoPf from "../../assets/declaracao-irpf.png";
import DeclaracaoPj from "../../assets/declaracao-irpj.png";
import RegularizacaoEmpresas from "../../assets/regularizacao-empresas.png";

const servicos = [
  {
    title: "Abertura de Empresas",
    description:
      "Inicie sua empresa com suporte completo na documentação e registros necessários.",
    img: AberturaEmpresa,
    alt: "Imagem ilustrativa de abertura de empresas",
    link: "servico/abertura-de-empresa",
  },
  {
    title: "Planejamento Tributário",
    description:
      "Reduza custos com um planejamento fiscal estratégico e personalizado.",
    img: PlanejamentoTributário,
    alt: "Imagem ilustrativa de planejamento tributário",
    link: "servico/planejamento-tributario",
  },
  {
    title: "Gestão de Folha de Pagamento",
    description:
      "Administre salários e encargos trabalhistas com precisão e segurança.",
    img: GestãoFolhaPagamento,
    alt: "Imagem ilustrativa de gestão de folha de pagamento",
  },
  {
    title: "Declaração de Imposto de Renda Pessoa Física",
    description:
      "Deixe sua declaração em dia com suporte especializado e confiável.",
    img: DeclaracaoPf,
    alt: "Imagem ilustrativa de declaração de imposto de renda pessoa física",
  },
  {
    title: "Declaração de Imposto de Renda Pessoa Jurídica",
    description:
      "Evite problemas fiscais com declarações feitas de forma segura e eficiente.",
    img: DeclaracaoPj,
    alt: "Imagem ilustrativa de declaração de imposto de renda pessoa jurídica",
  },
  {
    title: "Regularização de Empresas",
    description:
      "Resolva pendências e mantenha sua empresa em conformidade legal.",
    img: RegularizacaoEmpresas,
    alt: "Imagem ilustrativa de regularização de empresas",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  adaptiveHeight: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
    { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
};

function Serviço() {
  return (
    <Container>
      <Helmet>
        <title>Serviços Contábeis | Martir Assessoria Contábil</title>
        <meta
          name="description"
          content="Oferecemos serviços de contabilidade para empresas, incluindo abertura de empresa, planejamento tributário, gestão de folha de pagamento e mais."
        />
        <meta
          name="keywords"
          content="contabilidade, abertura de empresa, planejamento tributário, folha de pagamento, imposto de renda, regularização de empresas"
        />
        <meta
          property="og:title"
          content="Serviços Contábeis | Martir Assessoria Contábil"
        />
        <meta
          property="og:description"
          content="Conheça os serviços da Martir Assessoria Contábil e veja como podemos ajudar sua empresa a crescer."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seusite.com/servicos" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Martir Assessoria Contábil - Serviços",
            description: "Serviços contábeis especializados para empresas.",
            provider: {
              "@type": "LocalBusiness",
              name: "Martir Assessoria Contábil",
              url: "https://seusite.com",
            },
            serviceType: servicos.map((s) => s.title),
            image: servicos.map((s) => s.img),
          })}
        </script>
      </Helmet>

      <Section>
        <h2>Soluções Inteligentes para Sua Empresa</h2>
        <Slider {...settings}>
          {servicos.map(({ title, description, img, alt, link }, index) => (
            <Card
              key={index}
              title={title}
              description={description}
              img={img}
              alt={alt}
              link={link}
            />
          ))}
        </Slider>
      </Section>
    </Container>
  );
}

export default Serviço;
