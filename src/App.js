import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './containers/Home/Home';
import Client from './containers/Client/Client';
import LoginClient from './containers/Client/Login/LoginClient';
import SignupClient from './containers/Client/Signup/SignupClient';
import ProfileDentist from './containers/Dentist/Profile/ProfileDentist';
import NewAppointment from './containers/Dentist/NewAppointment/NewAppointment';
import ShowAppointmentsDentist from './containers/Dentist/ShowAppointments/ShowAppointmentsDentist';
import Dentist from './containers/Dentist/Dentist';
import LoginDentist from './containers/Dentist/Login/LoginDentist';
import SignupDentist from './containers/Dentist/Signup/SignupDentist';
import ProfileClient from './containers/Client/Profile/ProfileClient';
import ShowAppointmentsClient from './containers/Client/ShowAppointments/ShowAppointments'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/client' component={Client} exact/>
        <Route path='/client/login' component={LoginClient} exact />
        <Route path='/client/signup' component={SignupClient} exact />
        <Route path='/client/profile' component={ProfileClient} exact />
        <Route path='/client/showAppointments' component={ShowAppointmentsClient} exact />
        <Route path='/dentist' component={Dentist} exact />
        <Route path='/dentist/login' component={LoginDentist} exact />
        <Route path='/dentist/signup' component={SignupDentist} exact />
        <Route path='/dentist/profile' component={ProfileDentist} exact />
        <Route path='/dentist/newappointment' component={NewAppointment} exact />
        <Route path='/dentist/showappointments' component={ShowAppointmentsDentist} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
