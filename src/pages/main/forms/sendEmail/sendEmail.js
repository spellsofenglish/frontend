/**
 * @prettier
 */

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { QuestionBlock, TitleForm, InputForm, InputBtn } from '../../../../ui-kit';
import { Modal } from '../../../../features/Modal';

import letterImg from '../../../../assets/images/letter.png';

const SendEmail = (props) => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const [modalActive, setModalActive] = useState(false);
  const [email, setEmail] = useState('');

  const onClickSendEmail = (data) => {
    if (isValid) {
      setEmail(data.email);
      console.log(`отправлена ${JSON.stringify(data)}`);
    }
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
                disabled={!isValid}
                type="submit"
                value="Отправить ссылку"
                onClick={() => {
                  console.log(InputForm.value);
                  setModalActive(true);
                }}
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
      <Modal active={modalActive} setActive={setModalActive} src={letterImg} alt="letter">
        <h2>Ссылка отправлена</h2>
        <p>Мы отправили ссылку на восстановление пароля на {email}.</p>
        <p>Cледуй инструкциям письма и ты быстро вернешься в игру!</p>
      </Modal>
    </>
  );
};

export default SendEmail;
