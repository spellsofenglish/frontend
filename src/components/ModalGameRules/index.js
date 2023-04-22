/**
 * @prettier
 */

import React, { useContext } from 'react';

import './styles.scss';

import { Icon } from '../../ui-kit';
import { RulesContext } from '../../App';

const ModalGameRules = () => {
  const { activeRules, setActiveRules } = useContext(RulesContext);
  return (
    <div className={activeRules ? 'modal-page' : null}>
      <div className={activeRules ? 'modal-page__back active' : 'modal-page__back'}>
        <div className={activeRules ? 'modal-page__block' : null}>
          <section className="content">
            <h2>Правила игры Spells of English</h2>
            <div className="content__block">
              <h3 className="content__title">
                1. Название, и технические данные (сложность, длительность)
              </h3>
              <p className="content__text">Игра Spells of English имеет 4 уровня сложности:</p>
              <ul className="content__list">
                <li>Невилл Лонгботтом - новичок</li>
                <li>Гермиона Грейнджер - базовые знания</li>
                <li>Полумна Лавгуд - средние знания</li>
                <li>Северус Снегг - продвинутые знания</li>
              </ul>
            </div>
            <div className="content__block">
              <h3 className="content__title">2. Жанр</h3>
              <p className="content__text">
                Spells of English - обучающая игра. Твоя цель - набрать максимальное количество
                баллов, выучив как можно больше английских слов.
              </p>
            </div>
            <div className="content__block">
              <h3 className="content__title">3. Описание игры</h3>
              <p className="content__text">
                Игра представлена в виде игрового поля с клетками от 1 до 48. Каждая игровая клетка
                - новое задание. У каждого задания - свой цвет. Чтобы продвинуться по полю, бр
              </p>
            </div>
            <div className="content__block">
              <h3 className="content__title">4. Подготовка к игре</h3>
            </div>
            <div className="content__block">
              <h3 className="content__title">5. Детальное описание этапов хода</h3>
              <p className="content__text">
                Игрок начинает игру с депозитом в 50 баллов. За каждое выполненное задание ты
                получаешь +10 баллов, за каждое проигранное задание - 5 баллов.
              </p>
            </div>
            <div className="content__block">
              <h3 className="content__title">6. TEST</h3>
              <p className="content__text">test test test test test test :</p>
              <ul className="content__list">
                <li>test test test </li>
                <li>test test </li>
                <li>test test test test test </li>
                <li>test test test test test test test test test </li>
              </ul>
            </div>
          </section>
          <div
            className="btn-back"
            onClick={() => {
              setActiveRules(!activeRules);
            }}
          >
            <button className="btn">
              <Icon name="cross" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalGameRules;
