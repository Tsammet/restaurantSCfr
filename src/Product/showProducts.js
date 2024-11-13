import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';


function ShowProducts() {
  const [products, setProducts] = useState([]); 

  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/products/showProducts',{
    
      method : 'GET'}) 
      .then(response => { 
        if (!response.ok) {
          throw new Error('Error to get the Response');
        }else{ 
          return response.json(); 
        }
      })
      .then(data => {
        console.log('data', data)
        setProducts(data);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
    
      <Link to="/Inicio">Inicio</Link>
      <Link to="/createCategories">Create Categories</Link>
      <Link to="/showCategories">Show Categories</Link>
      <Link to="/UpdateCategories">Update Categories</Link>
      <Link to="/deleteCategories">Delete Categories</Link>
      <Link to="/CreateProducts">Create Products</Link>
      <Link to="/UpdateProducts">Update Products</Link>
      <Link to="/DeleteProducts">Delete Products</Link>

      <h1>Welcome to the store!</h1>
      {error && <p>Error: {error}</p>}
      <h2>Products:</h2>
      <ul>
        {products.length > 0 ? (
            products.map(product => (
              
                <li key={product.id}> 
                  Id:{product.id} - Name: {product.name} - Description: {product.description} - Price: {product.price}
                  {product.image && (
                        <div>
                          <img
                            src={`http://127.0.0.1:8000/media/${product.image}`}
                            alt={product.name}
                            style={{ width: '100px', height: '100px'}}
                            />
                            {console.log(product.image)}

                        </div>
                      )}

                </li>
            
            
            ))
        ) : (
            <p>No hay Productos disponibles.</p>
        )}
      </ul>
    </div>
  );
}

export default ShowProducts;
