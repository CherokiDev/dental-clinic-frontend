import React from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import './NewAppointment.scss';

const NewAppointment = () => {
    const validator = JSON.parse(localStorage.getItem('user'));
    const handleSubmit = event => {
        event.preventDefault();
        const appointment = {
            tipo: event.target.tipo.value,
            descripcion: event.target.descripcion.value,
            precio: event.target.precio.value
        };
        axios.post('http://localhost:8000/api/citas/store', appointment)
            .then(res => {
                console.log(res)
            })
           .catch(error => console.log(error.response))
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
          <input type="text" name="tipo" required placeholder="Introduce un tipo"/>
          <input type="text" name="descripcion" required placeholder="Introduce una descripcion"/>
          <input type="text" name="precio" required placeholder="Introduce un precio"/>
          <select name="cliente" id="">
            <option value="">Cliente</option>
          </select>
          <button type="submit">Crear cita</button>
          </form>            
        </div>
        
      </body>
    )
}

export default NewAppointment;