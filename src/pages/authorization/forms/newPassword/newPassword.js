/**
 * @prettier
 */

import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { setStep } from '../../../../features/form/formSlice';

import { QuestionBlock, TitleForm, InputForm, InputBtn } from '../../../../ui-kit';

const NEW_PASSWORD_SCHEMA = {
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

const NewPassword = (props) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    watch,
  } = useForm({
    mode: 'onChange',
  });

  const watchPassword = watch('password');
  const dispatch = useDispatch();

  const PASSWORD_SCHEMA = {
    required: 'Поле обязательно для заполнения',
    validate: {
      passwordCorrection: (value) =>
        value?.toString() === watchPassword?.toString() || 'Пароли не совпадают',
    },
  };

  const onClickNewPassword = (data) => {
    if (isValid) {
      const pathname = window.location.href;
      const userId = Number(pathname.split('?').at(-1));

      const requestBody = {
        newPassword: data.password,
        id: userId,
      };

      props.resetPassword(requestBody);
    }
    reset();
  };

  return (
    <div className="form">
      <div className="form__logo" />
      <div className="form__wrapper">
        <div className="form__block">
          <TitleForm text="Восстановление пароля" />
          <form onSubmit={handleSubmit(onClickNewPassword)}>
            <p className="form__recovery">
              Введи новый пароль, чтобы восстановить вход в аккаунт и начать игру
            </p>
            <InputForm
              label="Новый пароль"
              name="password"
              type="password"
              placeholder="Введи новый пароль"
              errors={errors}
              register={register}
              validationSchema={NEW_PASSWORD_SCHEMA}
            />
            <InputForm
              label="Подтверждение пароля"
              name="repeat-password"
              type="password"
              placeholder="Повтори новый пароль"
              errors={errors}
              register={register}
              validationSchema={PASSWORD_SCHEMA}
            />
            <InputBtn disabled={!isValid || props.isLoading} value="Сохранить и начать игру" />
          </form>
        </div>
        <QuestionBlock
          text="У меня уже есть аккаунт."
          textBtn="Войти в аккаунт"
          onClick={() => dispatch(setStep('auth'))}
        />
      </div>
    </div>
  );
};

export default NewPassword;
