/**
 * @prettier
 */

import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const InputForm = ({
  label,
  name,
  type,
  placeholder,
  register,
  errors,
  required,
  validationSchema,
}) => {
  const getInputClassName = () => {
    if (errors[name]?.type === undefined) {
      return '';
    } else {
      return 'errorInput';
    }
  };
  return (
    <div className="wrapper">
      <label htmlFor={name}>{label}</label>
      <input
        className={getInputClassName()}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        {...register(name, validationSchema)}
      />
      {errors && errors[name]?.type === 'required' && (
        <span className="error">{errors[name]?.message}</span>
      )}
      {errors && errors[name]?.type === 'maxLength' && (
        <span className="error">{errors[name]?.message}</span>
      )}
      {errors && errors[name]?.type === 'minLength' && (
        <span className="error">{errors[name]?.message}</span>
      )}
      {errors && errors[name]?.type === 'pattern' && (
        <span className="error">{errors[name]?.message}</span>
      )}
      {errors && errors[name]?.type === 'noSpace' && (
        <span className="error">{errors[name]?.message}</span>
      )}
      {errors && errors[name]?.type === 'passwordCorrection' && (
        <span className="error">{errors[name]?.message}</span>
      )}
    </div>
  );
};

InputForm.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

InputForm.defaultProps = {
  label: 'Имя',
  name: 'name',
  type: 'text',
  placeholder: 'Иван',
};

export default InputForm;
