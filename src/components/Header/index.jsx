import { useState, useCallback, useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { GoChevronRight } from 'react-icons/go';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

import logo from '../../assets/martir-assessoria-contabil.webp';
import colors from '../../styles/colors';
import { Container, HeaderTop, HeaderBottom, Logo, HamburgerIcon, Nav, DrawerContent } from './styles';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = (to) => pathname === to || pathname.startsWith(`${to}/`);
  const isServicos = pathname.startsWith('/servicos');

  const handleSubMenuClick = (menuKey) => {
    setOpenSubMenu((prev) => (prev === menuKey ? null : menuKey));
  };

  const toggleDrawer = useCallback((open) => {
    setDrawerOpen(open);
  }, []);

  const menuItems = useMemo(
    () => [
      { text: 'Home', link: '/' },
      { text: 'Sobre', link: '/sobre' },
      {
        text: 'Serviços',
        link: '/servicos/abertura-de-empresas',
        submenu: [
          { text: 'Abertura de Empresas', link: '/servicos/abertura-de-empresas' },
          { text: 'Contabilidade Mensal', link: '/servicos/contabilidade-mensal' },
          { text: 'Planejamento Tributário', link: '/servicos/planejamento-tributario' },
          { text: 'Consultoria Contábil', link: '/servicos/consultoria-contabil' },
          { text: 'Imposto de Renda', link: '/servicos/imposto-de-renda' },
          { text: 'Certificado Digital', link: '/servicos/certificado-digital' }
        ]
      },
      { text: 'Blog', link: '/blog' },
      { text: 'Contato', link: '/contato' }
    ],
    []
  );

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Container as="header" role="banner">
      {/* Skip link para acessibilidade por teclado */}
      <a href="#conteudo-principal" className="skip-link">
        Pular para o conteúdo
      </a>

      <HeaderTop>
        <section>
          <div className="box-contato">
            <div className="contato">
              <a href="tel:+5534996571156" aria-label="Ligar para (34) 99657-1156">
                <AiOutlinePhone size="20" />
                <p>(34) 99657-1156</p>
              </a>
            </div>
            <div className="contato">
              <a href="mailto:comercial@martircontabil.com.br" aria-label="Enviar um e-mail">
                <AiOutlineMail size="20" />
                <p>comercial@martircontabil.com.br</p>
              </a>
            </div>
          </div>

          <div className="box-icon" aria-label="Redes sociais">
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
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
          </div>
        </section>
      </HeaderTop>

      <HeaderBottom isScrolled={isScrolled}>
        <section>
          <Link to="/" aria-label="Ir para a página inicial">
            <Logo src={logo} alt="Martir Assessoria Contábil" width="160" height="48" />
          </Link>

          <HamburgerIcon onClick={() => toggleDrawer(true)} aria-label="Abrir menu">
            <MenuIcon className="icon" />
          </HamburgerIcon>

          <Nav role="navigation" aria-label="Navegação principal">
            {menuItems.map(({ text, link, submenu }) =>
              submenu ? (
                <div className="dropdown" key={text} onMouseLeave={() => setOpenSubMenu(null)}>
                  <button
                    type="button"
                    className="nav-button"
                    aria-haspopup="menu"
                    aria-expanded={openSubMenu === text}
                    aria-controls={`submenu-${text}`}
                    onClick={() => handleSubMenuClick(text)}
                    aria-current={isServicos ? 'page' : undefined} // deixa dourado quando está em /servicos/*
                  >
                    {text}
                  </button>
                  <div
                    id={`submenu-${text}`}
                    className={`dropdown-content ${openSubMenu === text ? 'open' : ''}`}
                    role="menu"
                  >
                    {submenu.map((item) => (
                      <Link
                        key={item.text}
                        to={item.link}
                        role="menuitem"
                        aria-current={isActive(item.link) ? 'page' : undefined}
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={text}
                  to={link}
                  className="nav-button"
                  aria-current={isActive(link) ? 'page' : undefined} // deixa dourado quando ativo
                >
                  {text}
                </Link>
              )
            )}
          </Nav>

          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => toggleDrawer(false)}
            ModalProps={{ keepMounted: true }}
          >
            <DrawerContent role="dialog" aria-label="Menu">
              <IconButton onClick={() => toggleDrawer(false)} aria-label="Fechar menu">
                <CloseIcon sx={{ '&:hover': { color: colors && colors.yellow ? colors.yellow : '#ffd15c' } }} />
              </IconButton>
              <List>
                {menuItems.map(({ text, link, submenu }) =>
                  submenu ? (
                    <div key={text}>
                      <ListItem button onClick={() => handleSubMenuClick(text)} sx={{ cursor: 'pointer' }}>
                        <ListItemText primary={text} />
                        <GoChevronRight
                          size={20}
                          color="#fff"
                          style={{
                            transform: openSubMenu === text ? 'rotate(90deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s'
                          }}
                        />
                      </ListItem>

                      {openSubMenu === text &&
                        submenu.map((item) => (
                          <ListItem
                            key={item.text}
                            button
                            component={Link}
                            to={item.link}
                            onClick={() => {
                              toggleDrawer(false);
                              setOpenSubMenu(null);
                            }}
                            sx={{ pl: 4 }}
                          >
                            <ListItemText primary={item.text} />
                          </ListItem>
                        ))}
                    </div>
                  ) : (
                    <ListItem key={text} button component={Link} to={link} onClick={() => toggleDrawer(false)}>
                      <ListItemText primary={text} />
                      <GoChevronRight size={20} color="#fff" />
                    </ListItem>
                  )
                )}
              </List>
            </DrawerContent>
          </Drawer>
        </section>
      </HeaderBottom>
    </Container>
  );
}

export default Header;
