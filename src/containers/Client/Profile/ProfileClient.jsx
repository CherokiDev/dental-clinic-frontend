import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './ProfileClient.scss';
import { GET_ALL_CLIENTS, LOGOUT } from '../../../redux/types';
import { connect } from 'react-redux';


const Profile = (props) => {
    const userLogin = JSON.parse(localStorage.getItem('user'));
    //const [datosCitas, setCitas] = useState([]);
    const compruebaToken = localStorage.getItem('token');


    const history = useHistory();


    const salir = async() => {
        localStorage.clear();
        //await axios.put('https://appappointments.herokuapp.com/users/logout/'+ userLogin.email)
        history.push('/');
        await props.dispatch({ type: LOGOUT, payload: {}});
    }

    
	
	useEffect(() => {
		axios.get('http://localhost:8000/api/clientes/', {
			headers: {
				Authorization: "Bearer " + compruebaToken.replace(/\"/g, "")
			}
		})
		.then(res => {
      localStorage.setItem("clientes", JSON.stringify(res.data));
      props.dispatch({ type: GET_ALL_CLIENTS, payload: res.data});
		}).catch((err) => {
			console.log(err)
		});
	}, [])

    /*  const validator = JSON.parse(localStorage.getItem('user'));
     //if (!validator) return <Redirect to='/' />
     useEffect(() => {
 
         //console.log(tokenBody.body.token_user)
         axios.get('http://localhost:3004/appointments/getAppointments/'+ validator.token)
         .then( (res) => {
             console.log(res.data.appointment);
             setCitas(res.data.appointment);
 
            // setCitas(localStorage.setItem("Citas", JSON.stringify(res.data)));
         	
         }).catch( (err) => {
             console.log( err );
         });
 
     },[]); */

    /*  const localizaConcretamente = (cita) => {
         //console.log(cita.title);
         let storage = JSON.parse(localStorage.getItem("Citas"));
         console.log(storage);
    }  */

    return (
      <body className="body">
        
        <div className="header">
            <div className="buttons">
                <Link to onClick={salir}>Salir</Link>
            </div>
        </div>

        <div className="containerButtons">
              <div className="buttonsProfile">
                <Link to="/dentist/newAppointment">Nueva cita</Link>
              </div>
              <div className="buttonsProfile">
                <Link to="/client/showAppointments">Mostrar citas</Link>
              </div>
        </div>
      </body>
    )
}

const mapStateToProps = state => {
  return { clients: state.clients }
}


export default connect(mapStateToProps)(Profile);