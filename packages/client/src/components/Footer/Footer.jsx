import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="flex flex-col sm:flex-row justify-evenly">
      <div>
        <p>
          copyright 2020
          <a href="http://www.aguirregonzaloa.com.ar" target="_blank">
            - Aguirre Gonzalo Ariel
          </a>
        </p>
      </div>
      <div className="flex gap-1">
        <Link to={'/'}>Home</Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/register'}>Register</Link>
      </div>
    </div>
  );
}

export default Footer;
