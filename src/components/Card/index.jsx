import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { Container } from './styles';

const defaultImage = 'URL_DA_IMAGEM_PADRÃO';

function Card({ title, description, img, alt, link, ctaLabel, buttonVariant, buttonProps }) {
  const aria = `Saiba mais sobre ${title}`;

  const isInternal = typeof link === 'string' && /^\/(?!\/)/.test(link);
  const isExternal = typeof link === 'string' && /^https?:\/\//i.test(link);

  const asProp = isInternal ? Link : 'a';
  const navProps = isInternal
    ? { to: link }
    : { href: link, ...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {}) };

  return (
    <Container>
      <article className="card">
        <picture>
          {/* versão menor para telas até 600px */}
          {typeof img === 'object' && img.small && (
            <source srcSet={img.small} media="(max-width: 300px)" type="image/webp" />
          )}

          {/* versão média para telas acima de 600px */}
          {typeof img === 'object' && img.medium && (
            <source srcSet={img.medium} media="(min-width: 600px)" type="image/webp" />
          )}

          {/* fallback */}
          <img
            src={typeof img === 'string' ? img : img.medium || img.small || defaultImage}
            alt={alt || title || 'Imagem do serviço'}
            width={400}
            height={250}
            loading="lazy"
            decoding="async"
            style={{ objectFit: 'cover' }}
          />
        </picture>

        <div className="descricao">
          <h3 title={title}>{title}</h3>
          <p>{description}</p>

          {link && link !== '#' && (
            <Button
              as={asProp}
              variant={buttonVariant}
              aria-label={aria}
              title={aria}
              size="sm"
              {...navProps}
              {...buttonProps}
            >
              {ctaLabel}
            </Button>
          )}
        </div>
      </article>
    </Container>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      small: PropTypes.string,
      medium: PropTypes.string
    })
  ]),
  alt: PropTypes.string,
  link: PropTypes.string,
  ctaLabel: PropTypes.string,
  buttonVariant: PropTypes.string,
  buttonProps: PropTypes.object
};

Card.defaultProps = {
  img: defaultImage,
  alt: 'Imagem do serviço',
  link: '#',
  ctaLabel: 'SAIBA MAIS',
  buttonVariant: 'blue',
  buttonProps: {}
};

export default Card;
