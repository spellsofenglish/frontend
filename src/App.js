/**
 * @prettier
 */

import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import './styles.scss';

import {
  Authorization,
  Politics,
  Menu,
  NewGame,
  //Storybook
} from './pages';

// export const RulesContext = createContext({
//   active: false,
//   setActive: () => {},
// });

function App() {
  //const [activeRules, setActiveRules] = useState(false);
  return (
    //<RulesContext.Provider value={{ activeRules, setActiveRules }}>
    <Routes>
      <Route path="/" element={<Authorization />} />
      <Route path="/politics" element={<Politics />} />
      <Route path="/auth" element={<Authorization isAuth={true} />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/reset" element={<Authorization isReset={true} />} />
      <Route path="/auth/menu" element={<Navigate to="/menu" />} />
      <Route path="/reset/menu" element={<Navigate to="/menu" />} />
      <Route path="/new-game" element={<NewGame />} />
      {/* <Route path="/storybook" element={<Storybook />} /> */}
    </Routes>
    //</RulesContext.Provider>
  );
}

export default App;
