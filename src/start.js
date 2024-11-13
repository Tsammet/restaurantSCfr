import React from 'react';
import { Link } from 'react-router-dom'; // Link permite la navegación entre las páginas de tu aplicación de React sin refrescarla completamente, lo que hace que la aplicación sea más rápida.

function Inicio() {
  return (
    <div>
      <h1>Bienvenido a la Tienda</h1>
      <p>
        <Link to="/ShowCategories">Show Categories</Link>
        <Link to="/CreateCategories">create Categories</Link>
        <Link to="/UpdateCategories">Update Categories</Link>
        <Link to="/DeleteCategories">Delete Categories</Link>
        <Link to="/CreateProducts">Create Products</Link>
        <Link to="/showProducts">Show Products</Link>
        <Link to="/UpdateProducts">Update Products</Link>
        <Link to="/DeleteProducts">Delete Products</Link>

      </p>
    </div>
  );
}



export default Inicio;
