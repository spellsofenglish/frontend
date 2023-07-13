/**
 * @prettier
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';

//import UsersService from '../../services/users';

import './styles.scss';

import { Button } from '../../ui-kit';
import { Modals } from '../../components';

const Menu = () => {
  const [isRulesActive, setIsRulesActive] = useState(false);
  const [cookies] = useCookies('session');

  //const [cookies] = useCookies(['cookie-name']);

  const navigate = useNavigate();

  const isNewUser = useSelector((state) => state.isNewUser);
  //const { activeRules, setActiveRules } = useContext(RulesContext);

  const showModal = () => setIsRulesActive(!isRulesActive);

  const singOut = async () => {
    console.log(cookies);
    try {
      //await UsersService.signout();
      navigate(-1);
      //setCookies('');
    } catch (error) {
      console.log(error);
    }
  };

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
          </div>
          <div className="dark-button__background">
            <Button label="Выйти из игры" type="secondary" onClick={singOut} />
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
