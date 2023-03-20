/**
 * @prettier
 */

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './styles.scss';

import { HomePage } from './pages/HomePage';
//import { AuthPage } from './pages/AuthPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { MainPage } from './pages/index';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
