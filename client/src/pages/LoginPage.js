import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import FormLogin from '../login-page/form-login/form-login.js'
import FormSignUp from '../login-page/form-sign-up/form-sign-up.js'
import { AuthContext } from "../context/AuthContext";

export default function LoginPage() {
    const navigate = useNavigate();
    const { logout } = useContext(AuthContext);

    useEffect(() => {
        // Always clear the local user (frontend) when opening the login/signup page
        logout();

        // Optionally, check if user is already logged in on the backend
        const checkIfLoggedIn = async () => {
            try {
                const res = await fetch("/api/account", { credentials: "include" });
                if (res.ok) {
                    // User is currently logged in - auto redirect
                    navigate("/My-Account");
                }
            } catch (error) {
                console.error("Error checking logged in status:", error);
            }
        };

        checkIfLoggedIn();
    }, [logout, navigate]); // Add 'logout' to dependency array for best practice

    return(
        <>
            <FormLogin />
            <FormSignUp />
        </>
    );
}