/**
 * @prettier
 */

import React from 'react';
import { useSelector } from 'react-redux';

import './styles.scss';

import { Start, Authorization, NewPassword, SendEmail, Registration } from './forms/index';

const MainView = (props) => {
  const step = useSelector((state) => state.form.step);

  const renderForm = (state) => {
    switch (state) {
      case 'start':
        return <Start />;
      case 'auth':
        return <Authorization />;
      case 'reset':
        return <NewPassword />;
      case 'email':
        return <SendEmail />;
      case 'reg':
        return <Registration createUser={props.createUser} />;
      default:
        return null;
    }
  };

  return (
    <div id="--main-page">
      <div className="container">{renderForm(step)}</div>
    </div>
  );
};

export default MainView;
