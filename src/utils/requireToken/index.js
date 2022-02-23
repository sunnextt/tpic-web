import React from 'react';
import useQuery from '../useQuery/index';
const { useLocation, Navigate } = require('react-router-dom');

function RequireToken({ children }) {
  let query = useQuery();

  let location = useLocation();
  const token = query.get('token');

  console.log(token);

  if (!token) {

    return <Navigate to="/reset-password" state={{ from: location }} replace />;
  }
  return children;
}

export default RequireToken;
