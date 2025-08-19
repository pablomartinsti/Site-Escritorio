import { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import posts from '../Blog/mock';
import { formatDate } from '../../utils/format';

import { Hero, Container, Title, Meta, Cover, SummaryCard, Grid, Content, Legal, MobileCTA } from './styles';

import Breadcrumbs from '../../components/Blog/Breadcrumbs';
import TableOfContents from '../../components/Blog/TableOfContents';
import AuthorBox from '../../components/Blog/AuthorBox';
import CTAInline from '../../components/Blog/CTAInline';
import RelatedPosts from '../../components/Blog/RelatedPosts';
import AnimatedInView from '../../components/AnimatedInView'; // ajuste o path

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const post = posts.find((p) => p.slug === slug);

  const related = useMemo(() => {
    if (!post) return [];
    return posts.filter((p) => p.id !== post.id && p.category === post.category);
  }, [post]);

  if (!post) {
    return (
      <Container style={{ margin: '40px auto' }}>
        <p>
          Artigo não encontrado.{` `}
          <a
            href="/blog"
            onClick={(e) => {
              e.preventDefault();
              navigate('/blog');
            }}
          >
            Voltar ao blog
          </a>
        </p>
      </Container>
    );
  }

  const contentWithAnchors = (post.content || []).map((b, i) => (b.type === 'h2' ? { ...b, anchorId: `sec-${i}` } : b));

  return (
    <main style={{ paddingBottom: 64 }}>
      {/* topo com breadcrumb */}
      <Hero>
        <Container>
          <AnimatedInView as="div" variant="fadeDown">
            <Breadcrumbs
              paths={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: post.category, href: '/blog' },
                { label: post.title }
              ]}
              onNavigate={(href) => navigate(href)}
            />
          </AnimatedInView>
        </Container>
      </Hero>

      {/* corpo */}
      <Container>
        <header>
          <AnimatedInView as="div" variant="fadeUp">
            <Title>{post.title}</Title>
          </AnimatedInView>

          <AnimatedInView as="div" variant="fadeUp">
            <Meta>
              Atualizado em {formatDate(post.updatedAt)} · {post.readMins} min
            </Meta>
          </AnimatedInView>

          {post.image && (
            <AnimatedInView as="div" variant="fadeUp">
              <Cover src={post.image} alt="" />
            </AnimatedInView>
          )}

          {post.summary && (
            <AnimatedInView as="div" variant="fadeUp">
              <SummaryCard>
                <strong>Resumo:</strong> {post.summary}
              </SummaryCard>
            </AnimatedInView>
          )}
        </header>

        <Grid>
          {/* conteúdo principal */}
          <AnimatedInView as="div" variant="fadeUp">
            <Content>
              {contentWithAnchors.map((b, idx) => {
                if (b.type === 'h2')
                  return (
                    <AnimatedInView as="h2" variant="fadeUp" id={b.anchorId} key={idx}>
                      {b.text}
                    </AnimatedInView>
                  );
                if (b.type === 'p')
                  return (
                    <AnimatedInView as="p" variant="fadeUp" key={idx}>
                      {b.text}
                    </AnimatedInView>
                  );
                if (b.type === 'ul')
                  return (
                    <AnimatedInView as="ul" variant="fadeUp" key={idx}>
                      {b.items.map((it, i) => (
                        <li key={i}>{it}</li>
                      ))}
                    </AnimatedInView>
                  );
                if (b.type === 'ol')
                  return (
                    <AnimatedInView as="ol" variant="fadeUp" key={idx}>
                      {b.items.map((it, i) => (
                        <li key={i}>{it}</li>
                      ))}
                    </AnimatedInView>
                  );
                return null;
              })}
            </Content>

            <AnimatedInView as="div" variant="fadeUp">
              <CTAInline />
            </AnimatedInView>

            <AnimatedInView as="div" variant="fadeUp">
              <RelatedPosts posts={related} />
            </AnimatedInView>

            <AnimatedInView as="div" variant="fadeUp">
              <Legal>Conteúdo informativo; não substitui consultoria contábil.</Legal>
            </AnimatedInView>
          </AnimatedInView>

          {/* lateral */}
          <AnimatedInView as="div" variant="fadeLeft" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <TableOfContents content={post.content || []} />
            <AuthorBox />
          </AnimatedInView>
        </Grid>
      </Container>

      {/* CTA fixo no mobile */}
      <AnimatedInView
        as={MobileCTA}
        variant="fadeUp"
        href="https://wa.me/5534996571156"
        target="_blank"
        rel="noreferrer"
      >
        Tirar dúvida no WhatsApp
      </AnimatedInView>
    </main>
  );
}
