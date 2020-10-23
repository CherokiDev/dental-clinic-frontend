import React from 'react';
import { Link, Redirect, BrowserRouter, useHistory } from 'react-router-dom';


const Profile = () => {
    const history = useHistory();

    const validator = localStorage.getItem('token');
    if (!validator) return <Redirect to='/' />

    const salir = () => {
        localStorage.clear();
        //localStorage.removeItem('token');
        history.push('/');
    }

    return (
        <BrowserRouter>
            <header>
                <button onClick={salir}>Salir</button>
            </header>
            <div>
                <Link to="/">citas</Link>
                <Link to="/signup">Signup</Link>
            </div>
        </BrowserRouter>
    )
}


export default Profile;