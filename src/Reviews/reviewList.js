import React, { useState, useEffect } from "react";

function ReviewList() {
    const [reviews, setReviews] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token'); 

        if (!token) {
            setError('No token found');
            return;
        }

        fetch('http://127.0.0.1:8000/reviews/review', {
            method: 'GET',
            headers: {
                'Authorization': `Token ${token}`,
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error fetching reviews");
            }
            return response.json();
        })
        .then(data => {
            console.log(data)
            setReviews(data);
        })
        .catch(error => {
            setError(error.message);
        });
    }, []);

    return(
        <div>   
            {error && <p>Error: {error}</p>}
            <h2>All Reviews</h2>
            <ul>
                {reviews.length > 0 ?(
                    reviews.map(review => (
                        <li key = {review.id}>
                            Id:{review.id} - Usuario:{review.user} - Title : {review.title} - Review : {review.review}
                        </li>
                    ))
                ) : (
                    <p>No hay Reviews disponibles.</p>
                )}
            </ul>
        </div>
    );

}

export default ReviewList;
