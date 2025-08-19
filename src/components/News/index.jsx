// components/News/index.jsx
import { useMemo } from 'react';
import Card from '../Card';
import AnimatedInView from '../AnimatedInView';
import { NewsSection } from './styles';

import posts from '../../pages/Blog/mock';

export default function News() {
  const latest = useMemo(
    () => [...posts].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)).slice(0, 3),
    []
  );

  return (
    <NewsSection as="section" aria-labelledby="news-titulo">
      <AnimatedInView as="h2" id="news-titulo" className="news-title" variant="fadeDown">
        Confira as nossas dicas e notícias!
      </AnimatedInView>

      <div className="news-cards" role="list">
        {latest.map((p) => (
          <AnimatedInView key={p.id} variant="fadeUp" role="listitem">
            <Card title={p.title} description={p.summary} img={p.image} link={`/blog/${p.slug}`} />
          </AnimatedInView>
        ))}
      </div>
    </NewsSection>
  );
}
