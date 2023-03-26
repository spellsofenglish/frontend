/**
 * @prettier
 */

import React from 'react';
import { useForm } from 'react-hook-form';

import { QuestionBlock, TitleForm, InputForm, InputBtn } from '../../../../ui-kit';

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

  const onClickNewPassword = (data) => {
    if (isValid) {
      console.log(`отправлена ${JSON.stringify(data)}`);
    }
    reset();
  };

  const watchPassword = watch('password');
  return (
    <div className="form">
      <div className="form__logo">
        <></>
      </div>
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
              validationSchema={{
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
              }}
            />
            <InputForm
              label="Подтверждение пароля"
              name="repeat-password"
              type="password"
              placeholder="Повтори новый пароль"
              errors={errors}
              register={register}
              validationSchema={{
                required: 'Поле обязательно для заполнения',
                validate: {
                  passwordCorrection: (value) =>
                    value.toString() === watchPassword.toString() || 'Пароли не совпадают',
                },
              }}
            />
            <InputBtn
              disabled={isValid ? false : true}
              type="submit"
              value="Сохранить и начать игру"
              onClick={() => {}}
            />
          </form>
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

export default NewPassword;
