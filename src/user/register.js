import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

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
        <div>

            {error && <p>Error: {error}</p>}    
            <Link to="/Login">Login</Link>

            <h2>Register</h2>

            <form id="register" onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input
                    id="username"
                    type="text"
                    placeholder="Username"
                    value={username}
                    name="username"
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label htmlFor="email">Email: </label>
                <input
                    id="email"
                    type="Email"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password">Password: </label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Register</button>
            </form>
    
        </div>
    )
}

export default Register;