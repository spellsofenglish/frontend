/**
 * @prettier
 */

import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const QuestionBlock = (props) => {
  return (
    <p className="question-block">
      {props.text}
      <span onClick={props.onClick}>{props.textBtn}</span>
    </p>
  );
};

QuestionBlock.propTypes = {
  text: PropTypes.string,
  textBtn: PropTypes.string,
  onClick: PropTypes.func,
};

QuestionBlock.defaultProps = {
  text: 'У меня уже есть аккаунт. ',
  textBtn: 'Войти в аккаунт',
  onClick: () => {},
};

export default QuestionBlock;
