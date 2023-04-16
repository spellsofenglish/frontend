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
        return <Authorization login={props.login} isLoading={props.isLoading} />;
      case 'reset':
        return <NewPassword isLoading={props.isLoading} />;
      case 'email':
        return <SendEmail isLoading={props.isLoading} />;
      case 'reg':
        return <Registration createUser={props.createUser} isLoading={props.isLoading} />;
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
