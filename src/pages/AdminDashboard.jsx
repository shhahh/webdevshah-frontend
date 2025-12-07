import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminDashboard() {
  const [user, setUser] = useState(null);
  const [apiMessage, setApiMessage] = useState("Loading from Laravel API...");

  useEffect(() => {
    //  1. Fetch current logged-in user details
    fetch("http://127.0.0.1:8000/user", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch(() => console.log("User not logged in"));

    //  2. Test public Laravel API (React ↔ Laravel connection)
    axios
      .get("http://127.0.0.1:8000/api/test")
      .then((response) => {
        console.log("Laravel API:", response.data);
        setApiMessage(response.data.message);
      })
      .catch((error) => {
        console.error("API Error:", error);
        setApiMessage("API Error ❌");
      });
  }, []);

  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>

      {/* ✅ Laravel API Test Message */}
      <div className="alert alert-info mt-3">
        {apiMessage}
      </div>

      {/* ✅ Logged-in User Details */}
      {user && (
        <div className="mt-3">
          <h5>Welcome, {user.name}</h5>
          <p>Email: {user.email}</p>
          <p>
            Role: <b>{user.role?.name}</b>
          </p>
        </div>
      )}

      {/* ✅ Navigation Buttons */}
      <div className="mt-4">
        <a href="/clients" className="btn btn-primary me-2">
          Manage Clients
        </a>
        <a href="/services" className="btn btn-success me-2">
          Manage Services
        </a>
        <a href="/projects" className="btn btn-warning">
          Manage Projects
        </a>
      </div>
    </div>
  );
}

export default AdminDashboard;
