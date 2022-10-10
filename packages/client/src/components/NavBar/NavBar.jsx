import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="flex justify-evenly items-center">
      <ul>
        <li>
          <Link to={'/'}>Logo</Link>
        </li>
      </ul>
      <ul className="flex gap-1 justify-center items-center">
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/balance'}>Balance</Link>
        </li>
        <li>
          <Link to={'/category'}>Category</Link>
        </li>
      </ul>
      <ul className="flex justify-center items-center">
        <li className="mr-2">
          <Link to={'/register'}>Register</Link>
        </li>
        <li>
          <Link to={'/login'}>Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
