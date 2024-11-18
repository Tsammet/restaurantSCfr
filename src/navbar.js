import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const user = localStorage.getItem('username');
  const role = localStorage.getItem('role');

  return (
    <div>
      <h1>Bienvenido a la Tienda: {user} {role}</h1>
      <p>
        {/* Rutas comunes para todos los usuarios */}
        <Link to="/ShowCategories">Show Categories</Link>
        <Link to="/ShowProducts">Show Products</Link>
        <Link to="/Review">Reviews</Link>

        {/* Rutas solo para admin */}
        {role === 'admin' && (
          <>
            <Link to="/CreateCategories">Create Categories</Link>
            <Link to="/UpdateCategories">Update Categories</Link>
            <Link to="/DeleteCategories">Delete Categories</Link>
            <Link to="/CreateProducts">Create Products</Link>
            <Link to="/UpdateProducts">Update Products</Link>
            <Link to="/DeleteProducts">Delete Products</Link>
          </>
        )}
      </p>
    </div>
  );
}

export default Navbar;
