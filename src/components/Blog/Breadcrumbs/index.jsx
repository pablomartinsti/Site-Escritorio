import PropTypes from 'prop-types';
import { Nav, List, Crumb } from './styles';

export default function Breadcrumbs({ paths = [], onNavigate }) {
  return (
    <Nav aria-label="breadcrumb">
      <List>
        {paths.map((p, i) => (
          <Crumb key={i}>
            {i > 0 && <span className="sep">/</span>}
            {p.href ? (
              <a
                href={p.href}
                onClick={(e) => {
                  if (onNavigate) {
                    e.preventDefault();
                    onNavigate(p.href);
                  }
                }}
              >
                {p.label}
              </a>
            ) : (
              <span>{p.label}</span>
            )}
          </Crumb>
        ))}
      </List>
    </Nav>
  );
}

// 🔹 Validação de props
Breadcrumbs.propTypes = {
  paths: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string
    })
  ),
  onNavigate: PropTypes.func
};
