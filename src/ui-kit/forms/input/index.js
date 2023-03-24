/**
 * @prettier
 */

import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const InputForm = (props) => {
  return (
    <div className="wrapper">
      <label>{props.label}</label>
      <input type={props.type} placeholder={props.placeholder} />
    </div>
  );
};

InputForm.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

InputForm.defaultProps = {
  label: 'Имя',
  type: 'text',
  placeholder: 'Иван',
};

export default InputForm;
