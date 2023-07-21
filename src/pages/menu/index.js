/**
 * @prettier
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './styles.scss';

import { Button } from '../../ui-kit';
//import { RulesContext } from '../../App';
import { Modals } from '../../components';

const Menu = () => {
  const [isRulesActive, setIsRulesActive] = useState(false);

  const navigate = useNavigate();

  const isNewUser = useSelector((state) => state.isNewUser);
  //const { activeRules, setActiveRules } = useContext(RulesContext);

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
          <div>
<<<<<<< HEAD:src/pages/menu/index.js
            <Button label="Начать игру" type="default" />
          </div>
          <div className="dark-button__background">
            <Button label="Настройка профиля" type="secondary" />
=======
            <Button
              label="Начать игру"
              type="default"
              onClick={() => {
                navigate('/new-game');
              }}
            />
          </div>
          <div className="dark-button__background">
            <Button label="Настройка профиля" type="secondary" disabled={true} />
>>>>>>> c214502670e7258bffa3d8272fd9a131f5ddae6a:src/pages/MainMenu/index.js
          </div>
          <div className="dark-button__background" onClick={() => navigate(-1)}>
            <Button label="Выйти из игры" type="secondary" />
          </div>
          <div>
            <Button type="secondary" icon="rules" onClick={showModal} />
          </div>
          {/* <div className="rules__menu-background">
            <button className="rules__menu" onClick={() => navigate('/storybook')}>
              <Icon name="storybook" width="30px" height="30px" fill="#EC840A" />
            </button>
          </div> */}
        </div>
      </div>
      <Modals.ModalGameRules isRulesActive={isRulesActive} onClose={showModal} />
    </>
  );
};

export default Menu;
