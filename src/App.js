import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import './assets/styles/global.scss'
import { ToggleLight } from './cmps/ToggleLight/ToggleLight';
import { Home } from './pages/Home/Home';

const App = () => {
  return (
    <div className="App">
      <ToggleLight></ToggleLight>
      <Switch>
        <Home></Home>
      </Switch>
    </div>
  );
}

App
