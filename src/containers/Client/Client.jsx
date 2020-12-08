import React from 'react';
import { Link } from 'react-router-dom';
import './Client.scss'


const Client = () => {
    return (
        <body className="body">

            <div className="header">
                <div className="container-buttons">
                    <div className="buttons">
                        <Link to="/client/login">Login</Link>
                    </div>
                    <div className="buttons">
                        <Link to="/client/signup">Register</Link>
                    </div>
                </div>
                <div className="button-back">
                    <Link to="/"></Link>
                </div>
            </div>

            <div className="tittleHome">
                DENTAL CLINIC ALWAYS SMILE
            </div>

        </body>
    )
}


export default Client;
