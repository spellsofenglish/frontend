/**
 * @prettier
 */

import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

/**
 * @component Block
 * @example
 * <Block
 *  children={() => {}}
 *  className="some-class"
 * />
 */
const Block = (props) => {
  const renderClassName = () => {
    let str = 'block';
    if (props.className) {
      str += ` ${props.className}`;
    }
    if (props.disabledShadow) {
      str += ' shadow-disable';
    }
    return str;
  };
  return (
    <aside
      id={props.id}
      title={props.title}
      disabled={props.disabled}
      className={renderClassName()}
    >
      {props.children}
    </aside>
  );
};

/**
 * Properties
 */

Block.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  disabledShadow: PropTypes.bool,
};
Block.defaultProps = {
  children: null,
  className: null,
  id: null,
  disabled: false,
  disabledShadow: false,
  title: null,
};

export default Block;
