import PropTypes from 'prop-types';
import { Card, Thumb, Badge, Title, Excerpt, Meta } from './styles';
import { formatDate, clamp } from '../../../utils/format';

export default function PostCard({ post }) {
  return (
    <Card>
      {post.image && (
        <Thumb href={`/blog/${post.slug}`} aria-label={`ler artigo: ${post.title}`}>
          <img src={post.image} alt="Imagem do artigo" loading="lazy" />
        </Thumb>
      )}

      <Badge>{post.category}</Badge>

      <Title>
        <a href={`/blog/${post.slug}`}>{post.title}</a>
      </Title>

      <Excerpt>{clamp(post.summary)}</Excerpt>

      <Meta>
        <span>
          Atualizado em {formatDate(post.updatedAt)} • {post.readMins} min
        </span>
        <a href={`/blog/${post.slug}`}>Ler mais →</a>
      </Meta>
    </Card>
  );
}

// 🔹 Validação de props
PostCard.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    category: PropTypes.string,
    summary: PropTypes.string,
    updatedAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
    readMins: PropTypes.number
  }).isRequired
};
