import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function App() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/products/showCategories')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener las categorías');
        }
        return response.json();
      })
      .then(data => {
        setCategories(data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
   
    <Link to="/">Inicio</Link>
    <h1>¡Bienvenido a la Tienda!</h1>
    {error && <p>Error: {error}</p>} {}
    <h2>Categorías:</h2>
    <ul>
    {categories.length > 0 ? (
        categories.map(category => (
        <li key={category.id}>{category.name}</li>
        ))
    ) : (
        <p>No hay categorías disponibles.</p>
    )}
    </ul>
    </div>
  );
}

export default App;
