import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route, Link, useHistory } from 'react-router-dom';
import axios from 'axios';


const ShowAppointments = () => {
    const [datosCitas, setCitas] = useState([]);
    const validator = JSON.parse(localStorage.getItem('user'));

    const history = useHistory();


    const salir = () => {
        localStorage.clear();
        history.push('/');
    }

    const estadoCitas = (token) => {
        return axios.get('http://localhost:3004/appointments/getAppointments/'+ token)
        .then((res) => {
            setCitas(res.data.appointment);
            return res;
        }).catch((err) => {
            console.log (err);
        });
    }

    useEffect(async() => {

        /* axios.get('http://localhost:3004/appointments/getAppointments/' + validator.token)
            .then((res) => {
                console.log(res.data.appointment);
                setCitas(res.data.appointment);

                localStorage.setItem("Citas", JSON.stringify(res.data));


            }).catch((err) => {
                console.log(err);
            }); */

        await estadoCitas(validator.token)
            

    }, []);



    const localizaConcretamente = async (cita) => {
        //console.log(cita.title);
        //let storage = JSON.parse(localStorage.getItem("Citas"));

        await axios.delete('http://localhost:3004/appointments/deleteAppointment/'+ cita);
        await estadoCitas(validator.token)

        console.log(cita);

    }

    return (
        <div>
            <header>
                <button onClick={salir}>Salir</button>
            </header>

            <div>
                {/* {datosCitas?.map(cita => <div className="cardCita" key={cita._id} onClick={() => localizaConcretamente(cita)}>{cita.observations}<button>boton</button></div>)} */}
                {datosCitas?.map(cita => <div className="tarjetaCitas" key={cita._id}>{cita.date}  {cita.observations}<button onClick={() => localizaConcretamente(cita._id)}>Borrar</button></div>)}
            </div>

            <Link to="/profile">Volver</Link>
        </div>
    )
}


export default ShowAppointments;