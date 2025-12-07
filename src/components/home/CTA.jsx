import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-5 premium-bg text-center">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="p-5 rounded-4 shadow premium-glass"
        >
          <h2 className="fw-bold display-6 mb-3">
            Ready to start your next project?
          </h2>

          <p className="text-secondary mb-4 fs-5">
            Let’s build something modern, fast, and professional together.
          </p>

          <div className="d-flex justify-content-center gap-3">
            <Link
              to="/contact"
              className="btn btn-primary btn-lg px-4 fw-semibold"
            >
              Contact Me
            </Link>

            <Link
              to="/portfolio"
              className="btn btn-outline-primary btn-lg px-4 fw-semibold"
            >
              View Portfolio
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
