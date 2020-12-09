import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './ProfileClient.scss';
import { LOGOUT } from '../../../redux/types';
import { connect } from 'react-redux';


const Profile = (props) => {
  //const userLogin = JSON.parse(localStorage.getItem('user'));
  //const [datosCitas, setCitas] = useState([]);
  //const compruebaToken = localStorage.getItem('token');


  const history = useHistory();


  const salir = async () => {
    localStorage.clear();
    history.push('/');
    await props.dispatch({ type: LOGOUT, payload: {} });
  }



/*   useEffect(() => {
    axios.get('http://localhost:8000/api/clientes/', {
      headers: {
        Authorization: "Bearer " + compruebaToken.replace(/\"/g, "")
      }
    })
      .then(res => {
        localStorage.setItem("clientes", JSON.stringify(res.data));
      }).catch((err) => {
        console.log(err)
      });
  }, []) */

  return (
    <body className="body">

      <div className="header">
        <div className="tittleHome2">
          DENTAL CLINIC ALWAYS SMILE - Client Area
        </div>
        <div className="button-quit">
          <Link to onClick={salir}></Link>
        </div>
      </div>

      <div className="containerButtons">
        {/*  <div className="buttonsProfile">
                <Link to="/dentist/newAppointment">Nueva cita</Link>
              </div> */}
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