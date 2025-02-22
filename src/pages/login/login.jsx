

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { database, ref, get } from "../firebase/firebase"; // Import Firebase functions
import "./login.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // For navigation

    const handleLogin = async (event) => {
        event.preventDefault();

        if (!username || !password) {
            setError("Please enter both username and password.");
            return;
        }

        try {
            // Fetch user data from Firebase
            const usersRef = ref(database, "users");
            const snapshot = await get(usersRef);

            if (snapshot.exists()) {
                const users = snapshot.val(); // Retrieve all registered users
                let userFound = false;

                // Loop through users and check if credentials match
                Object.values(users).forEach(user => {
                    if (user.username === username && user.password === password) {
                        userFound = true;
                    }
                });

                if (userFound) {
                    alert("Login successful! Redirecting to the Product page...");
                    navigate("../products");
                } else {
                    setError("Invalid username or password. Please try again.");
                }
            } else {
                setError("No registered users found.");
            }
        } catch (error) {
            console.error("Error fetching users:", error);
            setError("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-wrapper">
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <div className="input-box">
                        <input 
                            type="text" 
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-box">
                        <input 
                            type="password" 
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="error-message">{error}</p>} {/* Show error message */}
                    
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" /> Remember Me
                        </label>
                        <a href="/#">Forgot Password</a>
                    </div>
                    
                    <button type="submit">Login</button>

                    <div className="register-link">
                        <p>Don't have an account? <a href="/register">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;


