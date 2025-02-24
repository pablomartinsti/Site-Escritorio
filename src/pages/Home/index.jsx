import { lazy, Suspense } from "react";
import {
  Container,
  Section,
  BoxHome,
  BoxDiferencial,
  BoxDepoimentos,
} from "./styles";

import LockResetIcon from "@mui/icons-material/LockReset";
import LanguageIcon from "@mui/icons-material/Language";
import StarIcon from "@mui/icons-material/Star";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import Formulario from "../../components/Formulario";

const CarroselServiços = lazy(() =>
  import("../../components/CarroselServiços")
);
const CarroselBlog = lazy(() => import("../../components/CarroselBlog"));

const diferenciais = [
  {
    icon: (
      <LockResetIcon
        sx={{ fontSize: "2rem", color: "#d7bb65" }}
        aria-hidden="true"
      />
    ),
    title: "Segurança Jurídica",
    description:
      "Evite problemas fiscais e mantenha sua empresa 100% em conformidade.",
  },
  {
    icon: (
      <LanguageIcon
        sx={{ fontSize: "2rem", color: "#d7bb65" }}
        aria-hidden="true"
      />
    ),
    title: "Atendimento em Todo o Brasil",
    description:
      "Seja presencial ou online, estamos prontos para ajudá-lo onde você estiver.",
  },
  {
    icon: (
      <CurrencyExchangeIcon
        sx={{ fontSize: "2rem", color: "#d7bb65" }}
        aria-hidden="true"
      />
    ),
    title: "Economia e Planejamento",
    description: "Aproveite ao máximo incentivos fiscais e reduza custos.",
  },
  {
    icon: (
      <AccessTimeIcon
        sx={{ fontSize: "2rem", color: "#d7bb65" }}
        aria-hidden="true"
      />
    ),
    title: "Resolução Rápida",
    description: "Regularizamos sua situação fiscal em tempo recorde.",
  },
];

const depoimentos = [
  {
    nome: "Francisco Alves, Empresário",
    mensagem:
      "Excelente! Recomendo! Muito atenciosos, prestam um serviço de qualidade.",
  },
  {
    nome: "Valkiria Soares, Empresária",
    mensagem:
      "Muito atenciosa, sempre prestativa, nos ajuda muito. Extremamente competente e comprometida.",
  },
];

function Home() {
  return (
    <Container>
      <BoxHome>
        <Section>
          <h1>
            Simplifique sua Contabilidade e Cresça com a Melhor Assessoria!
          </h1>
          <p>
            Serviços contábeis personalizados para alavancar o sucesso da sua
            empresa.
          </p>
          <a
            href="https://wa.me/5534997624502"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale com um especialista agora no WhatsApp"
          >
            Fale com um especialista agora!
          </a>
        </Section>
      </BoxHome>

      <Suspense fallback={<div>Carregando serviços...</div>}>
        <CarroselServiços />
      </Suspense>

      <BoxDiferencial>
        <Section>
          <h2>Por Que Escolher Martir Assessoria Contábil?</h2>
          <div className="box">
            {diferenciais.map((item, index) => (
              <div key={index} className="conteudo">
                <div className="icon">{item.icon}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </BoxDiferencial>

      <BoxDepoimentos>
        <Section>
          <h2>Veja o que os nossos clientes estão dizendo!</h2>
          <div className="box">
            {depoimentos.map((cliente, index) => (
              <div key={index} className="card">
                <div>
                  <h3>{cliente.nome}</h3>
                </div>
                <p>{cliente.mensagem}</p>
                <div className="icon">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} sx={{ color: "#d7bb65" }} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>
      </BoxDepoimentos>

      <Formulario />

      <Suspense fallback={<div>Carregando blog...</div>}>
        <CarroselBlog />
      </Suspense>
    </Container>
  );
}

export default Home;
