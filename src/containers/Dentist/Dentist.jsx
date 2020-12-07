import React from 'react';
import { Link } from 'react-router-dom';


const Client = () => {
    return (
      <body className="body">
  
        <div className="header">
          <div className="buttons">
            <Link to="/dentist/login">Login</Link>
          </div>
          <div className="buttons">
            <Link to="/dentist/signup">Signup</Link>
          </div>
          <div className="buttons">
              <Link to="/">Back</Link>
          </div>
        </div>
  
        <div className="tittleHome">
          DENTAL CLINIC ALWAYS SMILE
        </div>
        
      </body>
    )
  }
  
  
  export default Client;
  