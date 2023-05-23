/**
 * @prettier
 */

import React, { createContext, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import './styles.scss';

import { MainPage } from './pages/index';
import { PoliticsPage } from './pages/PoliticsPage';
import { MainMenu } from './pages/MainMenu';

export const RulesContext = createContext({
  active: false,
  setActive: () => {},
});

function App() {
  const [activeRules, setActiveRules] = useState(false);
  return (
    <RulesContext.Provider value={{ activeRules, setActiveRules }}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/politics" element={<PoliticsPage />} />
        <Route path="/auth" element={<MainPage isAuth={true} />} />
        <Route path="/menu" element={<MainMenu />} />
        <Route path="/reset" element={<MainPage isReset={true} />} />
        <Route path="/auth/menu" element={<Navigate to="/menu" />} />
        <Route path="/reset/menu" element={<Navigate to="/menu" />} />
      </Routes>
    </RulesContext.Provider>
  );
}

export default App;
