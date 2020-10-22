import React from 'react';
import { Link, Redirect } from 'react-router-dom';


const Profile = () => {
    const validator = localStorage.getItem('token');
    if (!validator) return <Redirect to='/' />
    return (
        <div>
            <Link to="/">citas</Link>
            <Link to="/signup">Signup</Link>
        </div>
    )
}


export default Profile;