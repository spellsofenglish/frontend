/**
 * @prettier
 */

import React from 'react';
import Modal from '@mui/material/Modal';

import './styles.scss';

import { Icon } from '../../../ui-kit';
//import { RulesContext } from '../../App';

const ModalGameRules = (props) => {
  //const { activeRules, setActiveRules } = useContext(RulesContext);
  return (
    <Modal
      open={props.isRulesActive}
      onClose={props.onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={props.isRulesActive ? 'modal-page' : null}>
        <div className={props.isRulesActive ? 'modal-page__back active' : 'modal-page__back'}>
          <div className="btn-back" onClick={props.onClose}>
            <button className="btn">
              <Icon name="cross" />
            </button>
          </div>
          <div className={props.isRulesActive ? 'modal-page__block' : null}>
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
                  Игра представлена в виде игрового поля с клетками от 1 до 48. Каждая игровая
                  клетка - новое задание. У каждого задания - свой цвет. Чтобы продвинуться по полю,
                  брось два игровых кубика.
                </p>
              </div>
              <div className="content__block">
                <h3 className="content__title">4. Подготовка к игре</h3>
              </div>
              <div className="content__block">
                <h3 className="content__title">5. Детальное описание этапов хода</h3>
                <p className="content__text">
                  Игрок бросает кости и продвигается по игровому полю вперед в соответствии с
                  выпавшей цифрой: от 2 до 12 шагов. На каждой игровой клетке - уникальное задание:
                </p>
                <p className="content__text">
                  Аудио: прослушай аудио и выбери из списка слово, которое ты услышал.
                </p>
                <p className="content__text">
                  Картинка: на экране ты увидишь картинку и под ней текст с пропущенным словом. На
                  картинке изображено пропущенное слово.
                </p>
                <p className="content__text">
                  Например: На картинке sunglasses, а снизу текст I want to buy ____. Слово
                  sunglasses разобрано на буквы в хаотичном порядке. Собери буквы, чтобы получилось
                  слово с картинки.
                </p>
                <p className="content__text">У тебя есть две минуты, чтобы выполнить задание.</p>
              </div>
              <div className="content__block">
                <h3 className="content__title">6. Условия окончания игры и победы.</h3>
                <p className="content__text">
                  Игрок начинает игру с депозитом в 50 баллов. За каждое выполненное задание ты
                  получаешь +10 баллов, за каждое проигранное задание - 5 баллов.
                </p>
              </div>
              <div className="content__block">
                <h3 className="content__title">
                  7. Благодарности (тем кто участвовал в тестировании, помогал советами и т. д.)
                </h3>
              </div>
              <div className="content__block">
                <h3 className="content__title">
                  8. Дополнительные правила, FAQ (часто задаваемые вопросы), советы по стратегии…
                </h3>
              </div>
            </section>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ModalGameRules;
