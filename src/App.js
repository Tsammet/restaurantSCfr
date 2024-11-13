import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //BrowserRouter o Router es el componente que nos ayuda a manejar rutas en nuestra app
                                                                           //Route es el camino que el usuario va a utilizar
                                                                           //Routes organiza las rutas dentro de una estructura
import Inicio from './start';
import ShowCategories from './Category/showCategories';
import CreateCategories from './Category/createCategories';
import DeleteCategories from './Category/deleteCategories';
import UpdateCategories from './Category/updateCategories';
import CreateProducts from './Product/createProducts';
import ShowProducts from './Product/showProducts';
import UpdateProducts from './Product/updateProducts';
import DeleteProducts from './Product/deleteProducts';

function App() { //Creamos esta función que es el componente principal de nuestra aplicación, todo el contenido que le mostraremos al usuario está definido aquí
  return (  //Aquí empieza el contenido que vamos a mostrar
    //Router s el contenedor principal que permite el funcionamiento de las rutas
    <Router> 
        <div> 
            <Routes>
                <Route path="/" element={<Inicio />}/> 
                <Route path="/Inicio" element={<Inicio />}/> 
                <Route path="/ShowCategories" element={<ShowCategories />} />
                <Route path="/CreateCategories" element={<CreateCategories />} />
                <Route path="/UpdateCategories" element={<UpdateCategories />} />
                <Route path="/DeleteCategories" element={<DeleteCategories />} />
                <Route path="/CreateProducts" element={<CreateProducts />} />
                <Route path="/ShowProducts" element={<ShowProducts />} />
                <Route path="/UpdateProducts" element={<UpdateProducts />} />
                <Route path="/DeleteProducts" element={<DeleteProducts />} />
                
            </Routes>
        </div>
    </Router>
  );
}

// LA DIFERENCIA ENTRE ROUTE Y LINK Route: Define qué ver en una dirección específica. Link: Es el enlace o botón que lleva a esa dirección sin recargar la página


export default App; //  exportamos el componente App para que pueda ser usado en otros archivos de la aplicación.
