/**
 * @prettier
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './styles.scss';

import { Button, Icon } from '../../ui-kit';
//import { RulesContext } from '../../App';
import ModalGameRules from '../../components/ModalGameRules';

const Menu = () => {
  const [isRulesActive, setIsRulesActive] = useState(false);

  const navigate = useNavigate();

  const isNewUser = useSelector((state) => state.isNewUser);
  //const { activeRules, setActiveRules } = useContext(RulesContext);

  console.log(isNewUser);

  const showModal = () => setIsRulesActive(!isRulesActive);

  useEffect(() => {
    if (isNewUser) {
      showModal();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
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
            <button className="rules__menu" onClick={showModal}>
              <Icon name="rules" width="24px" height="24px" fill="#EC840A" />
            </button>
          </div>
          <div className="rules__menu-background">
            <button className="rules__menu" onClick={() => navigate('/storybook')}>
              <Icon name="storybook" width="30px" height="30px" fill="#EC840A" />
            </button>
          </div>
        </div>
      </div>
      <ModalGameRules isRulesActive={isRulesActive} onClose={showModal} />
    </>
  );
};

export default Menu;
