import React from 'react';
import axios from 'axios';
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

    return (
      <body className="body">
        <div>
          <form className="login-form" onSubmit={handleSubmit}>
              <input type="text" name="date" required placeholder="Introduce una fecha"/>
              <input type="text" name="observations" required placeholder="Observaciones"/>
              <button type="submit">Crear cita</button>
          </form>            
        </div>
      </body>
    )
}

export default NewAppointment;