/**
 * @prettier
 */

import React, { useEffect } from 'react';
import ChurchesListService from '../services/test';

export const HomePage = () => {
  const getTestData = async () => {
    try {
      const result = await ChurchesListService.get();
      console.log('result', result);
    } catch {
      return Promise.reject();
    }
  };

  useEffect(() => {
    getTestData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h1>HOME</h1>
        <p>test page HomePage</p>
      </header>
    </div>
  );
};
