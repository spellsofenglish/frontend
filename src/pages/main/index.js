/**
 * @prettier
 */

import React from 'react';

import UsersService from '../../services/users';

import MainView from '../main/mainView';

const MainPage = () => {
  const createUser = async (data) => {
    try {
      await UsersService.register(data);
    } catch {
      return Promise.reject();
    }
  };

  return <MainView createUser={createUser} />;
};

export default MainPage;
