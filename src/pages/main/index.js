/**
 * @prettier
 */

import React, { useState } from 'react';
//import ChurchesListService from '../services/test';
import MainView from '../main/mainView';

const MainPage = () => {
  const [formToStart, setFormToStart] = useState(0);
  // const getTestData = async () => {
  //   try {
  //     const result = await ChurchesListService.get();
  //     console.log('result', result);
  //   } catch {
  //     return Promise.reject();
  //   }
  // };

  // useEffect(() => {
  //   getTestData();
  // }, []);

  return <MainView formToStart={formToStart} setFormToStart={setFormToStart} />;
};

export default MainPage;
