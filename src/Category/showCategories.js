import React, { useEffect, useState } from 'react'; //useEffect permite que un componente recuerde un valor que puede cambiar con el tiempo como un contador
                                                    // useState Se usa para llamados a apis y más cosas
import { Link } from 'react-router-dom';


function ShowCategories() {
  const [categories, setCategories] = useState([]); // se definen dos variables:
                                                                              // categories que es como un contenedor vacío para meter los datos que vienen del backend llegacomo una lista vacía []
                                                                              //setCategories es una función para guardar los datos que vienen del backend a categories, al llamar la api guardara los datos en esa variable

  const [error, setError] = useState(null);  // es semejante a la anterior: 
                                                                          // error guardará mensajes de error
                                                                          //setError nos permitirá cambiar su valor, al comienzo está en null, que significa que no hay errores jsjs



  useEffect(() => { // Se ejecuta una función hook cuando el componente showCategories se carga por primera vez, en este caso será para cargar las categorias del backend
    fetch('http://127.0.0.1:8000/products/showCategories',{// Con el fetch estoy consumiendo una api de mi backend, hago una solicitud http para    obtener los datos de  las categorias
      method : 'GET',
      headers: {
        'Content-Type': 'application/json',
      },}) 
      .then(response => { 
        if (!response.ok) { //Si la respuesta del servidor que recibe no es correcta enviamos un error
          throw new Error('Error to get the Response');
        }else{ //Si la respuesta es correcta convertimos los datos en formato json para enviar los datos
          return response.json(); 
        }
      })
      .then(data => { //Si los datos se obtuvieron correctamente, data contiene las categorías y los guardamos en setCategories que es la función para guardar en categories
        console.log('data', data)
        setCategories(data);
      })
      .catch(error => { //Si ocurre algún error en el proceso lo capturamos y guardamos el error usando setError 
        setError(error.message);
      });
  }, []);

  return (
    <div>
    
      {/* <Link to="/Inicio">Inicio</Link>
      <Link to="/createCategories">Create Categories</Link>
      <Link to="/UpdateCategories">Update Categories</Link>
      <Link to="/deleteCategories">Delete Categories</Link>
      <Link to="/CreateProducts">Create Products</Link>
      <Link to="/showProducts">Show Products</Link>
      <Link to="/UpdateProducts">Update Products</Link>
      <Link to="/DeleteProducts">Delete Products</Link> */}

      <h1>Welcome to the store!</h1>
      {error && <p>Error: {error}</p>}
      <h2>Categories:</h2>
      <ul>
        {categories.length > 0 ? ( // categories.length > 0 verifica si hay alguna categoría si es así ejecuta lo que está dentro del primer parentesis, si no
                                  //ejecutara el segundo parentesis
            categories.map(category => (
              
              //KEY = {CATEGORY.ID} es para  asegurarse de que hay una clave única y así hacer un seguimiento eficiente 
                <li key={category.id}> 
                  Id:{category.id} - Name: {category.name}
                  {category.image && (
                        <div>
                          <img
                            src={`http://127.0.0.1:8000/media/${category.image}`}
                            alt={category.name}
                            style={{ width: '100px', height: '100px'}}
                            />
                            {console.log(category.image)}

                        </div>
                      )}

                </li>
            
            
            ))
        ) : (
            <p>No hay categorías disponibles.</p>
        )}
      </ul>
    </div>
  );
}

export default ShowCategories;
