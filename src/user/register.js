import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

function Register(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("username", username);
        formData.append("email", email);
        formData.append("password", password);

        fetch("http://127.0.0.1:8000/user/register",{
            method: 'POST',
            body: formData
        })
        .then(response => {
            if(!response.ok){
                throw new Error("Error to get the response")
            }
            return response.json();
        })
        .then(data => {
            alert("User created successfully!")
            navigate("/Register")
        })
        .catch(error => {
            setEmail(error.message)
        });
    };
    
    return (
        <div className="register-page">
            <nav className="navbar">
                <h1 className="navbar-title">RESTAURANTE SC</h1>
                <Link to="/Login" className="navbar-link">Login</Link>
            </nav>
    
            <div className="register-container">
                {error && <p className="error-message">Error: {error}</p>}
    
                <form id="register" onSubmit={handleSubmit} className="register-form">
                    <h2 className="register-title">Register</h2>
                    <label htmlFor="username" className="register-label">Username:</label>
                    <input
                        type="text"
                        id="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="register-input"
                    />
                    <label htmlFor="email" className="register-label">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="register-input"
                    />
                    <label htmlFor="password" className="register-label">Password:</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="register-input"
                    />
                    <button type="submit" className="register-button">Register</button>
                </form>
            </div>
        </div>
    );
}

export default Register;