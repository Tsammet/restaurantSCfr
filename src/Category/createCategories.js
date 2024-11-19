import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateCategories(){

    const [categoryName, setCategoryName] = useState("");
    const [categoryImage, setCategoryImage] = useState(null)
    const [error, setError] = useState(null); 
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleSubmit = (event) =>{   //handleSubmit se usa generalmente para envios de formulario
        event.preventDefault();

        const formData = new FormData(); // FormData es un objeto que te permite crear un conjuto de pares clave-valor lo cual es util para imagenes o texto
        formData.append("categoryName", categoryName); //Añadir el nombre de la categoría
        if (categoryImage) formData.append("image", categoryImage) //SI HAY IMAGEN LA AÑADIMOS

        fetch("http://127.0.0.1:8000/products/createCategory",{
        method: 'POST',
        body: formData, //Usamos formData en lugar de Json para poder manejar archivos File
        headers:{
            'Authorization' : `Token ${token}`,
          }  
    })
    
    .then(response => {
        if(!response.ok){
            if(response.status ===403){

                alert('No tienes permisos para estar aquí')
                navigate("/Inicio")
            }
            throw new Error("Error to get the response")
        }
        return response.json();
        
    })
    .then(data => {
        alert('Category created successfully!')
        navigate("/createCategories")
    })
    .catch(error => {
        setError(error.message)
    });
};

return (
    <div>
        {error && <p>Error: {error}</p>}
        {/* <Link to="/Inicio">Inicio</Link>
        <Link to="/ShowCategories">Show Categories</Link>
        <Link to="/UpdateCategories">Update Categories</Link>
        <Link to="/DeleteCategories">Delete Categories</Link>
        <Link to="/CreateProducts">Create Products</Link>
        <Link to="/showProducts">Show Products</Link>
        <Link to="/UpdateProducts">Update Products</Link>
        <Link to="/DeleteProducts">Delete Products</Link> */}
        <h2>Create a new Category</h2>
        <form id="createCategory" onSubmit={handleSubmit}>
        
            <label htmlFor="categoryName">Category Name: </label>
            <input type="text"
                id="categoryName" 
                name="categoryName" 
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                required
            />

            <label htmlFor="categoryImage">Category Image: </label>
            <input
                type="file"
                id="categoryImage"
                name="categoryImage"
                onChange={(e) => setCategoryImage(e.target.files[0])}
            />

            <button type="submit">Create Category</button>

        </form>
    </div>
);
}

export default CreateCategories;
