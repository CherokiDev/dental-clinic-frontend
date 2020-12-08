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
            console.log (err);
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

        await axios.delete('http://localhost:8000/api/citas/'+ cita);
        await estadoCitas(compruebaCliente.token)

        console.log(cita);

    }

    return (
      <body className="body">
          
        <div className="header header1">
          <div className="buttons">
            <Link to="/dentist/profile">Back</Link>
          </div>
          <div className="buttons">
            <Link to onClick={salir}>Logout</Link>
          </div>      
        </div>

        <div className="containerCitas">
                {/* {datosCitas?.map(cita => <div className="cardCita" key={cita._id} onClick={() => localizaConcretamente(cita)}>{cita.observations}<button>boton</button></div>)} */}
          {datosCitas?.map(cita => <div className="citas" key={cita._id}>{cita.tipo}  {cita.descripcion} {cita.precio}<button className="botonCitas" onClick={() => localizaConcretamente(cita.id)}>Borrar</button></div>)}
        </div>
        
      </body>
    )
}


export default ShowAppointments;