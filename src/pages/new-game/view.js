/**
 * @prettier
 */

import React from 'react';
import { useNavigate } from 'react-router-dom';

import './styles.scss';

import { Header, Modals } from '../../components';
import { Button } from '../../ui-kit';
import GameCard from './components/card';

const NewGameView = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div id="--new-game-page">
        <Header showModalRules={props.showModalRules} />
        <div>
          <h1>Как будем играть?</h1>
          <div className="carts">
            <GameCard type="single" onClick={props.setGameType} gameType={props.gameType} />
            <GameCard type="team" onClick={props.setGameType} gameType={props.gameType} />
          </div>
          <div className="buttons">
            <div>
              <Button label="Главное меню" type="secondary" onClick={() => navigate(-1)} />
            </div>
            <div>
              <Button label="Далее" />
            </div>
          </div>
        </div>
      </div>
      <Modals.ModalGameRules
        onClose={props.showModalRules}
        isRulesActive={props.isModalRulesVisible}
      />
    </>
  );
};

export default NewGameView;
