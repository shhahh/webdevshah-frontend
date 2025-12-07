import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    // CSRF Cookie fetch (VERY IMPORTANT)
    await fetch("http://127.0.0.1:8000/sanctum/csrf-cookie", {
      credentials: "include",
    });

    try {
      const response = await fetch("http://127.0.0.1:8000/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid credentials");
        return;
      }

      // Fetch logged in user
      const userRes = await fetch("http://127.0.0.1:8000/user", {
        credentials: "include",
      });

      const user = await userRes.json();

      if (user.role?.name === "Admin") {
        window.location.href = "/admin-dashboard";
      } else {
        window.location.href = "/client-dashboard";
      }
    } catch (err) {
      setError("Something went wrong!");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h3 className="text-center mb-4">Login</h3>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" required value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" required value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
}

export default Login;
