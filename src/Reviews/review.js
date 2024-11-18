import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

function Reviews(){

    const [titleReview, setTitleReview] = useState("");
    const [review, setReview] = useState("");
    const [error, setError] = useState(null); 
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleSubmit = (event) =>{   
        event.preventDefault();

        const formData = new FormData(); 
        formData.append("title", titleReview); 
        formData.append("review", review)
    

        fetch("http://127.0.0.1:8000/reviews/review",{
        method: 'POST',
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
        alert('Review created successfully!')
        navigate("/Review")
    })
    .catch(error => {
        setError(error.message)
    });
};

return (
    <div>
        {error && <p>Error: {error}</p>}


        <h2>Create a new Review</h2>
        <form id="createReview" onSubmit={handleSubmit}>
        
            <label htmlFor="title">Title: </label>
            <input type="text"
            id="title" 
            name="title" 
            value={titleReview}
            onChange={(e) => setTitleReview(e.target.value)}
            required
            />

            <label htmlFor="review">Review: </label>
            <input type="text"
            id="review" 
            name="review" 
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
            />

            <button type="submit">Create Review</button>

        </form>
    </div>
);
}

export default Reviews;
