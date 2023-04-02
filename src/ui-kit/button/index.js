/**
 * @prettier
 */

import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Button = (props) => {
  const setClassName = () => {
    let str = `button-root ${sizes[props.size].class}`;
    if (props.type) {
      str += ` ${types[props.type]}`;
    }

    return str;
  };

  return (
    <button
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      className={setClassName()}
    >
      <span>{props.label}</span>
    </button>
  );
};

const sizes = {
  small: {
    class: 'small',
    width: 48,
    height: 48,
  },
  medium: {
    class: 'medium',
    width: 118,
    height: 48,
  },
  large: {
    class: 'large',
    width: 400,
    height: 48,
  },
};

const types = {
  default: 'default',
  outlined: 'outlined',
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  type: PropTypes.oneOf(['default', 'outlined']),
  label: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  size: 'small',
  type: 'default',
  label: null,
  onClick: () => {},
  disabled: false,
};

export default Button;
