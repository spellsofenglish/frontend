/**
 * @prettier
 */

import React from 'react';
import { useForm } from 'react-hook-form';

import { QuestionBlock, TitleForm, InputForm, InputBtn } from '../../../../ui-kit';

const PASSWORD_SCHEMA = {
  required: 'Поле обязательно для заполнения',
  maxLength: {
    value: 24,
    message: 'Пароль должен содержать от 8 до 24 латинских букв, цифр или символов',
  },
  minLength: {
    value: 8,
    message: 'Пароль должен содержать от 8 до 24 латинских букв, цифр или символов',
  },
  pattern: {
    value: /^[A-Za-z0-9!?@#$%^&*()/|*--+=_`'";:~.,]+$/g,
    message: 'Пароль должен содержать от 8 до 24 латинских букв, цифр или символов',
  },
};

const EMAIL_SCHEMA = {
  required: 'Поле обязательно для заполнения',
  maxLength: {
    value: 50,
    message: 'Email должен содержать не более 50 латинских букв, цифр или символов',
  },
  pattern: {
    value: /(^|\s+)[\w\-.]+@([\w-]+\.)+[\w-]{2,4}($|\s+)/,
    message: 'Формат email неверный',
  },
  validate: {
    noSpace: (value) =>
      value.trim().includes(' ') === false || 'Email не должен содержать пробелов',
  },
};

const Authorization = (props) => {
  // const [errorResponse, setErrorResponse] = useState("");//для обработки ошибки от бэка
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const onClickLogin = (data) => {
    if (isValid) {
      console.log(`Вход в аккаунт ${JSON.stringify(data)}`);
      //логика для обработки ошибки от бэка
      //кладём в setErrorResponse("Неправильный email или пароль")
    }
    reset();
  };
  return (
    <div className="form">
      <div className="form__logo" />
      <div className="form__wrapper">
        <div className="form__block">
          <TitleForm text="Вход в аккаунт" />
          <form onSubmit={handleSubmit(onClickLogin)}>
            <InputForm
              label="Email"
              name="email"
              type="email"
              placeholder="Ivan@example.com"
              errors={errors}
              register={register}
              validationSchema={EMAIL_SCHEMA}
            />
            <InputForm
              label="Пароль"
              name="password"
              type="password"
              placeholder="Введи пароль"
              errors={errors}
              register={register}
              validationSchema={PASSWORD_SCHEMA}
            />
            {/* <p className="error-response-text">errorResponse Неправильный email или пароль</p> */}
            <p className="form__remember-btn" onClick={() => props.setFormToStart(3)}>
              Не помню пароль
            </p>
            <InputBtn disabled={!isValid} type="submit" value="Войти" />
          </form>
        </div>
        <QuestionBlock
          text="Еще нет аккаунта. "
          textBtn="Создать аккаунт"
          onClick={() => props.setFormToStart(4)}
        />
      </div>
    </div>
  );
};

export default Authorization;
