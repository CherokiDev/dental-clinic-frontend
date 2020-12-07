import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { GET_DENTIST } from '../../../redux/types';
import { connect } from 'react-redux';



const Login = (props) => {

	const history = useHistory();
	const [mensajeError, setMensajeError] = useState();

	

	const handleSubmit = event => {
		event.preventDefault();
		const user = {
			email: event.target.email.value,
			password: event.target.password.value,
		};

		axios.post('http://localhost:8000/api/dentistas/login', user)
			.then(res => {
				console.log(res);
				localStorage.setItem("token", JSON.stringify(res.data.token))
				localStorage.setItem("Dentista", JSON.stringify(res.data))
				props.dispatch({ type: GET_DENTIST, payload: res.data})
				
				console.log(localStorage.getItem('token'));
				


				setTimeout(() => {
					history.push('/profile')
				}, 1500);

			})
			.catch(error => {
				//console.log(error.response.data);
				setMensajeError(error.response.data.message)
			})
			
	}


	return (
		<body className="body">

			<div className="header">
				<div className="buttons">
					<Link to='/dentist'>Back</Link>
				</div>
			</div>

			<div className="containerFormLogin">
				<form className="loginForm" onSubmit={handleSubmit}>
					<div className="textForm">Email:</div>
					<input className="formEmail" type="email" name="email" required placeholder="Please enter your email" />
					<div className="textForm">Password:</div>
					<input type="password" name="password" required placeholder="Please enter your password" />
					<div className="mensajeError">{mensajeError}</div>
					<button type="submit">Log in</button>
				</form>
			</div>

		</body>
	)
}

const mapStateToProps = state => {
	return { dentist: state.dentist }
}

export default connect(mapStateToProps)(Login);