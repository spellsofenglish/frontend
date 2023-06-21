/**
 * @prettier
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import { Icon } from '../../ui-kit';

const Button = (props) => {
  const [color, setColor] = useState(null);

  const setClassName = () => {
    let str = `button-root ${types[props.type]}`;
    if (props.type) {
      str += ` ${types[props.type]}`;
    }

    if (props.disabled) {
      str += ' disabled';
    }

    if (props.icon && !props.label) {
      str += ' icon';
    }

    console.log(str);

    return str;
  };

  const hoverColor = (event) => {
    if (!event) {
      if (!props.disabled && props.type === 'secondary') {
        setColor(null);
      }
    } else {
      if (!props.disabled && props.type === 'secondary') {
        setColor('#D75207');
      }
    }
  };

  const getIconColor = () => {
    if (props.type === 'default') {
      return '#FFFFFF';
    } else if (props.type === 'secondary') {
      return props.disabled ? '#7E3718' : '#EC840A';
    }
  };

  return (
    <div className={setClassName()}>
      <button
        onClick={props.onClick}
        disabled={props.disabled}
        onMouseLeave={() => hoverColor(false)}
        onMouseEnter={() => hoverColor(true)}
      >
        {props.icon && (
          <Icon
            width={props.label ? '16px' : '24px'}
            height={props.label ? '16px' : '24px'}
            name={props.icon}
            fill={color || getIconColor()}
          />
        )}
        {props.label && <span>{props.label}</span>}
      </button>
    </div>
  );
};

// const sizes = {
//   small: {
//     class: 'small',
//     width: 48,
//     height: 48,
//   },
//   medium: {
//     class: 'medium',
//     width: 118,
//     height: 48,
//   },
//   large: {
//     class: 'large',
//     width: 400,
//     height: 48,
//   },
//   auto: {
//     class: 'auto',
//     width: 'auto',
//     height: 48,
//   },
// };

const types = {
  default: 'default',
  secondary: 'secondary',
  blue: 'blue',
  //dark: 'dark',
};

Button.propTypes = {
  //size: PropTypes.oneOf(['small', 'medium', 'large', 'auto']),
  type: PropTypes.oneOf(['default', 'secondary']),
  label: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
};

Button.defaultProps = {
  //size: 'small',
  type: 'default',
  label: null,
  onClick: () => {},
  disabled: false,
  icon: '',
};

export default Button;
