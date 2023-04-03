/**
 * @prettier
 */

import React from 'react';

import { Button } from '../../../../ui-kit';

const Start = (props) => {
  return (
    <div className="starting-element">
      <div className="logo-large" />
      <div className="redirecting-menu">
        <Button label="Уже есть аккаунт" size="large" onClick={() => props.setFormToStart(1)} />
        <Button label="Создать аккаунт" size="large" onClick={() => props.setFormToStart(4)} />
      </div>
    </div>
  );
};

export default Start;
