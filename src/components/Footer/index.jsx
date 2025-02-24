import { Container, Logo } from "./styles";
import logo from "../../assets/martir-assessoria-contabil.webp";
import {
  FaInstagram,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";

const servicos = [
  { nome: "Abertura de Empresas", link: "/servico/abertura-de-empresa" },
  { nome: "Declaração de Imposto", link: "/servico/declaracao-imposto-renda" },
  { nome: "Planejamento Tributário", link: "/servico/planejamento-tributario" },
];

const navegacao = [
  { nome: "Serviços", link: "/servico" },
  { nome: "Sobre", link: "/sobre" },
  { nome: "Blog", link: "/blog" },
];

const contatos = [
  {
    icon: <AiOutlinePhone size="25" color="#fff" />,
    texto: "(34) 9 9762-4502",
    link: "tel:+5534997624502",
  },
  {
    icon: <AiOutlineMail size="25" color="#fff" />,
    texto: "Karinehelenacontadora@gmail.com",
    link: "mailto:Karinehelenacontadora@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt size="25" color="#fff" />,
    texto: "Rua: Alambique 229 Morumbi Uberlândia/MG",
    link: "https://www.google.com/maps/place/Martir+Assessoria+Contabil/@-18.9127814,-48.1912563,17z/data=!3m1!4b1!4m6!3m5!1s0x94a44f11492dff97:0x645d5a0699dbcaa3!8m2!3d-18.9127814!4d-48.1886814!16s%2Fg%2F11m5kl8ty7?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",
  },
];

const redesSociais = [
  {
    icon: <FaLinkedin size="25" color="#fff" />,
    link: "https://www.linkedin.com/",
    label: "LinkedIn",
  },
  {
    icon: <FaFacebook size="25" color="#fff" />,
    link: "https://www.facebook.com/profile.php?id=61572762038727",
    label: "Facebook",
  },
  {
    icon: <FaInstagram size="25" color="#fff" />,
    link: "https://www.instagram.com/martirassessoria/",
    label: "Instagram",
  },
];

function Footer() {
  return (
    <Container>
      <section>
        <div className="box-logo">
          <a href="/">
            <Logo src={logo} alt="logo do escritório de contabilidade" />
          </a>
          <p>Inovação e Transparência para o Sucesso Contábil</p>
          <div className="box-icon">
            {redesSociais.map(({ icon, link, label }) => (
              <a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        <div className="box-serviço">
          <h4>Serviços</h4>
          {servicos.map(({ nome, link }) => (
            <a key={nome} href={link}>
              {nome}
            </a>
          ))}
        </div>

        <div className="box-navegaçao">
          <h4>Navegação</h4>
          {navegacao.map(({ nome, link }) => (
            <a key={nome} href={link}>
              {nome}
            </a>
          ))}
        </div>

        <div className="box-contato">
          <h4>Contato</h4>
          {contatos.map(({ icon, texto, link }) => (
            <div key={texto} className="contato">
              {icon}
              <a href={link} target="_blank" rel="noopener noreferrer">
                {texto}
              </a>
            </div>
          ))}
        </div>
      </section>

      <div className="footer">
        <p>&copy; 2025 Martir Contábil. Todos os direitos reservados.</p>
      </div>
    </Container>
  );
}

export default Footer;
