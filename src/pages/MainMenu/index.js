/**
 * @prettier
 */

import React from 'react';

import './styles.scss';
import { Button, Icon } from '../../ui-kit';
import { useNavigate } from 'react-router-dom';

export const MainMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="background__menu">
      <div className="logo__menu" />
      <div className="buttons__menu">
        <Button label="Начать игру" type="outlined" size="auto" />
        <div className="dark-button__background">
          <Button label="Настройка профиля" type="dark" size="auto" />
        </div>
        <div className="dark-button__background" onClick={() => navigate(-1)}>
          <Button label="Выйти из игры" type="dark" size="auto" />
        </div>
        <div className="rules__menu-background">
          <button className="rules__menu">
            <Icon name="rules" width="24px" height="24px" fill="#EC840A" />
          </button>
        </div>
      </div>
    </div>
  );
};