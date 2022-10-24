import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { userContext } from '../../shared/context/userContext';

const NavBar = () => {
  const { user, setUser } = React.useContext(userContext);

  const Logout = (e) => {
    e.preventDefault();
    // remove
    localStorage.removeItem('Token');
    setUser({ ...user, email: null });
  };

  const linkActived = ({ isActive }) => {
    return isActive
      ? 'font-bold border-b-2 border-black'
      : 'text-black hover:font-bold hover:border-b-2 hover:border-black';
  };

  return (
    <div className="flex justify-evenly items-center">
      <ul>
        <li>
          <NavLink end className={(state) => linkActived(state)} to={`/`}>
            Logo
          </NavLink>
        </li>
      </ul>
      <ul className="flex gap-1 justify-center items-center">
        <li>
          <NavLink end className={(state) => linkActived(state)} to={`/`}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={(state) => linkActived(state)} to={`balance`}>
            Balance
          </NavLink>
        </li>
        <li>
          <NavLink className={(state) => linkActived(state)} to={`category`}>
            Category
          </NavLink>
        </li>
      </ul>
      <ul className="flex justify-center items-center">
        {user.email ? (
          <li className="mr-2">{user.email}</li>
        ) : (
          <li className="mr-2">
            <NavLink to={`register`}>Register</NavLink>
          </li>
        )}
        {user.email ? (
          <li className="mr-2 cursor-pointer" onClick={Logout}>
            Logout
          </li>
        ) : (
          <li className="mr-2">
            <NavLink to={`login`}>Login</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
