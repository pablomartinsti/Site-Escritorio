import { Container } from "./styles";
import PropTypes from "prop-types";

const defaultImage = "URL_DA_IMAGEM_PADRÃO";

function Card({ title, description, img, alt, link }) {
  return (
    <Container>
      <article className="card">
        {/* SEO: Usamos <article> para melhor indexação */}
        <img
          src={img || defaultImage}
          alt={alt || title || "Imagem do serviço"}
          loading="lazy"
        />

        {/* Lazy loading para melhorar performance */}
        <div className="descricao">
          <h3 title={title}>{title}</h3>
          {/* SEO: Adiciona title para indexação */}
          <p>{description}</p>
          {link !== "#" && (
            <a href={link} aria-label={`Saiba mais sobre ${title}`}>
              SAIBA MAIS
            </a>
          )}
        </div>
      </article>
    </Container>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string,
  alt: PropTypes.string,
  link: PropTypes.string, // Agora o link é opcional
};

Card.defaultProps = {
  img: defaultImage,
  alt: "Imagem do serviço",
  link: "#",
};

export default Card;
