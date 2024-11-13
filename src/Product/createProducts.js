import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateProducts(){

    const [productName, setProductName] = useState("");
    const [productImage, setProductImage] = useState(null)
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [error, setError] = useState(null); 
    const navigate = useNavigate();

    const handleSubmit = (event) =>{   //handleSubmit se usa generalmente para envios de formulario
        event.preventDefault();

        const formData = new FormData(); // FormData es un objeto que te permite crear un conjuto de pares clave-valor lo cual es util para imagenes o texto
        formData.append("productName", productName); //Añadir el nombre de la categoría
        formData.append("description", description);
        formData.append("price", price);
        formData.append("category", category);
        if (productImage) formData.append("image", productImage) //SI HAY IMAGEN LA AÑADIMOS

        fetch("http://127.0.0.1:8000/products/createProduct",{
        method: 'POST',
        body: formData //Usamos formData en lugar de Json para poder manejar archivos File
    })
    
    .then(response => {
        if(!response.ok){
            throw new Error("Error to get the response")
        }
        return response.json();
        
    })
    .then(data => {
        alert('Product created successfully!')
        navigate("/createProducts")
    })
    .catch(error => {
        setError(error.message)
    });
};

return (
    <div>
        {error && <p>Error: {error}</p>}
        <Link to="/Inicio">Inicio</Link>
        <Link to="/CreateCategories">Create Categories</Link>
        <Link to="/ShowCategories">Show Categories</Link>
        <Link to="/UpdateCategories">Update Categories</Link>
        <Link to="/DeleteCategories">Delete Categories</Link>
        <Link to="/showProducts">Show Products</Link>
        <Link to="/UpdateProducts">Update Products</Link>
        <Link to="/DeleteProducts">Delete Products</Link>


        <h2>Create a new Product</h2>
        <form id="createProduct" onSubmit={handleSubmit}>
        
            <label htmlFor="productName">Product Name: </label>
            <input type="text"
            id="productName" 
            name="productName" 
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
            />

            <label htmlFor="description">Description: </label>
            <input type="text"
            id="description" 
            name="description" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            />

            <label htmlFor="price">Price: </label>
            <input type="number"
            id="price" 
            name="price" 
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
            />

            <label htmlFor="category">Category: </label>
            <input type="number"
            id="category" 
            name="category" 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            />

            <label htmlFor="productImage">Product Image: </label>
            <input
            type="file"
            id="productImage"
            name="productImage"
            onChange={(e) => setProductImage(e.target.files[0])}
            />



            <button type="submit">Create Product</button>

        </form>
    </div>
);
}

export default CreateProducts;
