import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';


const Home = () => {
  return (
    <body className="bodyHome">

      <div className="botones">
        <div className="botonLogin">
          <Link to="/login">Login</Link>
        </div>
        <div className="botonSignup">
          <Link to="/signup">Signup</Link>
        </div>
      </div>

      <div className="tittleHome">
        DENTAL CLINIC ALWAYS SMILE
      </div>
    </body>
  )
}


export default Home;

