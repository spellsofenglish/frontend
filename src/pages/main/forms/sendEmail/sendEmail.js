/**
 * @prettier
 */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { setStep } from '../../../../features/form/formSlice';

import { QuestionBlock, TitleForm, InputForm, InputBtn } from '../../../../ui-kit';
import { Modal } from '../../../../components/Modal';

import letterImg from '../../../../assets/images/letter.png';

const EMAIL_SCHEMA = {
  required: 'Поле обязательно для заполнения',
  maxLength: {
    value: 50,
    message: 'Email должен содержать не более 50 латинских букв, цифр или символов',
  },
  pattern: {
    value: /(^|\s+)[\w\-+.]+@([\w-+]+\.)+[\w]{2,4}($|\s+)/,
    message: 'Формат email неверный',
  },
  validate: {
    noSpace: (value) =>
      value.trim().includes(' ') === false || 'Email не должен содержать пробелов',
  },
};

const SendEmail = (props) => {
  const [email, setEmail] = useState('');

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
    props.changePassword(data);
    setEmail(data.email);

    reset();
  };

  return (
    <>
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
                validationSchema={EMAIL_SCHEMA}
              />
              <InputBtn
                disabled={!isValid}
                type="submit"
                value="Отправить ссылку"
                onClick={() => {
                  props.setModalActive(true);
                }}
              />
            </form>
          </div>
          <QuestionBlock
            text="У меня уже есть аккаунт. "
            textBtn="Войти в аккаунт"
            onClick={() => dispatch(setStep('auth'))}
          />
        </div>
      </div>
      <Modal
        active={props.modalActive}
        setActive={props.setModalActive}
        src={letterImg}
        alt="letter"
      >
        <h2>Ссылка отправлена</h2>
        <p>Мы отправили ссылку на восстановление пароля на {email}.</p>
        <p>Cледуй инструкциям письма и ты быстро вернешься в игру!</p>
      </Modal>
    </>
  );
};

export default SendEmail;
