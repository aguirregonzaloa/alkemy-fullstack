import * as React from 'react';

import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>HomePage</h1>
      {/* <Home /> */}
      <Outlet />
    </div>
  );
}

export default App;
