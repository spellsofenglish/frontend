/**
 * @prettier
 */

import React, { useState } from 'react';

import './styles.scss';

import NewGameView from './view.js';

const NewGame = () => {
  const [isModalRulesVisible, setIsModalRulesVisible] = useState(false);
  const [gameType, setGameType] = useState(null);

  const showModalRules = () => {
    setIsModalRulesVisible(!isModalRulesVisible);
  };

  return (
    <NewGameView
      showModalRules={showModalRules}
      isModalRulesVisible={isModalRulesVisible}
      setGameType={setGameType}
      gameType={gameType}
    />
  );
};

export default NewGame;
