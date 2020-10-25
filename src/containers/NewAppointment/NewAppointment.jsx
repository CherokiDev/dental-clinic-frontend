import React from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import './NewAppointment.scss';

const NewAppointment = () => {
    const validator = JSON.parse(localStorage.getItem('user'));
    const handleSubmit = event => {
        event.preventDefault();
        const appointment = {
            date: event.target.date.value,
            observations: event.target.observations.value
        };
        axios.post('https://appappointments.herokuapp.com/appointments/newAppointment/'+ validator.email, appointment)
            .then(res => {
                console.log(res)
            })
           .catch(error => console.log(error.response.data))
    }

    const history = useHistory();


    const salir = async() => {
      localStorage.clear();
      await axios.put('https://appappointments.herokuapp.com/users/logout/'+ validator.email)
      await history.push('/');
  }

    return (
      <body className="body">

        <div className="header">
          <div className="buttons">
				    <Link to='/profile'>Back</Link>
          </div>
          <div className="buttons">
            <Link to onClick={salir}>Salir</Link>

          </div>
        </div>

        <div className="containerFormLogin">
          <form className="loginForm" onSubmit={handleSubmit}>
          <input type="text" name="date" required placeholder="Introduce una fecha"/>
          <input type="text" name="observations" required placeholder="Observaciones"/>
          <button type="submit">Crear cita</button>
          </form>            
        </div>
        
      </body>
    )
}

export default NewAppointment;