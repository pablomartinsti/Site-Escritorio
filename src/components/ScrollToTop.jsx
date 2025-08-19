// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Se tiver hash na URL, não sobe pro topo (deixa rolar até a âncora)
    if (hash) return;

    // Sobe pro topo quando o pathname mudar
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Acessibilidade opcional: foca o body para leitores de tela
    if (document && document.body) {
      document.body.setAttribute('tabindex', '-1');
      document.body.focus();
      document.body.removeAttribute('tabindex');
    }
  }, [pathname, hash]);

  return null;
}
