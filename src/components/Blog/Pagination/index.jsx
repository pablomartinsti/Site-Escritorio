import PropTypes from 'prop-types';
import { Nav, Btn, BtnOutline } from './styles';

export default function Pagination({ page = 1, pages = 1, onPage }) {
  if (pages <= 1) return null;
  const nums = Array.from({ length: pages }, (_, i) => i + 1);

  return (
    <Nav aria-label="Paginação">
      <BtnOutline onClick={() => onPage(Math.max(page - 1, 1))}>&lt;</BtnOutline>

      {nums.map((n) => (
        <Btn key={n} active={n === page} onClick={() => onPage(n)}>
          {n}
        </Btn>
      ))}

      <BtnOutline onClick={() => onPage(Math.min(page + 1, pages))}>&gt;</BtnOutline>
    </Nav>
  );
}

// 🔹 Validação das props
Pagination.propTypes = {
  page: PropTypes.number,
  pages: PropTypes.number,
  onPage: PropTypes.func.isRequired
};
