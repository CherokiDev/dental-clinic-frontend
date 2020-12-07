import React from 'react';
import { Link } from 'react-router-dom';


const Client = () => {
    return (
      <body className="body">
  
        <div className="header">
          <div className="buttons">
            <Link to="/client/login">Login</Link>
          </div>
          <div className="buttons">
            <Link to="/client/signup">Signup</Link>
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
  