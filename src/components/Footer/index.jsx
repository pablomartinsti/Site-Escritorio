import { Link } from 'react-router-dom';
import { Container } from './styles';
import logo from '../../assets/martir-assessoria-contabil.webp';
import { FaInstagram, FaMapMarkerAlt, FaFacebook, FaLinkedin, FaClock } from 'react-icons/fa';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

const navegacao = [
  { nome: 'Home', link: '/' },
  { nome: 'Sobre', link: '/sobre' },
  { nome: 'Serviços', link: '/servicos/abertura-de-empresas' },
  { nome: 'Blog', link: '/blog' },
  { nome: 'Contato', link: '/contato' }
];

const solucoes = [
  { nome: 'Abertura de Empresas', link: '/servicos/abertura-de-empresas' },
  { nome: 'Contabilidade Mensal', link: '/servicos/contabilidade-mensal' },
  { nome: 'Planejamento Tributário', link: '/servicos/planejamento-tributario' },
  { nome: 'Consultoria Contábil', link: '/servicos/consultoria-contabil' },
  { nome: 'Imposto de Renda', link: '/servicos/imposto-de-renda' },
  { nome: 'Certificado Digital', link: '/servicos/certificado-digital' }
];

const contatos = [
  {
    icon: <AiOutlinePhone size={20} />,
    texto: '(34) 99657-1156',
    link: 'tel:+5534996571156'
  },
  {
    icon: <AiOutlineMail size={20} />,
    texto: 'comercial@martircontabil.com.br',
    link: 'mailto:comercial@martircontabil.com.br'
  },
  {
    icon: <FaMapMarkerAlt size={20} />,
    texto: `Rua Alambique, 229, Morumbi\nUberlândia - MG. CEP: 38407-309.`,
    link: 'https://www.google.com/maps/place/Martir+Assessoria+Contabil/@-18.9127814,-48.1912563,17z/data=!3m1!4b1!4m6!3m5!1s0x94a44fb3710118db:0x8a92809a839bd83d!8m2!3d-18.9127814!4d-48.1886814!16s%2Fg%2F11xlq8rcy0?entry=ttu'
  },
  {
    icon: <FaClock size={20} />,
    texto: `Segunda a Sexta: 08h às 18h \nSábado: 08h às 12h`,
    link: '#'
  }
];

function Footer() {
  return (
    <Container as="footer" role="contentinfo">
      <div className="footer-main">
        <nav className="footer-col-nav" aria-label="Navegação do rodapé">
          <h4>Navegação</h4>
          <ul>
            {navegacao.map(({ nome, link }) => (
              <li key={nome}>
                <Link to={link}>{nome}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <h4>Soluções</h4>
          <ul>
            {solucoes.map(({ nome, link }) => (
              <li key={nome}>
                <Link to={link}>{nome}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contato</h4>
          <ul className="contato-list">
            {contatos.map(({ icon, texto, link }) => (
              <li key={texto}>
                {link.startsWith('http') ? (
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {icon}
                    <span>{texto}</span>
                  </a>
                ) : (
                  <a href={link}>
                    {icon}
                    <span>{texto}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="logo">
          <img src={logo} alt="Martir Assessoria Contábil" width="160" height="48" />
          <p>
            Contabilidade com Propósito
            <br /> e Excelência
          </p>
          <div className="footer-social" aria-label="Redes sociais">
            <a
              href="https://www.linkedin.com/company/martir-assessoria-cont%C3%A1bil/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/martirassessoria/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Martir Assessoria Contábil. Todos os direitos reservados.</p>
      </div>
    </Container>
  );
}

export default Footer;
