import React from 'react';
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <div>
      <h1>Bienvenido a la Tienda</h1>
      <p>
        Para ver las categorías de productos, haz click{' '}
        <Link to="/allCategories">aquí</Link>
      </p>
    </div>
  );
}

export default Inicio;
