import PropTypes from 'prop-types';
import { Card, Box, Title, List } from './styles';

export default function TableOfContents({ content = [] }) {
  const items = content.map((b, i) => (b.type === 'h2' ? { i, text: b.text } : null)).filter(Boolean);

  if (!items.length) return null;

  return (
    <Card>
      <Box>
        <Title>Índice</Title>
        <List>
          {items.map((it) => (
            <li key={it.i}>
              <a
                href={`#sec-${it.i}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(`sec-${it.i}`)?.scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                {it.text}
              </a>
            </li>
          ))}
        </List>
      </Box>
    </Card>
  );
}

// 🔹 Validação das props
TableOfContents.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      text: PropTypes.string
    })
  )
};
