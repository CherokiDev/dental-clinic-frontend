import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';


const Signup = () => {

  const history = useHistory();
  const [respuesta, setRespuesta] = useState();
  const handleSubmit = event => {
    event.preventDefault();
    const user = {
      nombre: event.target.nombre.value,
      email: event.target.email.value,
      password: event.target.password.value,
      telefono: event.target.telefono.value
    };
    axios.post('http://localhost:8000/api/dentistas/register', user)
      .then(res => {
        //console.log(res.data)
        localStorage.setItem("user", JSON.stringify(res));
        //setRespuesta(`${res.data.nombre} Registro completado`)
        setTimeout(() => {
          history.push('/dentist/login')
        }, 1500);
      })
      .catch(error => console.log(error.response))
  }

  return (
    <body className="body">

<div className="header">
        <div className="button-back">
          <Link to='/dentist'></Link>
        </div>
        <div className="tittleHome2">
          DENTAL CLINIC ALWAYS SMILE - Dentist Area
        </div>
      </div>

      <div className="containerFormSignUp">
        <form className="loginForm" onSubmit={handleSubmit}>
          <div className="textForm">Name and Surnames:</div>
          <input type="text" name="nombre" required placeholder=" Please enter your name " />
          {/* <div className="textForm">Surnames:</div>
          <input type="text" name="apellidos" required placeholder=" Please enter your surnames" /> */}
          <div className="textForm">Email:</div>
          <input type="email" name="email" required placeholder=" Please enter your email" />
          <div className="textForm">Password:</div>
          <input type="password" name="password" required placeholder=" Please enter your password" />
          <div className="textForm">Phone:</div>
          <input type="text" name="telefono" required placeholder=" Please enter your phone number" />
          <button type="submit">Sign Up</button>
        </form>

        <div>
          {respuesta}
        </div>



      </div>
    </body>
  )
}

export default Signup;