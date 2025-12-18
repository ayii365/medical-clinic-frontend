import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form-sign-up.css"

export default function FormSignUp() {
    // Track form inputs in state
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); //Prevent default form submit (page reloading)

        // 1) checking if password === confirmPassword
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            // Sign up request to your server
            const signupResponse = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include", // Using sessions
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                    phoneNumber,
                }),
            });

            if (!signupResponse.ok) {
                // Something went wrong with signup
                const errorData = await signupResponse.json();
                alert(errorData.message || "Sign up failed");
                return;
            }

            // At this point user is registered
            // Next automatically log them in
            const loginResponse = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                credentials: "include",
                body: JSON.stringify({ email, password }),
            });

            if (!loginResponse.ok) {
                // Unable to login
                const errorData = await loginResponse.json();
                alert(errorData.message || "Login after signup failed. Please log in manually.");
                return;
            }

            // If the login was successful, navigate to My-Account Page
            navigate("/My-Account");

        } catch (err) {
            console.error("Error in sign-up flow:", err);
            alert("Something went wrong. Check console for details");
        }
    };

    return (
        <div className="entire-sign-up-container">
            <div className="sign-up-form-container">
                <h1>Sign Up</h1>

                <form className="sign-up-form" onSubmit={handleSubmit}>

                    <div className="signup-first-name-container">
                        <label>First Name:</label>
                        <input 
                            type="text" 
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div className="signup-last-name-container">
                        <label>Last Name:</label>
                        <input 
                            type="text" 
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>

                    <div className="create-email-container">
                        <label>Email Address:</label>
                        <input 
                            type="email" 
                            placeholder="Email Address"
                            value={email}
                            onChange = {(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="create-phone-number-container">
                        <label>Phone Number:</label>
                        <input 
                            type="text" 
                            placeholder="Phone Number"
                            value={phoneNumber}
                            onChange = {(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>

                    <div className="create-password-container">
                        <label>Password:</label>
                        <input 
                            type="password" 
                            placeholder="Password"
                            value={password}
                            onChange = {(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="confirm-password-container">
                        <label>Confirm Password:</label>
                        <input 
                            type="password" 
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange = {(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    
                    <input className="btn btn-call-to-action" type="submit" value="Sign Up"></input>
                </form>
            </div>
        </div>
    );
}