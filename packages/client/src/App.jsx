import * as React from 'react';

import './App.css';
import NavBar from './components/NavBar/';
import Footer from './components/Footer/';
import { Outlet } from 'react-router-dom';
import { UserProvider } from './shared/context/userContext';

function App() {
  return (
    <div className="App w-screen h-[100vh]">
      <UserProvider>
        <NavBar />
        <div className="h-[90%] h-min-[320px] bg-slate-200">
          <Outlet />
        </div>
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
