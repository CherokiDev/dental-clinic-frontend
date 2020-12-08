import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import './LoginClient.scss';
import { GET_CLIENT } from '../../../redux/types';
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
		axios.post('http://localhost:8000/api/clientes/login', user)
			.then(res => {
				console.log(res);
				localStorage.setItem("token", JSON.stringify(res.data.token))
				localStorage.setItem("Cliente", JSON.stringify(res.data))
				props.dispatch({ type: GET_CLIENT, payload: res.data })



				setTimeout(() => {
					history.push('/client/profile')
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
				<div className="button-back">
					<Link to='/client'></Link>
				</div>
				<div className="tittleHome2">
					DENTAL CLINIC ALWAYS SMILE
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
	return { client: state.client }
}

export default connect(mapStateToProps)(Login);