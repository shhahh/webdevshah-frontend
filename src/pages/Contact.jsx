import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-5 premium-bg">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mx-auto"
          style={{ maxWidth: "700px" }}
        >
          <h1 className="fw-bold display-5 mb-3">Contact Me</h1>

          <p className="text-secondary fs-5 mb-4">
            Feel free to contact me anytime. I’ll reply as soon as possible.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto bg-white premium-form shadow p-5 rounded-4"
          style={{ maxWidth: "600px" }}
        >
          <div className="mb-3">
            <input
              type="text"
              placeholder="Your Name"
              className="form-control py-3 rounded-3"
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              placeholder="Your Email"
              className="form-control py-3 rounded-3"
            />
          </div>

          <div className="mb-3">
            <textarea
              placeholder="Message"
              rows="5"
              className="form-control py-3 rounded-3"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 py-3 fw-semibold"
          >
            Send Message
          </button>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;
