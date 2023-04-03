/**
 * @prettier
 */

import React from 'react';

import './styles.scss';

import { Start, Authorization, NewPassword, SendEmail, Registration } from './forms/index';

const MainView = (props) => {
  const renderForm = (state) => {
    switch (state) {
      case 0:
        return <Start setFormToStart={props.setFormToStart} />;
      case 1:
        return <Authorization setFormToStart={props.setFormToStart} />;
      case 2:
        return <NewPassword setFormToStart={props.setFormToStart} />;
      case 3:
        return <SendEmail setFormToStart={props.setFormToStart} />;
      case 4:
        return <Registration setFormToStart={props.setFormToStart} />;
      default:
        return null;
    }
  };
  return (
    <div id="--main-page">
      <div className="container">{renderForm(props.formToStart)}</div>
    </div>
  );
};

export default MainView;
