import React from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import './Login.scss';


const Login = () => {

	const history = useHistory();

	const handleSubmit = event => {
		event.preventDefault();
		const user = {
			email: event.target.email.value,
			password: event.target.password.value,
		};
		axios.post('https://appappointments.herokuapp.com/users/login', user)
			.then(res => {
				console.log(res);
				localStorage.setItem("token", JSON.stringify(res.data.token))
				localStorage.setItem("user", JSON.stringify(res.data))
				console.log(localStorage.getItem('token'));


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
				  <Link to='/'>Back</Link>
        </div>
      </div>

			<div className="containerFormLogin">
				<form className="loginForm" onSubmit={handleSubmit}>
					<input className="formEmail" type="email" name="email" required placeholder=" Introduce tu email" />
					<input type="password" name="password" required placeholder=" Introduce tu contraseña" />
					<button type="submit">Log in</button>
				</form>
      </div>
      
		</body>
	)
}

export default Login;