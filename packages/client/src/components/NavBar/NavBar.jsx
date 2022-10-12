import * as React from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../shared/context/userContext';

import { getUserData } from '../../shared/api/auth';

const NavBar = () => {
  const { user, setUser } = React.useContext(userContext);

  React.useEffect(() => {
    // getter
    const token = localStorage.getItem('Token');

    if (token) {
      async function loginUser() {
        const { email } = await getUserData(token);
        setUser({ ...user, email });
      }
      loginUser();
    }
  }, []);

  const Logout = (e) => {
    e.preventDefault();
    // remove
    localStorage.removeItem('Token');
    setUser({ ...user, email: null });
  };

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
        {user.email ? (
          <li className="mr-2">{user.email}</li>
        ) : (
          <li className="mr-2">
            <Link to={'/register'}>Register</Link>
          </li>
        )}
        {user.email ? (
          <li className="mr-2 cursor-pointer" onClick={Logout}>
            Logout
          </li>
        ) : (
          <li className="mr-2">
            <Link to={'/login'}>Login</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
