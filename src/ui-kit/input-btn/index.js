/**
 * @prettier
 */

import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const InputBtn = (props) => {
  return (
    <input
      disabled={props.disabled}
      className="form-btn"
      type={props.type}
      value={props.value}
      onClick={props.onClick}
    />
  );
};

InputBtn.propTypes = {
  disabled: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
};

InputBtn.defaultProps = {
  disabled: false,
  type: 'submit',
  value: 'Создать аккаунт',
  onClick: () => {},
};

export default InputBtn;
