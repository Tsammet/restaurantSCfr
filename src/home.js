import React, { useEffect, useState } from 'react'; 
import { Link } from 'react-router-dom';


function Inicio() {

  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/home/home',{
    
      method : 'GET',
      headers:{
        'Authorization' : `Token ${token}`,
      }  

    }) 
      .then(response => { 
        if (!response.ok) {
          throw new Error('Error to get the Response');
        }else{ 
          return response.json(); 
        }
      })
      .then(data => {
        setMessage(data.message)
      })
      .catch(error => {
        setError(error.message);
      });
  }, [token]);

  return (
    <div>
      <h1>Welcome to the store!</h1>
      {error && <p>Error: {error}</p>}
      <p>{message}</p> {/* Mostrar el mensaje recibido del backend */}
    </div>
  );
}

export default Inicio;
