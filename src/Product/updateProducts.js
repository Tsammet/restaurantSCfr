import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom"

function UpdateProducts(){

    const [productId, setProductId] = useState();
    const [productName, setProductName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [productImage, setProductImage] = useState(null)
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleSubmit = (event) =>{
        event.preventDefault();

        const formData = new FormData();
        formData.append("id", productId);
        formData.append("productName", productName);
        formData.append("description", description);
        formData.append("price", price);
        if (productImage) formData.append("image", productImage);

        fetch("http://127.0.0.1:8000/products/updateProduct",{
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
            alert('Product was updated successfully!')
            navigate("/UpdateProducts")
        })
        .catch(error =>{
            setError(error.message)
        })
    }

    return (
        <div>

            <h2>Update Products</h2>
            <form id="updateProduct" onSubmit={handleSubmit}>

                <label htmlFor="productId">Product Id: </label>
                <input type="number"
                id="productId"
                name="productId"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                required
                />

                <label id="productName">ProductName: </label>
                <input type="text"
                id="productName"
                name="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                required
                />

                <label id="description">Description: </label>
                <input type="text"
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                />

                <label id="price">Price: </label>
                <input type="text"
                id="price"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                />

                <label id = "productImage">Product Image : </label>
                <input type="file"
                id="productImage"
                name="productImage"
                onChange={(e) => setProductImage(e.target.files[0])}
                required
                />

                <button type="submit">Update Product</button>

            </form>
        </div>
    )
}

export default UpdateProducts;