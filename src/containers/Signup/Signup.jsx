import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import './Signup.scss';


const Signup = () => {

  const history = useHistory();
  const [respuesta, setRespuesta] = useState();
  const handleSubmit = event => {
    event.preventDefault();
    const user = {
      nombre: event.target.nombre.value,
      email: event.target.email.value,
      password: event.target.password.value
    };
    axios.post('http://localhost:8000/api/clientes', user)
      .then(res => {
        //console.log(res.data)
        localStorage.setItem("user", JSON.stringify(res));
        //setRespuesta(`${res.data.nombre} Registro completado`)
        setTimeout(() => {
          history.push('/profile')
        }, 1500);
      })
      .catch(error => console.log(error.response))
  }

  return (
    <body className="body">

      <div className="header">
        <div className="buttons">
          <Link to='/client'>Back</Link>
        </div>
      </div>

      <div className="containerFormSignUp">
        <form className="loginForm" onSubmit={handleSubmit}>
          <input type="text" name="nombre" required placeholder=" Introduce tu nombre" />
          <input type="email" name="email" required placeholder=" Introduce tu email" />
          <input type="password" name="password" required placeholder=" Introduce tu contraseña" />
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