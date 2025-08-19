// BlogPage.jsx
import { useMemo, useState, useEffect } from 'react';
import colors from '../../styles/colors';
import posts from './mock';
import { filters } from './filters';

import { Hero, Container, H1, Sub, Grid, Cards } from './styles';
import PostCard from '../../components/Blog/PostCard';
import Sidebar from '../../components/Blog/Sidebar';
import Pagination from '../../components/Blog/Pagination';
import AnimatedInView from '../../components/AnimatedInView';

export default function BlogPage() {
  const [selectedType, setSelectedType] = useState('tudo'); // único
  const [page, setPage] = useState(1);
  const pageSize = 6;

  useEffect(() => {
    setPage(1);
  }, [selectedType]);

  // lista principal filtrada por tipo
  const filtered = useMemo(() => {
    return posts
      .filter((p) => selectedType === 'tudo' || (p.types || []).includes(selectedType))
      .sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1));
  }, [selectedType]);

  const pages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const slice = filtered.slice((page - 1) * pageSize, page * pageSize);

  // sidebar: Em destaque se houver, senão últimos
  const featured = useMemo(() => posts.filter((p) => p.featured), []);
  const latest = useMemo(() => [...posts].sort((a, b) => (a.updatedAt < b.updatedAt ? 1 : -1)).slice(0, 3), []);
  const sidebarPosts = featured.length ? featured.slice(0, 3) : latest;
  const sidebarTitle = featured.length ? 'Em destaque' : 'Últimos Posts';

  return (
    <main style={{ background: colors.whiteSoft, paddingBottom: 64 }}>
      <Hero>
        <Container>
          <AnimatedInView as="div" variant="fadeDown">
            <H1>Últimas notícias e artigos</H1>
          </AnimatedInView>
          <AnimatedInView as="div" variant="fadeUp">
            <Sub>Blog</Sub>
          </AnimatedInView>
        </Container>
      </Hero>

      <Container>
        <Grid>
          {/* lista */}
          <AnimatedInView as="div" variant="fadeUp">
            <Cards as={AnimatedInView} variant="fadeUp" transition={{ staggerChildren: 0.08, delayChildren: 0.06 }}>
              {slice.map((p) => (
                <AnimatedInView as="div" key={p.id} variant="fadeUp">
                  <PostCard post={p} />
                </AnimatedInView>
              ))}
            </Cards>

            {slice.length === 0 && (
              <AnimatedInView
                as="p"
                variant="fadeUp"
                style={{
                  marginTop: 16,
                  padding: 16,
                  background: '#fff8e1',
                  borderRadius: 12,
                  color: colors.blueDark
                }}
              >
                Nenhum post encontrado.
              </AnimatedInView>
            )}

            <AnimatedInView as="div" variant="fadeUp">
              <Pagination page={page} pages={pages} onPage={setPage} />
            </AnimatedInView>
          </AnimatedInView>

          {/* sidebar */}
          <AnimatedInView as="div" variant="fadeLeft">
            <Sidebar
              latestPosts={sidebarPosts}
              latestTitle={sidebarTitle}
              filters={filters} // { types:[{ label, slug }] } -> ex.: tudo|noticias|dicas
              selectedType={selectedType}
              onTypeChange={setSelectedType}
              onLeadSubmit={(payload) => console.log('lead:', payload)}
            />
          </AnimatedInView>
        </Grid>
      </Container>
    </main>
  );
}
