/**
 * @prettier
 */

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './styles.scss';

import { MainPage } from './pages/index';
import { PoliticsPage } from './pages/PoliticsPage';
// import { MenuPage } from './pages/menu-page';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/politics" element={<PoliticsPage />} />
      <Route path="/auth" element={<MainPage isAuth={true} />} />
      {/*<Route path="/menu" element={<MenuPage />} />*/}
    </Routes>
  );
}

export default App;
