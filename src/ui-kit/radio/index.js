/**
 * @prettier
 */

import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Radio = (props) => {
  return (
    <div className="radio-box">
      <label htmlFor={props.name}>
        <input type="radio" name={props.name} value={props.value} id={props.name} />
        {props.label}
      </label>
    </div>
  );
};

/**
 * Properties
 */

Radio.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
};
Radio.defaultProps = {
  name: '',
  label: '',
  value: '',
};

export default Radio;
