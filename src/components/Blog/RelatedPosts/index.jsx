import PropTypes from 'prop-types';
import PostCard from '../PostCard';

export default function RelatedPosts({ posts = [] }) {
  if (!posts.length) return null;

  return (
    <div style={{ marginTop: 24 }}>
      <h3 style={{ margin: '0 0 12px', fontSize: 20, fontWeight: 800 }}>Posts relacionados</h3>
      <div
        style={{
          display: 'grid',
          gap: 16,
          gridTemplateColumns: '1fr 1fr 1fr'
        }}
      >
        {posts.slice(0, 3).map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}

// 🔹 Validação das props
RelatedPosts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string,
      category: PropTypes.string,
      summary: PropTypes.string,
      updatedAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
      readMins: PropTypes.number
    })
  )
};
