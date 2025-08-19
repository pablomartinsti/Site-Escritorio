// src/pages/Home/Sections/Feedbacks.jsx
import { Link } from 'react-router-dom';
import AnimatedInView from '../../../components/AnimatedInView';
import { FeedbackSection } from '../styles';

const TESTIMONIALS = [
  {
    id: 'francisco-alves',
    text: 'Excelente! Recomendo! Muito atenciosos, prestam um serviço de qualidade.',
    author: 'Francisco Alves',
    motion: 'fadeDown'
  },
  {
    id: 'valkiria-soares',
    text: '“Muito atenciosa, sempre prestativa, nos ajuda muito. Extremamente competente e comprometida.”',
    author: 'Valkiria Soares',
    motion: 'fadeUp'
  },
  {
    id: 'juliana-martins',
    text: '“Senti muita confiança no trabalho, tudo foi resolvido sem burocracia. Recomendo a todos.”',
    author: 'Juliana Martins',
    motion: 'fadeDown'
  }
];

export default function Feedbacks() {
  return (
    <FeedbackSection as="section" className="parallax-feedback" id="feedback" aria-labelledby="feedback-titulo">
      <AnimatedInView className="title" variant="fadeDown">
        <h2 id="feedback-titulo">O que nossos clientes dizem</h2>
      </AnimatedInView>

      <ul className="box-cards">
        {TESTIMONIALS.map((t, idx) => (
          <AnimatedInView key={t.id || idx} as="li" className="card" variant={t.motion ?? 'fadeUp'}>
            <article>
              <blockquote className="feedback">{t.text}</blockquote>
              <footer className="cliente">
                <cite>{t.author}</cite>
              </footer>
            </article>
          </AnimatedInView>
        ))}
      </ul>

      <AnimatedInView as="p" variant="fadeDown">
        Quer fazer parte desse time de clientes satisfeitos? <Link to="/contato">Fale com a Martir</Link>
      </AnimatedInView>
    </FeedbackSection>
  );
}
