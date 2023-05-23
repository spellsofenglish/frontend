/**
 * @prettier
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import UsersService from '../../services/users';
import { setStep } from '../../features/form/formSlice';
import { setAuthData } from '../../features/user/userResponseSlice';

import MainView from '../main/mainView';

const MainPage = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (props.isAuth) {
      dispatch(setStep('auth'));
    }
    if (props.isReset) {
      dispatch(setStep('reset'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createUser = async (data) => {
    setIsLoading(true);
    try {
      await UsersService.register(data);
    } catch {
      return Promise.reject();
    }
    setIsLoading(false);
  };

  const authorization = async (data) => {
    setIsLoading(true);
    try {
      const user = await UsersService.authorization(data);
      dispatch(setAuthData(user));
      if (user.id) {
        navigate('menu');
      }
    } catch (error) {
      //return Promise.reject(error);
    }
    setIsLoading(false);
  };

  const changePassword = async (data) => {
    setIsLoading(true);
    try {
      await UsersService.changePassword(data);
    } catch {
      return Promise.reject();
    }
    setIsLoading(false);
  };

  const resetPassword = async (data) => {
    setIsLoading(true);
    try {
      await UsersService.resetPassword(data);
      dispatch(setStep('auth'));
    } catch {
      return Promise.reject();
    }
    setIsLoading(false);
  };

  return (
    <MainView
      createUser={createUser}
      authorization={authorization}
      setIsLoading={setIsLoading}
      isLoading={isLoading}
      changePassword={changePassword}
      setModalActive={setModalActive}
      modalActive={modalActive}
      resetPassword={resetPassword}
    />
  );
};

MainPage.propTypes = {
  isAuth: PropTypes.bool,
  isRest: PropTypes.bool,
};

MainPage.defaultProps = {
  isAuth: PropTypes.false,
  isRest: PropTypes.false,
};

export default MainPage;
