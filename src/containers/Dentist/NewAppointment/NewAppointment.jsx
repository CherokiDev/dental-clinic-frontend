import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import './NewAppointment.scss';
import { connect } from 'react-redux';
import { LOGOUT } from '../../../redux/types';

const NewAppointment = (props) => {
    const validator = JSON.parse(localStorage.getItem('user'));

    const [search, setSearch] = useState("");
    const [selectedClient, setSelectedClient] = useState({});

    const searchClients = event => {
        setSearch(event.target.value)
    }

    const searchEngine = (props) => {
        const result = props.clients?.filter(client => {
            return client.nombre.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })
        if (search)
            return result.map(client => <div onClick={() => setSelectedClient(client)}>{client.nombre}</div>)
    }


    const compruebaDentista = JSON.parse(localStorage.getItem('Dentista'))

    const handleSubmit = event => {
        event.preventDefault();
        const appointment = {
            tipo: event.target.tipo.value,
            descripcion: event.target.descripcion.value,
            precio: event.target.precio.value,
            cliente_id: event.target.cliente_id.value,
            dentista_id: compruebaDentista.id
        };
        axios.post('http://localhost:8000/api/citas/store', appointment)
            .then(res => {
                setTimeout(() => {
                    history.push('/dentist/profile')
                  }, 1500);
            })
            .catch(error => console.log(error.response))
    }

    const history = useHistory();


    const salir = async () => {
        localStorage.clear();
        //await axios.put('https://appappointments.herokuapp.com/users/logout/'+ validator.email)
        history.push('/');
        await props.dispatch({ type: LOGOUT, payload: {} });

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

            <div className="containerFormNew">
                <form className="loginFormNew" onSubmit={handleSubmit}>
                    <div className="textFormNew">Tipo:</div>
                    <select name="tipo" id="" className="loginFormSelect">
                        <option value="">Elige una opción</option>
                        <option value="Ortodoncia">Ortodoncia</option>
                        <option value="Empaste">Empaste</option>
                    </select>
                    <div className="textFormNew">Descripción:</div>
                    <input type="text" name="descripcion" required placeholder="Introduce una descripcion" />
                    <div className="textFormNew">Precio:</div>
                    <input type="text" name="precio" required placeholder="Introduce un precio" />
                    <div className="textFormNew">Cliente:</div>
                    <input name="cliente_id" value={selectedClient.id} hidden />
                    <input type="text" value={selectedClient.nombre} placeholder="Buscar cliente" onKeyUp={searchClients}></input>
                    <div className="listaClientes">
                        {searchEngine(props)}
                    </div>
                    <button type="submit">Crear cita</button>
                </form>
            </div>

        </body>
    )
}

const mapStateToProps = state => {
    return { clients: state.clients }
}

export default connect(mapStateToProps)(NewAppointment);