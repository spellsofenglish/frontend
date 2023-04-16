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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (props.isAuth) {
      dispatch(setStep('auth'));
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

  const login = async (data) => {
    setIsLoading(true);
    try {
      const user = await UsersService.login(data);
      dispatch(setAuthData(user));
      if (user.id) {
        // может ли быть ноль
        navigate('menu');
      }
    } catch {
      return Promise.reject();
    }
    setIsLoading(false);
  };

  return (
    <MainView
      createUser={createUser}
      login={login}
      setIsLoading={setIsLoading}
      isLoading={isLoading}
    />
  );
};

MainPage.propTypes = {
  isAuth: PropTypes.bool,
};

MainPage.defaultProps = {
  isAuth: PropTypes.false,
};

export default MainPage;
