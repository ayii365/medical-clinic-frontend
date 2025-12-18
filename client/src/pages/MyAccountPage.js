import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AccountDetails from "../my-account-page/account-details/account-details";
import ViewAppointments from "../my-account-page/view-appointments/view-appointments";
import { AuthContext } from "../context/AuthContext";
import "./MyAccountPage.css";

export default function MyAccountPage() {
    const { user, setUser, logout } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [selectedTab, setSelectedTab] = useState("details"); 
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchAccount() {
            try {
                const res = await fetch("/api/account", { credentials: "include" });
                if (res.ok) {
                    const data = await res.json();
                    setUser(data.user);
                    localStorage.setItem('user', JSON.stringify(data.user));
                } else {
                    setUser(null);
                    localStorage.removeItem('user');
                }
            } catch (err) {
                setUser(null);
                localStorage.removeItem('user');
            } finally {
                setLoading(false); // <-- add this line!
            }
        }
        fetchAccount();
    }, [setUser]);


    const handleSignOut = async () => {
        try {
          await fetch("/api/auth/logout", { method: "POST", credentials: "include" });
          logout(); // This clears both AuthContext and localStorage
          navigate("/Account");
        } catch (err) {
          console.error("Logout error:", err);
        }
      };

    if (loading) return <p>Loading...</p>;
    if (!user) return <p>User not logged in.</p>;

    return (
        <div className="my-account-container">
            {/* LEFT NAV / SIDEBAR */}
            <div className="my-account-sidebar">
                <div className="my-account-sidebar-btns">
                    <button
                        className={`nav-button ${selectedTab === "details" ? "active" : ""}`}
                        onClick={() => setSelectedTab("details")}
                        >
                        Account Details
                    </button>

                    <button
                        className={`nav-button ${selectedTab === "appointments" ? "active" : ""}`}
                        onClick={() => setSelectedTab("appointments")}
                        >
                        View Appointments
                    </button>

                    <button className="nav-button signout" onClick={handleSignOut}>
                        Sign Out
                    </button>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="my-account-content">
            {selectedTab === "details" && <AccountDetails user={user} />}
            {selectedTab === "appointments" && <ViewAppointments user={user} />}
        </div>
        </div>
    );
}