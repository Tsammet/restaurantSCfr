import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom"

function UpdateCategories(){

    const [categoryId, setCategoryId] = useState();
    const [categoryName, setCategoryName] = useState("");
    const [categoryImage, setCategoryImage] = useState(null)
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleSubmit = (event) =>{
        event.preventDefault();

        const formData = new FormData();
        formData.append("id", categoryId);
        formData.append("categoryName", categoryName);
        if (categoryImage) formData.append("image", categoryImage);

        fetch("http://127.0.0.1:8000/products/updateCategory",{
            method: 'PUT',
            body: formData,
            headers:{
                'Authorization' : `Token ${token}`,
              }  
        })

        .then(response => {
            if(!response.ok){
                throw new Error("Error to get the response")
            }
            return response.json();
        })
        .then(data => {
            alert('Category was updated successfully!')
            navigate("/UpdateCategories")
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    return (
        <div>
             {/* <Link to="/Inicio">Inicio</Link>
            <Link to="/ShowCategories">Show Categories</Link>
            <Link to="/CreateCategories">Create Categories</Link>
            <Link to="/DeleteCategories">Delete Categories</Link>
            <Link to="/CreateProducts">Create Products</Link>
            <Link to="/showProducts">Show Products</Link>
            <Link to="/UpdateProducts">Update Products</Link>
            <Link to="/DeleteProducts">Delete Products</Link> */}


            <h2>Update Categories</h2>
            <form id="updateCategory" onSubmit={handleSubmit}>

                <label htmlFor="categoryId">Category Id: </label>
                <input type="number"
                id="categoryId"
                name="categoryId"
                value={categoryId}
                onChange={(e) => setCategoryId(e.target.value)}
                required
                />

                <label id="categoryName">Category Name: </label>
                <input type="text"
                id="categoryName"
                name="categoryName"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                required
                />

                <label id = "categoryImage">Category Image : </label>
                <input type="file"
                id="categoryImage"
                name="categoryImage"
                onChange={(e) => setCategoryImage(e.target.files[0])}
                required
                />

                <button type="submit">Update Category</button>

            </form>
        </div>
    )
}

export default UpdateCategories;