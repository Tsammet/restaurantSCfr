import React, {useState, useEffect} from "react";

function ShoppingCart(){

    const [cartItems, setCartItems] = useState([]);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token');

    useEffect(() => {
        fetch('http://127.0.0.1:8000/cart/viewCart', {
            method: 'GET',
            headers: {
                'Authorization' : `Token ${token}`,
            },
        })
        .then(response => {
            if(!response.ok){
                throw new Error('Error fetching the cart');
            }else{
                return response.json();
            }
        })
        .then(data => {
            setCartItems(data.cart_items);
        })
        .catch(error => {
            setError(error.message)
        });
    },[])
    
    const removeFromCart = productId => {

        fetch('http://127.0.0.1:8000/cart/removeCart', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`,
            },
            body: JSON.stringify({ product_id: productId }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error removing the product');
            }
            return response.json();
        })
        .then(data  => {
            setCartItems(data.cart_items || []); 
        })
        .catch(error => {
            setError(error.message);
        });
    };

    return (
        <div>
            <h2>Shopping Cart</h2>
            {error && <p>Error: {error}</p>}
            <ul>
                {cartItems.length > 0 ? (
                    cartItems.map(item => {
                        return (
                            <li key={item.product_id}>
                                {item.product_name} - Quantity: {item.quantity} - Total Price: ${item.total_price.toFixed(2)}
                                <button onClick={() => removeFromCart(item.product_id)}>Remove</button>
                            </li>
                        );
                    })
                ) : (
                    <p>Your Cart is empty.</p>
                )}
            </ul>
        </div>
    );
}

export default ShoppingCart;
