import React from 'react';
import Navbar from './navbar';
import { Link } from 'react-router-dom'; // Link permite la navegación entre las páginas de tu aplicación de React sin refrescarla completamente, lo que hace que la aplicación sea más rápida.

function Inicio() {

  const user = localStorage.getItem('username')
  const role = localStorage.getItem('role')
  console.log("Rol:", role);  // Verifica si el rol está presente

  
  return (
    <div>
        <h2>INICIO</h2>
    </div>
  );
}



export default Inicio;
