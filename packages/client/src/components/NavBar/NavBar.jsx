import React from 'react';

const NavBar = () => {
  return (
    <div className="flex justify-evenly items-center">
      <ul>
        <li>Logo</li>
      </ul>
      <ul className="flex justify-center items-center">
        <li className="mr-2">Home</li>
        <li>Category</li>
      </ul>
      <ul className="flex justify-center items-center">
        <li className="mr-2">Register</li>
        <li>Login</li>
      </ul>
    </div>
  );
};

export default NavBar;
