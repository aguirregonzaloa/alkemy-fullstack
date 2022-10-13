import * as React from 'react';

import './App.css';
import NavBar from './components/NavBar/';
import Footer from './components/Footer/';
import { Outlet } from 'react-router-dom';
import { userContext } from './shared/context/userContext';

import { getUserData } from './shared/api/auth';

function App() {
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

  return (
    <div className="App w-screen h-[100vh]">
      <NavBar />
      <div className="h-[90%] h-min-[320px] bg-slate-200">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
