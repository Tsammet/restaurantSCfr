import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

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
        <div className="login-page">
            <nav className="navbar">
                <h1 className="navbar-title">RESTAURANTE SC</h1>
                <Link to="/Register" className="navbar-link">Register</Link>
            </nav>
    
            <div className="login-container">
                {error && <p className="error-message">Error: {error}</p>}
    
                <form id="login" onSubmit={handleSubmit} className="login-form">
                    <h2 className="login-title">Login</h2>
                    <label htmlFor="username" className="login-label">Username:</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="login-input"
                    />
                    <label htmlFor="password" className="login-label">Password:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="login-input"
                    />
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;