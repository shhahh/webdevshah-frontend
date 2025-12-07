import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const location = useLocation();

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed-top py-2">
      <div className="container">

        <nav className="navbar navbar-expand-lg premium-glass rounded-pill px-4 shadow-sm">

          {/* LOGO */}
          <Link className="navbar-brand fs-3 fw-bold premium-gradient-text" to="/">
            WebDevShah
          </Link>

          {/* TOGGLER BUTTON */}
          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* NAV LINKS */}
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <ul className="navbar-nav align-items-center gap-3">

              {navLinks.map((link) => (
                <li className="nav-item" key={link.path}>
                  <Link
                    to={link.path}
                    className={`nav-link fw-semibold premium-link ${
                      location.pathname === link.path ? "text-primary" : "text-secondary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {/* Admin Button */}
              <li className="nav-item ms-3">
                <Link to="/admin" className="btn btn-primary px-4 py-2 fw-semibold">
                  Admin
                </Link>
              </li>

            </ul>
          </div>
        </nav>

      </div>
    </header>
  );
};

export default Header;
