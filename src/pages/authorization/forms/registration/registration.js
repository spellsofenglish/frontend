/**
 * @prettier
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { setStep } from '../../../../features/form/formSlice';

import { QuestionBlock, TitleForm, InputForm, InputBtn } from '../../../../ui-kit';
import { EmailModal } from '../../../../components/modals';

import letterImg from '../../../../assets/images/letter.png';

const NAME_SCHEMA = {
  required: 'Поле обязательно для заполнения',
  maxLength: {
    value: 50,
    message: 'Имя должно содержать не более 50 латинских букв или цифр',
  },
  pattern: {
    value: /^[A-Za-z 0-9]+$/g,
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
    value: /(^|\s+)[\w\-+.]+@([\w\-+]+\.)+[\w]{2,4}($|\s+)/,
    message: 'Формат email неверный',
  },
  validate: {
    noSpace: (value) =>
      value.trim().includes(' ') === false || 'Email не должен содержать пробелов',
  },
};

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

const Registration = (props) => {
  const [email, setEmail] = useState('');

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
    watch,
    trigger,
  } = useForm({
    mode: 'onChange',
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const watchPassword = watch('password');
  const watchRepeatPassword = watch('repeat-password');
  useEffect(() => {
    trigger('repeat-password');
  }, [watchPassword, watchRepeatPassword, trigger]);

  const REPEATE_PASSWORD_SCHEMA = {
    validate: {
      passwordCorrection: (value) =>
        value.toString() === watchPassword.toString() || 'Пароли не совпадают',
      passwordCorrectionLength: (value) => value.length !== 0 || 'Поле обязательно для заполнения',
    },
  };

  const onClickRegistration = async (data) => {
    const body = {
      email: data.email,
      nickName: data.name.trim(),
      password: data.password,
    };
    props.setModalActive(true);
    setEmail(data.email);

    await props.createUser(body);

    reset();
  };

  const openModal = () => {
    navigate('/politics');
  };

  return (
    <>
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
              <InputBtn value="Создать аккаунт" disabled={!isValid || props.isLoading} />
            </form>
            <div className="form__contract">
              <p className="form__contract-text">
                Нажимая кнопку «Создать аккаунт», я принимаю условия
              </p>
              <p onClick={openModal} className="form__contract-btn">
                Пользовательского соглашения
              </p>
            </div>
          </div>
          <QuestionBlock
            text="У меня уже есть аккаунт. "
            textBtn="Войти в аккаунт"
            onClick={() => dispatch(setStep('auth'))}
          />
        </div>
      </div>
      <EmailModal
        active={props.modalActive}
        setActive={props.setModalActive}
        src={letterImg}
        alt="letter"
      >
        <h2>Ссылка отправлена</h2>
        <p>Мы отправили ссылку на активацию аккаунта на {email}.</p>
        <p>Cледуй инструкциям письма и ты быстро вернешься в игру!</p>
      </EmailModal>
    </>
  );
};

export default Registration;
