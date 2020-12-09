import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './ShowAppointments.scss';


const ShowAppointments = () => {
    const [datosCitas, setCitas] = useState([]);
    const compruebaCliente = JSON.parse(localStorage.getItem('Cliente'));

    const history = useHistory();


    const salir = () => {
        localStorage.clear();
        history.push('/');
    }

    const estadoCitas = () => {
        return axios.get('http://localhost:8000/api/cliente/' + compruebaCliente.id + '/citas')
            .then((res) => {
                setCitas(res.data);
                return res;
            }).catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        const getCitas = async () => {
            await estadoCitas(compruebaCliente.token)
        }
        getCitas()
    }, []);



    const localizaConcretamente = async (cita) => {
        //console.log(cita.title);
        //let storage = JSON.parse(localStorage.getItem("Citas"));

        await axios.delete('http://localhost:8000/api/citas/' + cita);
        await estadoCitas(compruebaCliente.token)

        console.log(cita);

    }

    return (
        <body className="body">

            <div className="header">
                <div className="button-back">
                    <Link to='/client/profile'></Link>
                </div>
                <div className="tittleHome2">
                    DENTAL CLINIC ALWAYS SMILE - Client Area
            	</div>
                <div className="button-quit">
                    <Link to onClick={salir}></Link>
                </div>
            </div>

            <div className="tablaCitas">



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
                        <div>FECHA</div>
                        {datosCitas?.map(cita =>
                        <div className="tabla">                            
                            <div>{cita.fecha_cita}</div>                            
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