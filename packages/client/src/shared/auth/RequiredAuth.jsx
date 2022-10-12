import * as React from 'react';
import { userContext } from '../context/userContext';
import { Navigate, useLocation } from 'react-router-dom';

export default function RequireAuth({ children }) {
  const { user } = React.useContext(userContext);
  let location = useLocation();

  if (!user.email) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
