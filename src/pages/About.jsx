import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-5 premium-bg">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mx-auto"
          style={{ maxWidth: "700px" }}
        >
          <h1 className="fw-bold display-5 mb-4">About Me</h1>

          <p className="fs-5 text-secondary lh-base">
            I am <span className="fw-semibold text-primary">Shah</span>, a 
            Full Stack Web Developer specializing in{" "}
            <span className="fw-semibold">Laravel</span> and{" "}
            <span className="fw-semibold">React</span>.
            <br />
            I build modern, scalable, and beautiful web applications that focus
            on performance, design, and clean maintainable code.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
