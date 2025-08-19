import { useEffect, useId, useRef, useState } from 'react';
import Button from '../../../components/Button';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { FaqSection } from '../styles';
import AnimatedInView from '../../../components/AnimatedInView';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showFaq, setShowFaq] = useState(false);
  const baseId = useId();
  const reduce = useReducedMotion();
  const containerRef = useRef(null);

  const faqData = [
    { q: 'Como trocar de contador em Uberlândia?', a: 'Trocar de contador é simples! Basta nos informar...' },
    { q: 'Quais documentos preciso para abrir empresa em Uberlândia?', a: 'RG, CPF, comprovante de endereço...' },
    { q: 'Quanto custa a contabilidade para empresas em Uberlândia?', a: 'Varia conforme tipo e regime...' },
    { q: 'Posso abrir uma empresa 100% online?', a: 'Sim, fazemos todo o processo online...' },
    { q: 'Como funciona o Imposto de Renda para empresas?', a: 'Cálculo e entrega do IRPJ com orientação...' },
    { q: 'Vocês atendem empresas de outros estados?', a: 'Atendemos todo o Brasil com processos digitais.' },
    { q: 'Benefícios de contratar uma assessoria contábil?', a: 'Segurança fiscal, economia e orientação.' },
    { q: 'Posso migrar minha contabilidade para vocês?', a: 'Sim. Cuidamos da transição sem burocracia.' }
  ];

  useEffect(() => {
    if (showFaq && containerRef.current) containerRef.current.focus();
  }, [showFaq]);

  return (
    <FaqSection as="section" id="faq" aria-labelledby="faq-titulo">
      <AnimatedInView variant="fadeDown" className="faq-section">
        <header className="faq-title">
          <h2 id="faq-titulo">Dúvidas Frequentes</h2>
          <p>Veja as perguntas mais comuns sobre contabilidade em Uberlândia - MG</p>
        </header>

        {!showFaq ? (
          <Button variant="blue" onClick={() => setShowFaq(true)} aria-controls="faq-container" aria-expanded={false}>
            Ver perguntas frequentes
          </Button>
        ) : (
          <div id="faq-container" className="faq-container" tabIndex={-1} ref={containerRef}>
            <ul>
              {faqData.map((item, idx) => {
                const qId = `${baseId}-faq-q-${idx}`;
                const aId = `${baseId}-faq-a-${idx}`;
                const open = activeIndex === idx;

                const motionProps = reduce
                  ? { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } }
                  : {
                      initial: { height: 0, opacity: 0 },
                      animate: { height: 'auto', opacity: 1 },
                      exit: { height: 0, opacity: 0 }
                    };

                return (
                  <li key={`${idx}-${item.q}`} className={`faq-item${open ? ' active' : ''}`}>
                    <button
                      id={qId}
                      className="faq-question"
                      onClick={() => setActiveIndex(open ? null : idx)}
                      aria-expanded={open}
                      aria-controls={aId}
                    >
                      {item.q}
                    </button>

                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          id={aId}
                          className="faq-answer"
                          role="region"
                          aria-labelledby={qId}
                          transition={{ duration: 0.35, ease: 'easeOut' }}
                          {...motionProps}
                        >
                          <p>{item.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>

            <Button
              variant="blue"
              size="sm"
              aria-controls="faq-container"
              aria-expanded={true}
              onClick={() => {
                setShowFaq(false);
                setActiveIndex(null);
              }}
            >
              Ocultar perguntas
            </Button>
          </div>
        )}
      </AnimatedInView>
    </FaqSection>
  );
}
