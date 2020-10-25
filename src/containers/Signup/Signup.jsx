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
            firstname: event.target.firstname.value,
            lastname: event.target.lastname.value,
            email: event.target.email.value,
            password: event.target.password.value,
            phone: event.target.phone.value,
            birthdate: event.target.birthdate.value,
            address: event.target.address.value
        };
        axios.post('https://appappointments.herokuapp.com/users/signup', user)
            .then(res => {
                console.log(res.data)
                localStorage.setItem("user", JSON.stringify(res.data));
                setRespuesta(`${res.data.firstname} Registro completado`)
                setTimeout(() => {
                    history.push('/profile')
                }, 1500);
            })
           .catch(error => console.log(error.response.data))
    }

    return (
      <body className="body">

        <div className="header">
          <div className="buttons">
            <Link to ='/'>Back</Link>
          </div>
        </div>

        <div className="containerFormSignUp">
            <form className="loginForm" onSubmit={handleSubmit}>
                <input type="text" name="firstname" required placeholder=" Introduce tu nombre"/>
                <input type="text" name="lastname" required placeholder=" Introduce tus apellidos"/>
                <input type="email" name="email" required placeholder=" Introduce tu email"/>
                <input type="password" name="password" required placeholder=" Introduce tu contraseña"/>
                <input type="tel" name="phone" placeholder=" Introduce tu teléfono"/>
                <input type="text" name="birthdate" placeholder=" Introduce tu cumpleaños"/>
                <input type="text" name="address" placeholder=" Introduce tu dirección"/>
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