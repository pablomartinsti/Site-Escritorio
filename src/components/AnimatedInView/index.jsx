import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { variants, transition, viewport } from '../../utils/motionConfig';

function AnimatedInView({ as: Tag = 'div', variant = 'fadeUp', children, ...rest }) {
  const M = motion(Tag); // cria um motion component do elemento escolhido
  return (
    <M
      variants={variants[variant] || variants.fadeUp}
      initial="hidden"
      whileInView="show"
      transition={transition}
      viewport={viewport}
      {...rest} // permite sobrescrever transition/viewport/etc se quiser
    >
      {children}
    </M>
  );
}

AnimatedInView.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  variant: PropTypes.oneOf(['fadeUp', 'fadeDown', 'fadeLeft', 'fadeRight']),
  children: PropTypes.node
};

export default AnimatedInView;
