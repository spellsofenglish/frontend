/**
 * @prettier
 */

import React from 'react';

import './styles.scss';

import Start from './forms/start/start';
import Authorization from './forms/authorization/authorization';
import NewPassword from './forms/newPassword/newPassword';
import SendEmail from './forms/sendEmail/sendEmail';
import Registration from './forms/registration/registration';

const MainView = (props) => {
  const renderForm = (state) => {
    switch (state) {
      case 0:
        return <Start setFormToStart={props.setFormToStart} />;
      // break;
      case 1:
        return <Authorization setFormToStart={props.setFormToStart} />;
      // break;
      case 2:
        return <NewPassword setFormToStart={props.setFormToStart} />;
      // break;
      case 3:
        return <SendEmail setFormToStart={props.setFormToStart} />;
      // break;
      case 4:
        return <Registration setFormToStart={props.setFormToStart} />;
      // break;
      default:
        return null;
      // break;
    }
  };
  return (
    <div id="--main-page">
      <div className="container">
        {/* {!props.formToStart ? <Start setFormToStart={props.setFormToStart} /> : null} */}
        {renderForm(props.formToStart)}
      </div>
    </div>
  );
};

export default MainView;
