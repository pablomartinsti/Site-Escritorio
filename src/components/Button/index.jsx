import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { useReducedMotion } from 'framer-motion';
import { StyledButton, IconWrap, Spinner, ButtonGroup } from './styles';

const Button = forwardRef(function Button(
  {
    as,
    to,
    href,
    children,
    variant = 'blue',
    size = 'md',
    fullWidth = false,
    iconLeft,
    iconRight,
    loading = false,
    disabled = false,
    type = 'button',
    ...rest
  },
  ref
) {
  const reduce = useReducedMotion();
  const isDisabled = disabled || loading;

  // Props de navegação/elemento
  const elementProps = { as, to, href };
  // Só define type quando é <button>
  if (!href && !to) elementProps.type = type;

  // Animação reduzida quando usuário prefere menos movimento
  const motionProps = reduce ? {} : { whileTap: { scale: 0.98 } };

  return (
    <StyledButton
      ref={ref}
      $variant={variant}
      $size={size}
      $fullWidth={fullWidth}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      {...elementProps}
      {...motionProps}
      {...rest}
    >
      {loading ? (
        <Spinner aria-hidden="true" />
      ) : (
        <>
          {iconLeft && <IconWrap className="left">{iconLeft}</IconWrap>}
          <span className="btn-label">{children}</span>
          {iconRight && <IconWrap className="right">{iconRight}</IconWrap>}
        </>
      )}
    </StyledButton>
  );
});

Button.propTypes = {
  as: PropTypes.any, // ex.: Link ou 'a'/'button'
  to: PropTypes.string, // quando usar Link
  href: PropTypes.string, // quando for âncora/externo
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['blue', 'gold', 'outlineLight']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  fullWidth: PropTypes.bool,
  iconLeft: PropTypes.node,
  iconRight: PropTypes.node,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
};

Button.defaultProps = {
  variant: 'blue',
  size: 'md',
  fullWidth: false,
  loading: false,
  disabled: false,
  type: 'button'
};

export default Button;
export { ButtonGroup };
