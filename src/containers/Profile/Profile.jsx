import React, { useEffect, useState } from 'react';
import { Link, BrowserRouter, useHistory } from 'react-router-dom';
import axios from 'axios';


const Profile = () => {
    const userLogin = JSON.parse(localStorage.getItem('user'));
    //const [datosCitas, setCitas] = useState([]);

    const history = useHistory();


    const salir = () => {
        localStorage.clear();
        //localStorage.removeItem('token');
        history.push('/');
    }

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
        <body>
            <header>
                <button onClick={salir}>Salir</button>
            </header>
            <div>
                <Link to="/profile/newAppointment">Nueva cita</Link>
                <Link to="/profile/showAppointments">Mostrar cita</Link>
                <Link to="/profile/deleteAppointment">Eliminar cita</Link>
            </div>
        </body>

    )
}


export default Profile;