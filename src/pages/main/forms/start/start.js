/**
 * @prettier
 */

import React from 'react';

// import { Button } from '../../../../ui-kit';
import { QuestionBlock, TitleForm, InputForm, InputBtn } from '../../../../ui-kit';

// const Start = (props) => {
//   return (
//     <div className="starting-element">
//       <div className="logo-large" />
//       <div className="redirecting-menu">
//         <Button label="Уже есть аккаунт" size="large" onClick={() => props.setFormToStart(1)} />
//         <Button label="Создать аккаунт" size="large" onClick={() => props.setFormToStart(2)} />
//       </div>
//     </div>
//   );
// };

const Start = () => {
  return (
    <div className="form">
      <div className="form__logo"></div>
      <div className="form__wrapper">
        <div className="form__block">
          <TitleForm text="Создание аккаунта" />
          <form>
            <InputForm label="Имя" type="text" placeholder="Иван" />
            <InputForm label="Email" type="email" placeholder="Ivan@example.com" />
            <InputForm label="Пароль" type="password" placeholder="Введи пароль" />
            <InputForm label="Повторение пароля" type="password" placeholder="Повтори пароль" />
            <InputBtn type="submit" value="Создать аккаунт" onClick={() => {}} />
            {/* <button className="form__remember">Не помню пароль</button> */}
          </form>
          <div className="form__contract">
            <p className="form__contract-text">
              Нажимая кнопку «Создать аккаунт», я принимаю условия
            </p>
            <p className="form__contract-btn">Пользовательского соглашения</p>
          </div>
        </div>
        <QuestionBlock
          text="У меня уже есть аккаунт. "
          textBtn="Войти в аккаунт"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Start;
