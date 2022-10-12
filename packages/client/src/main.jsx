import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Home from './pages/Home';
import Category from './pages/Category';
import Balance from './pages/Balance';
import RequireAuth from './shared/auth/RequiredAuth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <Home /> },
      {
        path: '/category',
        element: (
          <RequireAuth>
            <Category />
          </RequireAuth>
        ),
      },
      { path: '/balance', element: <Balance /> },
      { path: '/register', element: <Register /> },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
