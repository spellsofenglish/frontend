/**
 * @prettier
 */

import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { setStep } from '../../../../features/form/formSlice';

import { QuestionBlock, TitleForm, InputForm, InputBtn } from '../../../../ui-kit';

const SendEmail = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const dispatch = useDispatch();

  const onClickSendEmail = (data) => {
    if (isValid) {
      console.log(`отправлена ${JSON.stringify(data)}`);
    }
    reset();
  };

  const openModal = () => {
    console.log('Открытие модального окна с текстом: Ссылка отправлена');
  };

  return (
    <div className="form">
      <div className="form__logo" />
      <div className="form__wrapper">
        <div className="form__block">
          <TitleForm text="Восстановление пароля" />
          <form onSubmit={handleSubmit(onClickSendEmail)}>
            <p className="form__recovery">
              Введи email, чтобы мы могли отправить ссылку на восстановление пароля
            </p>
            <InputForm
              label="Email"
              name="email"
              type="email"
              placeholder="Ivan@example.com"
              errors={errors}
              register={register}
              validationSchema={{
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
                    value.trim().includes(' ') === false ||
                    'Your password must not contain spaces!',
                },
              }}
            />
            <InputBtn
              disabled={isValid ? false : true}
              type="submit"
              value="Отправить ссылку"
              onClick={openModal}
            />
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

export default SendEmail;
