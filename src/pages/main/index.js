/**
 * @prettier
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import UsersService from '../../services/users';
import { setStep } from '../../features/form/formSlice';

import MainView from '../main/mainView';

const MainPage = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (props.isAuth) {
      dispatch(setStep('auth'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createUser = async (data) => {
    try {
      await UsersService.register(data);
    } catch {
      return Promise.reject();
    }
  };

  return <MainView createUser={createUser} />;
};

MainPage.propTypes = {
  isAuth: PropTypes.bool,
};

MainPage.defaultProps = {
  isAuth: PropTypes.false,
};

export default MainPage;
