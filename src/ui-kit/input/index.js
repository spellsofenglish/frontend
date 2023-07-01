/**
 * @prettier
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import { Icon } from '../';

const ERRORS_TYPES = [
  'required',
  'maxLength',
  'minLength',
  'pattern',
  'noSpace',
  'passwordCorrection',
  'passwordCorrectionLength',
];

const InputForm = ({
  label,
  name,
  type,
  placeholder,
  register,
  errors,
  required,
  validationSchema,
  value,
  //errorMessage,
  //isValid,
}) => {
  const [showPasswordEye, setShowPasswordEye] = useState(true);
  const [showPasswordValue, setShowPasswordValue] = useState(type);

  const getInputClassName = () => {
    !errors[name]?.type ? '' : 'errorInput';
  };

  const togglePasswordEye = () => {
    setShowPasswordEye(!showPasswordEye);
    setShowPasswordValue(showPasswordValue === 'text' ? 'password' : 'text');
  };

  return (
    <div className="input-wrapper">
      <label htmlFor={name}>{label}</label>
      <div className="input-holder">
        <input
          className={getInputClassName()}
          name={name}
          type={showPasswordValue}
          placeholder={placeholder}
          required={required}
          {...register(name, validationSchema)}
          value={value}
        />
        {name === 'password' || name === 'repeat-password' ? (
          <div className="btn-toggle" onClick={togglePasswordEye}>
            <Icon name={showPasswordEye ? 'eyeHidden' : 'eyeShown'} />
          </div>
        ) : null}
      </div>
      {errors && ERRORS_TYPES.includes(errors[name]?.type) && (
        <span className="error">{errors[name]?.message}</span>
      )}
      {/* {isValid && errorMessage && <span>{errorMessage}</span>} */}
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
