import React, {useState} from "react";
import { Form, Link, useNavigate } from "react-router-dom";

function Login(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, useError] = useState(null);
    const navigate = useNavigate();

    
    const handleSubmit = (event) => {
        event.preventDefault();

        fetch("http://127.0.0.1:8000/user/login",{
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify({username, password})
        })
        .then(response => {
            if(!response.ok){
                throw new Error("Error to get the response")
            }
            return response.json();
        })
        .then(data =>{
            console.log("Datos recibidos de la API:", data);  // Muestra toda la respuesta

            if(data.token){
                localStorage.setItem('token', data.token)
                localStorage.setItem('username', data.username)
                localStorage.setItem('role', data.role)

                console.log('ROL ALMACENADO: ' , data.role)

                navigate('/Inicio')
            }else{
                alert("Login failed: " + JSON.stringify(data))
            }
        }).catch((error) => {
            console.error('Error during login:', error);
            alert("An error occurred during login. Please try again.");
        });

    }

    return (
        <div>

            {error && <p>Error: {error}</p>}    
            <Link to="/Register">Register</Link>

            <h2>Login</h2>


            <form id="login" onSubmit={handleSubmit}>

                <label htmlFor="username">Username: </label>
                <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                <label htmlFor="password">Password: </label>
                <input 
                    type="password"
                    id="password"
                    placeholder="password"
                    value = {password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                <button type="submit">Login</button>

            </form>
        
        </div>
    )

}

export default Login;