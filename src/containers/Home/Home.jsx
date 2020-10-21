import React from 'react';
import { Link } from 'react-router-dom';


const Home = () =>  {
  return (
    <div>
      <home>
        <Link to="/login">Login</Link>
      </home>
      <register>
        <Link to="/register">Register</Link>
      </register>
    </div>
  )
}


export default Home;

