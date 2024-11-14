import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom'; //BrowserRouter o Router es el componente que nos ayuda a manejar rutas en nuestra app
                                                                           //Route es el camino que el usuario va a utilizar
                                                                           //Routes organiza las rutas dentro de una estructura
import Inicio from './start';
import Navbar from './navbar';
import ShowCategories from './Category/showCategories';
import CreateCategories from './Category/createCategories';
import DeleteCategories from './Category/deleteCategories';
import UpdateCategories from './Category/updateCategories';
import CreateProducts from './Product/createProducts';
import ShowProducts from './Product/showProducts';
import UpdateProducts from './Product/updateProducts';
import DeleteProducts from './Product/deleteProducts';
import Login from './user/login';
import Register from './user/register';

function App() { //Creamos esta función que es el componente principal de nuestra aplicación, todo el contenido que le mostraremos al usuario está definido aquí
  const role = localStorage.getItem('role')

  const location = useLocation(); // Usamos useLocation para obtener la ruta actual

  const showNavbar = location.pathname !== "/Login" && location.pathname !== "/Register";


  if(!role){
    return <Navigate to ="/login" />
  }

  return (  //Aquí empieza el contenido que vamos a mostrar
    //Router s el contenedor principal que permite el funcionamiento de las rutas

        <div> 
          
            {showNavbar && <Navbar />}    

            <Routes>
                
                  <Route path="/" element={<Navigate to ="/Login" />}/> 
                  <Route path="/Login" element={<Login />}/> 
                  <Route path="/Register" element={<Register />}/> 
                  <Route path="/Inicio" element={<Inicio />}/> 
                  <Route path="/ShowCategories" element={<ShowCategories />} />
                  <Route path="/ShowProducts" element={<ShowProducts />} />   
                  <Route path="/CreateCategories" element={<CreateCategories />} />
                  <Route path="/UpdateCategories" element={<UpdateCategories />} />
                  <Route path="/DeleteCategories" element={<DeleteCategories />} />
                  <Route path="/CreateProducts" element={<CreateProducts />} />
                  <Route path="/UpdateProducts" element={<UpdateProducts />} />
                  <Route path="/DeleteProducts" element={<DeleteProducts />} />

            </Routes>
        </div>
   );
}

// LA DIFERENCIA ENTRE ROUTE Y LINK Route: Define qué ver en una dirección específica. Link: Es el enlace o botón que lleva a esa dirección sin recargar la página


export default App; //  exportamos el componente App para que pueda ser usado en otros archivos de la aplicación.
