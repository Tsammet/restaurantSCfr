import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

function DeleteProducts(){

    const [productId, setProductId] = useState();
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://127.0.0.1:8000/products/deleteProduct",{
            method: 'DELETE',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Token ${token}`,
                  
            },
            body: JSON.stringify({id: productId})
        })
        .then(response => {
            if(!response.ok){
                throw new Error("Error to get the response")
            }
            else{
                return response.text().then(text => text ? JSON.parse(text) : null); //Se transforma la respuesta a texto, si hay respuesta 
            }
        })
        .then(data => {
            alert('Product was deleted successfully!')
            navigate("/DeleteProducts")
        })
        .catch(error => {
            setError(error.message)
        });
    };

    return(
        <div>
            {error && <p>Error: {error}</p>}
            {/* <Link to="/Inicio">Inicio</Link>
            <Link to="/ShowCategories">Show Categories</Link>
            <Link to="/UpdateCategories">Update Categories</Link>
            <Link to="/DeleteCategories">Delete Categories</Link>
            <Link to="/CreateCategories">Create Categories</Link>
            <Link to="/CreateProducts">Create Products</Link>
            <Link to="/showProducts">Show Products</Link>
            <Link to="/UpdateProducts">Update Products</Link> */}


            <h2>Delete a Product</h2>
            <form id="deleteProduct" onSubmit={handleSubmit}>
                <label htmlFor="productId">Product Id: </label>
                <input type="number"
                id="productId"
                name="productId"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                required
                />
                <button type="submit">Delete Product</button>
            </form>
        </div>
    );
};

export default DeleteProducts;
