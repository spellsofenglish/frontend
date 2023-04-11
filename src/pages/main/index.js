/**
 * @prettier
 */

import React from 'react';

import UsersService from '../../services/users';

import MainView from '../main/mainView';

const MainPage = () => {
  const createUser = async (data) => {
    try {
      const result = await UsersService.register(data);
      console.log('result', result);
    } catch {
      return Promise.reject();
    }
  };

  return <MainView createUser={createUser} />;
};

export default MainPage;
