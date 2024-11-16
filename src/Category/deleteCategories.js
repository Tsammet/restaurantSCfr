import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";

function DeleteCategories(){

    const [categoryId, setCategoryId] = useState();
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://127.0.0.1:8000/products/deleteCategory",{
            method: 'DELETE',
            headers : {
                'Content-Type' : 'application/json',
                'Authorization' : `Token ${token}`,
                    
            },
            body: JSON.stringify({id: categoryId})
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
            alert('Category was deleted successfully!')
            navigate("/DeleteCategories")
        })
        .catch(error => {
            setError(error.message)
        });
    };

    return(
        <div>
            {error && <p>Error: {error}</p>}


            <h2>Delete a Category</h2>
            <form id="deleteCategory" onSubmit={handleSubmit}>
                <label htmlFor="categoryId">Category Id: </label>
                <input type="number"
                id="categoryId"
                name="categoryId"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                required
                />
                <button type="submit">Delete Category</button>
            </form>
        </div>
    );
};

export default DeleteCategories;
