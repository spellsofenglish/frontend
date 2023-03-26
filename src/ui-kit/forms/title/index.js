/**
 * @prettier
 */

import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const TitleForm = (props) => {
  return <h3 className="title">{props.text}</h3>;
};

TitleForm.propTypes = {
  text: PropTypes.string,
};

TitleForm.defaultProps = {
  text: 'Создание аккаунта',
};

export default TitleForm;
