import * as React from 'react';

import { Navigate, Route } from 'react-router-dom';

function PrivateRoute({ children }: { children: JSX.Element }) {
  const token = localStorage.getItem('token');

  return token ? children : <Navigate to="/" />;
}
export default PrivateRoute;
