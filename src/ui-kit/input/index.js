/**
 * @prettier
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import { Icon } from '../';

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
  const [showPasswordEye, setShowPasswordEye] = useState(true);
  const [showPasswordValue, setShowPasswordValue] = useState(type);

  const getInputClassName = () => {
    !errors[name]?.type ? '' : 'errorInput';
  };

  const togglePasswordEye = () => {
    setShowPasswordEye(!showPasswordEye);
    showPasswordValue === 'text' ? setShowPasswordValue('password') : setShowPasswordValue('text');
  };

  return (
    <div className="wrapper">
      <label htmlFor={name}>{label}</label>
      <div className="input-block">
        <input
          className={getInputClassName()}
          name={name}
          type={showPasswordValue}
          placeholder={placeholder}
          required={required}
          {...register(name, validationSchema)}
        />
        {name === 'password' || name === 'repeat-password' ? (
          <div className="btn-toggle" onClick={togglePasswordEye}>
            <Icon name={showPasswordEye ? 'eyeHidden' : 'eyeShown'} />
          </div>
        ) : null}
      </div>
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
      {errors && errors[name]?.type === 'passwordCorrectionLength' && (
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
