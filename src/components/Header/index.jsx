import { useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { GoChevronRight } from "react-icons/go";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

import logo from "../../assets/martir-assessoria-contabil.webp";
import colors from "../../styles/colors";
import {
  Container,
  HeaderTop,
  HeaderBottom,
  Logo,
  HamburgerIcon,
  Nav,
  DrawerContent,
} from "./styles";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = useCallback((open) => {
    setDrawerOpen(open);
  }, []);

  const menuItems = useMemo(
    () => [
      { text: "Home", link: "/" },
      { text: "Sobre", link: "/sobre" },
      { text: "Serviço", link: "/servico" },
      { text: "Blog", link: "/blog" },
      { text: "Contato", link: "/contato" },
    ],
    []
  );

  return (
    <Container>
      <HeaderTop>
        <div className="box-contato">
          <div className="contato">
            <a
              href="tel:+5534997624502"
              aria-label="Ligar para (34) 99762-4502"
            >
              <AiOutlinePhone size="20" color="#fff" />
              <p>(34) 99762-4502</p>
            </a>
          </div>
          <div className="contato">
            <a
              href="mailto:karinehelenacontadora@gmail.com"
              aria-label="Enviar um e-mail"
            >
              <AiOutlineMail size="20" color="#fff" />
              <p>karinehelenacontadora@gmail.com</p>
            </a>
          </div>
        </div>
        <div className="box-icon">
          <a
            href="https://wa.me/5534997624502"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size="25" className="icon" color="#fff" />
          </a>
          <a
            href="https://www.instagram.com/martirassessoria/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size="25" className="icon" color="#fff" />
          </a>
        </div>
      </HeaderTop>

      <HeaderBottom>
        <Link to="/">
          <Logo src={logo} alt="logo do escritório de contabilidade" />
        </Link>

        <HamburgerIcon onClick={() => toggleDrawer(true)}>
          <MenuIcon className="icon" />
        </HamburgerIcon>

        <Nav>
          {menuItems.map(({ text, link }) => (
            <Link key={text} to={link}>
              {text}
            </Link>
          ))}
        </Nav>

        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => toggleDrawer(false)}
        >
          <DrawerContent>
            <IconButton onClick={() => toggleDrawer(false)}>
              <CloseIcon sx={{ "&:hover": { color: colors.yellow } }} />
            </IconButton>
            <List>
              {menuItems.map(({ text, link }) => (
                <ListItem
                  key={text}
                  button
                  component={Link}
                  to={link}
                  onClick={() => toggleDrawer(false)} // 🔥 Fechando o menu ao clicar
                >
                  <ListItemText primary={text} />
                  <GoChevronRight size={20} color="#fff" />
                </ListItem>
              ))}
            </List>
          </DrawerContent>
        </Drawer>
      </HeaderBottom>
    </Container>
  );
}

export default Header;
