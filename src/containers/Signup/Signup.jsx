import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Signup = () => {
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
        axios.post('http://localhost:3004/users/signup', user)
            .then(res => {
                console.log(res)
            })
           .catch(error => console.log(error.response.data))
    }

    return (
        <div>
            <form className="login-form" onSubmit={handleSubmit}>
                <input type="text" name="firstname" required placeholder="Introduce tu nombre"/>
                <input type="text" name="lastname" required placeholder="Introduce tus apellidos"/>
                <input type="email" name="email" required placeholder="Introduce tu email"/>
                <input type="password" name="password" required placeholder="Introduce tu contraseña"/>
                <input type="tel" name="phone" placeholder="Introduce tu teléfono"/>
                <input type="date" name="birthdate" placeholder="Introduce tu cumpleaños"/>
                <input type="text" name="address" placeholder="Introduce tu dirección"/>
                <button type="submit">Sign Up</button>
            </form>
            
            <Link to ='/'>Home</Link>
            
        </div>
    )
}

export default Signup;