import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';


function ShowProducts() {
  const [products, setProducts] = useState([]); 
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/products/showProducts',{
    
      method : 'GET',
 }) 
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

  const addToCart = productId => {
    fetch('http://127.0.0.1:8000/cart/addCart',{
      method : 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Token ${token}`,
      },
      body: JSON.stringify({product_id: productId, quantity:1}),
    })
    .then(response => {
      if (!response.ok){
        throw new Error('error adding the product')
      }else{
        return response.json();
      }
    })
    .then(data => {
      alert(data.message);
    })
    .catch(error => {
      setError(error.message)
    })
  }

  return (
    <div>

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
                  <button onClick={() => addToCart(product.id)}>Add to Cart</button>

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
