import React, { useState, useEffect } from "react";
import "./account-details.css";

export default function AccountDetails({ user }) {
  // Each field tracked in state
  const [firstName, setFirstName] = useState(user?.first_name || "");
  const [lastName, setLastName] = useState(user?.last_name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phoneNumber, setPhoneNumber] = useState(user?.phone_number || "");

  // Fields for password update
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  // If user might change from outside props, can also watch for changes in user
  useEffect( () => {
    if (user) {
      setFirstName(user.first_name || "");
      setLastName(user.last_name || "");
      setEmail(user.email || "");
      setPhoneNumber(user.phone_number || "");
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword && newPassword !== confirmNewPassword) {
      alert("New password and confirm password do not match.");
      return;
    }

    try {
      // Make a PUT or POST request to /api/account
      const response = await fetch("/api/account", {
        method: "PUT",
        headers: { "Content-Type": "application/json"},
        credentials: "include",
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phoneNumber,
          newPassword // Only confirm if user typed something
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || "Update failed");
        return;
      }

      // On success
      alert("Details updated successfully!");

      // Clear password fields after success
      setNewPassword("");
      setConfirmNewPassword("");

    } catch (err) {
      console.error("Update error:", err);
      alert(" Something went wrong, please try again later.");
    }
  };
  
  return (
    <div className="account-details-container">
      <div className="header-container">
        <h2>Account Details</h2>
      </div>

      <form className="user-details-container" onSubmit={handleSubmit}>
        <div className="user-details">
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className="user-details">
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="user-details">
          <label>Email:</label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="user-details">
          <label>Phone Number:</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>

        <div>
          <label>New Password:</label>
          <input
            placeholder="********"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm New Password:</label>
          <input
            placeholder="********"
            type="password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
          />
        </div>

        <div className="submit-btn-container">
          <button type="submit">Update Details</button>
        </div>
      </form>
    </div>
  );
}