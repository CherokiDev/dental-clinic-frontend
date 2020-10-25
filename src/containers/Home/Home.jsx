import React from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';


const Home = () => {
  return (
    <body className="body">

      <div className="header">
        <div className="buttons">
          <Link to="/login">Login</Link>
        </div>
        <div className="buttons">
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

