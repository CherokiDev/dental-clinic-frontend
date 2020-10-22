import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';
import Profile from './containers/Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/login' component={Login} exact/>
        <Route path='/signup' component={Signup} exact/>
        <Route path='/profile' component={Profile} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
