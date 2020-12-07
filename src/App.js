import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './containers/Home/Home';
import Client from './containers/Client/Client';
import LoginClient from './containers/Client/Login/LoginClient';
import SignupClient from './containers/Client/Signup/SignupClient';
import Profile from './containers/Profile/Profile';
import NewAppointment from './containers/Dentist/NewAppointment/NewAppointment';
import ShowAppointments from './containers/ShowAppointments/ShowAppointments';
import Dentist from './containers/Dentist/Dentist';
import LoginDentist from './containers/Dentist/Login/LoginDentist';
import SignupDentist from './containers/Dentist/Signup/SignupDentist';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/client' component={Client} exact/>
        <Route path='/client/login' component={LoginClient} exact />
        <Route path='/client/signup' component={SignupClient} exact />
        <Route path='/dentist' component={Dentist} exact />
        <Route path='/dentist/login' component={LoginDentist} exact />
        <Route path='/dentist/signup' component={SignupDentist} exact />
        <Route path='/profile' component={Profile} exact />
        <Route path='/profile/newappointment' component={NewAppointment} exact />
        <Route path='/profile/showappointments' component={ShowAppointments} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
