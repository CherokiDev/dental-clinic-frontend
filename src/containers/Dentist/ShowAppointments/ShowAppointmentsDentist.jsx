import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './ShowAppointmentsDentist.scss';


const ShowAppointments = () => {
    const [datosCitas, setCitas] = useState([]);
    const validator = JSON.parse(localStorage.getItem('Dentista'));

    const history = useHistory();


    const salir = () => {
        localStorage.clear();
        history.push('/');
    }

    const estadoCitas = () => {
        return axios.get('http://localhost:8000/api/citas')
            .then((res) => {
                setCitas(res.data);
                return res;
            }).catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        const getCitas = async () => {
            await estadoCitas(validator.token)
        }
        getCitas()
    }, []);



    const localizaConcretamente = async (cita) => {

        await axios.delete('http://localhost:8000/api/citas/' + cita);
        await estadoCitas(validator.token)
    }

    return (
        <body className="body">

            <div className="header">
                <div className="button-back">
                    <Link to='/dentist/profile'></Link>
                </div>
                <div className="tittleHome2">
                    DENTAL CLINIC ALWAYS SMILE - Dentist Area
            	</div>
                <div className="button-quit">
                    <Link to onClick={salir}></Link>
                </div>
            </div>

                <div className="tablaCitas">

                <div className="borde">
                        <div>CLIENTE</div>
                        {datosCitas?.map(cita =>
                        <div className="tabla">                            
                            <div>{cita.cliente_id}</div>                            
                        </div>)}
                    </div>

                    <div className="borde">
                        <div>TIPO</div>
                        {datosCitas?.map(cita =>
                        <div className="tabla">                            
                            <div>{cita.tipo}</div>                            
                        </div>)}
                    </div>

                    <div className="borde">
                        <div>DESCRIPCIÓN</div>
                        {datosCitas?.map(cita =>
                        <div className="tabla">                                               
                            <div>{cita.descripcion}</div>                            
                        </div>)}
                    </div>

                    <div className="borde">
                        <div>PRECIO</div>
                        {datosCitas?.map(cita =>
                        <div className="tabla">                            
                            <div>{cita.precio}</div>                            
                        </div>)}
                    </div>
                    
                    <div className="borde">
                        <div>ACCIÓN</div>
                        {datosCitas?.map(cita => 
                        <div className="tabla">                            
                            <button className="botonBorrar" onClick={() => localizaConcretamente(cita.id)}>Borrar</button>                            
                        </div>)}
                    </div>

                
                </div>

        </body>
    )
}


export default ShowAppointments;