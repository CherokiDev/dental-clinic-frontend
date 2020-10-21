import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/login' component={Login} exact/>
        <Route path='/register' component={Register} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
