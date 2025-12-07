import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ⭐ YOUR COMPONENTS IMPORT

import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import ClientsPage from "./pages/ClientsPage";
import ClientsAdd from "./pages/ClientsAdd";
import ClientsEdit from "./pages/ClientsEdit";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import WebDevShahPremium from "./pages/WebDevShahPremium";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/clients/add" element={<ClientsAdd />} />
        <Route path="/clients/edit/:id" element={<ClientsEdit />} />
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/premium" element={<WebDevShahPremium />} />



      </Routes>
    </Router>
  );
}

export default App;
