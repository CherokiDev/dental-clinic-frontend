import React, { useEffect, useState } from 'react';
import { BrowserRouter, useHistory } from 'react-router-dom';
import axios from 'axios';


const ShowAppointments = () => {
    const [datosCitas, setCitas] = useState([]);
    const validator = JSON.parse(localStorage.getItem('user'));

    const history = useHistory();

    
    const salir = () => {
        localStorage.clear();
        history.push('/');
    }

    useEffect(() => {

        axios.get('http://localhost:3004/appointments/getAppointments/'+ validator.token)
        .then( (res) => {
            console.log(res.data.appointment);
            setCitas(res.data.appointment);

			
		}).catch( (err) => {
			console.log( err );
        });

    },[]);

    return (
        <BrowserRouter>
            <header>
                <button onClick={salir}>Salir</button>
            </header>
            
           <div>
                {datosCitas?.map(cita => <div className="cardCita" key={cita._id}>{cita.observations}</div>)}
            </div>
            
        </BrowserRouter>
    )
}


export default ShowAppointments;