import React from 'react';
import { Link } from 'react-router-dom'; // Link permite la navegación entre las páginas de tu aplicación de React sin refrescarla completamente, lo que hace que la aplicación sea más rápida.

function Inicio() {
  return (
    <div>
      <h1>Bienvenido a la Tienda</h1>
      <p>
        <Link to="/ShowCategories">Show Categories</Link>
        <Link to="/CreateCategories">create Categories</Link>
        <Link to="/UpdateCategories">Update Categoriers</Link>
        <Link to="/DeleteCategories">Delete Categoriers</Link>
      </p>
    </div>
  );
}



export default Inicio;
