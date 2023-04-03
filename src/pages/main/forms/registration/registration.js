/**
 * @prettier
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { QuestionBlock, TitleForm, InputForm, InputBtn } from '../../../../ui-kit';

const NAME_SCHEMA = {
  required: 'Поле обязательно для заполнения',
  maxLength: {
    value: 50,
    message: 'Имя должно содержать не более 50 латинских букв или цифр',
  },
  pattern: {
    value: /^[A-Za-z0-9]+$/g,
    message: 'Имя должно содержать латинские буквы или цифры',
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
    noSpace: (value) => value.trim().includes(' ') === false || 'Формат email неверный',
  },
};

const PASSWORD_SCHEMA = {
  required: 'Поле обязательно для заполнения',
  maxLength: {
    value: 50,
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

const Registration = (props) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    watch,
  } = useForm({
    mode: 'onChange',
  });

  const watchPassword = watch(['password', 'repeat-password']);

  const REPEATE_PASSWORD_SCHEMA = {
    required: 'Поле обязательно для заполнения',
    validate: {
      passwordCorrection: (value) =>
        value.toString() === watchPassword[0].toString() || 'Пароли не совпадают',
    },
  };

  const onClickRegistration = (data) => {
    if (isValid) {
      console.log(`отправлена ${JSON.stringify(data)}`);
    }
    reset();
  };

  const openModal = () => {
    console.log('Открытие модального окна - Пользовательское соглашение');
  };

  return (
    <div className="form form-big ">
      <div className="form__logo" />
      <div className="form__wrapper">
        <div className="form__block">
          <TitleForm text="Создание аккаунта" />
          <form onSubmit={handleSubmit(onClickRegistration)}>
            <InputForm
              label="Имя"
              name="name"
              type="text"
              placeholder="Иван"
              errors={errors}
              register={register}
              validationSchema={NAME_SCHEMA}
            />
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
            <InputForm
              label="Повторение пароля"
              name="repeat-password"
              type="password"
              placeholder="Повтори пароль"
              errors={errors}
              register={register}
              validationSchema={REPEATE_PASSWORD_SCHEMA}
            />
            <InputBtn value="Создать аккаунт" disabled={isValid ? false : true} />
          </form>
          <div className="form__contract">
            <p className="form__contract-text">
              Нажимая кнопку «Создать аккаунт», я принимаю условия
            </p>
            <p onClick={openModal} className="form__contract-btn">
              <Link to="/politics">Пользовательского соглашения</Link>
            </p>
          </div>
        </div>
        <QuestionBlock
          text="У меня уже есть аккаунт. "
          textBtn="Войти в аккаунт"
          onClick={() => props.setFormToStart(1)}
        />
      </div>
    </div>
  );
};

export default Registration;
