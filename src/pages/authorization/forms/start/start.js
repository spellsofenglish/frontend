/**
 * @prettier
 */

import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '../../../../ui-kit';

import { setStep } from '../../../../features/form/formSlice';

const Start = () => {
  const dispatch = useDispatch();

  return (
    <div className="starting-element">
      <div className="logo-large" />
      <div className="redirecting-menu">
        <Button label="Уже есть аккаунт" size="large" onClick={() => dispatch(setStep('auth'))} />
        <Button label="Создать аккаунт" size="large" onClick={() => dispatch(setStep('reg'))} />
      </div>
    </div>
  );
};

export default Start;
