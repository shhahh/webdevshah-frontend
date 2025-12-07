import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaProjectDiagram, FaCogs, FaSignOutAlt } from "react-icons/fa";

const Admin = () => {
  return (
    <div className="d-flex">

      {/* SIDEBAR */}
      <aside
        className="bg-dark text-white p-3"
        style={{ width: "260px", minHeight: "100vh" }}
      >
        <h2 className="fw-bold text-center mb-4">Admin Panel</h2>

        <ul className="nav flex-column gap-2">

          <li className="nav-item">
            <Link to="/admin" className="nav-link text-white">
              <FaHome className="me-2" /> Dashboard
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/admin/projects" className="nav-link text-white">
              <FaProjectDiagram className="me-2" /> Projects
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/admin/settings" className="nav-link text-white">
              <FaCogs className="me-2" /> Settings
            </Link>
          </li>

          <li className="nav-item mt-4 pt-2 border-top">
            <Link to="/logout" className="nav-link text-danger fw-semibold">
              <FaSignOutAlt className="me-2" /> Logout
            </Link>
          </li>

        </ul>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-grow-1 p-4">
        <h1 className="fw-bold mb-4">Welcome to Admin Dashboard</h1>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="p-4 bg-white shadow-sm rounded-4">
              <h4 className="fw-bold">Total Projects</h4>
              <p className="text-secondary fs-5">12</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 bg-white shadow-sm rounded-4">
              <h4 className="fw-bold">Messages</h4>
              <p className="text-secondary fs-5">8</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="p-4 bg-white shadow-sm rounded-4">
              <h4 className="fw-bold">Skills Added</h4>
              <p className="text-secondary fs-5">6</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
