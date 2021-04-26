import React from 'react';
import './assets/styles/global.scss'
import { ToggleLight } from './cmps/ToggleLight/ToggleLight';
import { Home } from './pages/Home/Home';

const App = () => {
  return (
    <div className="App">
      <ToggleLight></ToggleLight>
        <Home></Home>
    </div>
  );
}

export default App;
