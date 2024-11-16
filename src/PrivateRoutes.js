import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children, requiredRole }) {
  const role = localStorage.getItem('role');

  if (!role) {
    return <Navigate to="/login" />;
  }

  if (role !== requiredRole) {
    return <Navigate to="/inicio" />;
  }

  return children; 
}

export default PrivateRoute;
