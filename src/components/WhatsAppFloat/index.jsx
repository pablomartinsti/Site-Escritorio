import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FloatingWrap, Fab, Bubble, Close } from './styles';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloat({
  message = 'Olá! Gostaria de uma consultoria gratuita.',
  bubbleText = 'Tem alguma dúvida? Chame no WhatsApp 😊',
  showBubbleInitially = true,
  autoHideMs = 8000
}) {
  const [showBubble, setShowBubble] = useState(showBubbleInitially);
  const url = `https://wa.me/5534996571156?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    if (!showBubbleInitially) return;
    const t = setTimeout(() => setShowBubble(false), autoHideMs);
    return () => clearTimeout(t);
  }, [showBubbleInitially, autoHideMs]);

  return (
    <FloatingWrap aria-live="polite">
      {showBubble && (
        <Bubble role="status">
          {bubbleText}
          <Close type="button" aria-label="Fechar mensagem" onClick={() => setShowBubble(false)}>
            ×
          </Close>
        </Bubble>
      )}

      <Fab
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        title="Fale conosco no WhatsApp"
      >
        <FaWhatsapp size={28} aria-hidden="true" />
      </Fab>
    </FloatingWrap>
  );
}
WhatsAppFloat.propTypes = {
  phone: PropTypes.string,
  message: PropTypes.string,
  bubbleText: PropTypes.string,
  showBubbleInitially: PropTypes.bool,
  autoHideMs: PropTypes.number
};
