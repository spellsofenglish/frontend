/**
 * @prettier
 */

import React from 'react';

import './styles.scss';

const GAME_TYPES = {
  single: {
    title: 'Одиночная игра',
    text: 'Пройди игру сам, не дели задания ни с кем и прокачай английский по-максимуму',
  },
  team: {
    title: 'Командная игра',
    text: 'Пройди игру с друзьями: помогайте и поддерживайте друг друга на пути к цели',
  },
};

const GameCard = (props) => {
  return (
    <div
      className={`gamecard ${props.gameType === props?.type ? 'selected' : ''}`}
      onClick={() => props.onClick(props?.type)}
    >
      <div>
        <div className={props?.type ? props.type : ''} />
        <div className="game-description">
          <div className="text">
            <h3>{GAME_TYPES[props.type].title}</h3>
            <p>{GAME_TYPES[props.type].text}</p>
          </div>
          {props.type === 'team' && (
            <div>
              <div></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameCard;
