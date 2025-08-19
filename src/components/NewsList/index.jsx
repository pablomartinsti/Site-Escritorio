// src/components/NewsList/index.jsx
import PropTypes from 'prop-types';
import AnimatedInView from '../AnimatedInView';
import Card from '../Card';
import { Wrapper, Title, List } from './styles';

function NewsList({ title = 'Dicas e notícias', items = [], titleVariant = 'fadeUp', listRole = 'list' }) {
  return (
    <Wrapper aria-labelledby="news-title">
      <AnimatedInView
        as={Title}
        id="news-title"
        className="news-title"
        variant={titleVariant}
        viewport={{ once: true, amount: 0.2 }}
      >
        {title}
      </AnimatedInView>

      <List role={listRole}>
        {items.map((it, idx) => (
          <AnimatedInView
            key={it.link || `${it.title}-${idx}`}
            as="div"
            role="listitem"
            variant={it.variant || (idx === 0 ? 'fadeLeft' : idx === 1 ? 'fadeUp' : 'fadeRight')}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card title={it.title} description={it.description} img={it.img} link={it.link} />
          </AnimatedInView>
        ))}
      </List>
    </Wrapper>
  );
}

NewsList.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      img: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
      link: PropTypes.string.isRequired,
      variant: PropTypes.oneOf(['fadeUp', 'fadeDown', 'fadeLeft', 'fadeRight'])
    })
  ),
  titleVariant: PropTypes.oneOf(['fadeUp', 'fadeDown', 'fadeLeft', 'fadeRight']),
  listRole: PropTypes.oneOf(['list', 'listbox', 'grid'])
};

export default NewsList;
