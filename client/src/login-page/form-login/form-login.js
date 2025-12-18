import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import "./form-login.css"

import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function FormLogin() {    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default page reload from submit

        try {
            // 1) Make a POST request to your /api/auth/login endpoint
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include", // This will allow session cookies
                body: JSON.stringify({ email, password }),
            });

            // 2) check if login was successful
            if (response.ok) {
                // Get the returned user info (based on new backend response)
                const data = await response.json();
                login(data.user); // <---- Set user in AuthContext/localStorage
                navigate("/My-Account");
            } else {
                // Handle error response
                const errorData = await response.json();
                console.error("Login error:", errorData);
                alert(errorData.message || "Login failed");
            }
        } catch (err) {
            console.error("Fetch error:", err);
            alert("Something went wrong (check the console)");
        }
    };

    return (
        <div className="entire-login-container">
            <div className="login-form-container">
                <h1>Login</h1>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="username-container">
                        <label>Email Address:</label>
                        <input 
                            type="text" 
                            name="email" 
                            placeholder="Email Address" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="password-container">
                        <label>Password:</label>
                        <input 
                            type="password" // Updated from text to password, for security 
                            name="password" 
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    
                    <input 
                        className="btn btn-call-to-action" 
                        type="submit" 
                        value="Login"
                    />
                </form>
            </div>
        </div>
    );
}
