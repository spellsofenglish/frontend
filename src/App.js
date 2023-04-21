/**
 * @prettier
 */

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './styles.scss';

import { MainPage } from './pages/index';
import { PoliticsPage } from './pages/PoliticsPage';
import { MainMenu } from './pages/MainMenu';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/politics" element={<PoliticsPage />} />
      <Route path="/auth" element={<MainPage isAuth={true} />} />
      <Route path="/menu" element={<MainMenu />} />
      <Route path="/reset" element={<MainPage isReset={true} />} />
    </Routes>
  );
}

export default App;
