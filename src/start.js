import React from 'react';
import { Link } from 'react-router-dom'; // Link permite la navegación entre las páginas de tu aplicación de React sin refrescarla completamente, lo que hace que la aplicación sea más rápida.

function Inicio() {
  return (
    <div>
      <h1>Bienvenido a la Tienda</h1>
      <p>
        Para ver las categorías de productos, haz click{' '} {/* el {' '} lo uso para insertar un espacio en blanco ya que de lo contrario se vería haz CLICKAQUI todo pegado */}
        <Link to="/allCategories">aquí</Link>
      </p>
    </div>
  );
}



export default Inicio;
