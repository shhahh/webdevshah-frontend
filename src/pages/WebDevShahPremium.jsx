import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WebDevShahPremium.css"; // custom premium styles

// PREMIUM BOOTSTRAP + CUSTOM CSS VERSION
export default function WebDevShahPremium() {
  return (
    <div className="min-vh-100 bg-light text-dark premium-bg">
      <Header />
      <main className="mt-5 pt-5">
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------------------------- HEADER --------------------------------- */
function Header() {
  return (
    <header className="fixed-top py-2">
      <div className="container">

        <nav className="navbar navbar-expand-lg premium-glass rounded-pill px-4 shadow-sm">
          <a className="navbar-brand fs-3 fw-bold premium-gradient-text" href="#">
            WebDevShah
          </a>

          <button
            className="navbar-toggler shadow-none border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarPremium"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarPremium">
            <ul className="navbar-nav align-items-center gap-3">

              <li className="nav-item">
                <a className="nav-link premium-link fw-semibold" href="#home">Home</a>
             </li>

              <li className="nav-item">
                <a className="nav-link premium-link fw-semibold" href="#services">
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link premium-link fw-semibold" href="#projects">
                  Projects
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link premium-link fw-semibold" href="#contact">
                  Contact
                </a>
              </li>

              <li className="nav-item ms-3">
                <a href="/admin" className="btn btn-primary px-4 py-2 fw-semibold">
                  Admin
                </a>
              </li>

            </ul>
          </div>
        </nav>

      </div>
    </header>
  );
}

/* ------------------------------ HERO ------------------------------ */
function Hero() {
  return (
    <section id="home" className="py-5 mt-4">
      <div className="container">
        <div className="row align-items-center g-5">
          <motion.div className="col-lg-6" initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="display-4 fw-bold">
              Building modern products that
              <span className="premium-gradient-text"> scale & delight</span>
            </h1>
            <p className="mt-3 fs-5 text-secondary">
              I'm Shah — Full Stack Developer. I craft stunning web experiences
              using Laravel, React and modern UI systems.
            </p>

            <div className="mt-4 d-flex gap-3">
              <a href="#projects" className="btn btn-primary btn-lg">See Work</a>
              <a href="#contact" className="btn btn-outline-primary btn-lg">Hire Me</a>
            </div>

            <div className="d-flex gap-4 mt-4">
              <SmallStat label="Years" value="5+" />
              <SmallStat label="Projects" value="40+" />
              <SmallStat label="Clients" value="20+" />
            </div>
          </motion.div>

          <motion.div className="col-lg-6 position-relative" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="premium-glow"></div>
            <div className="bg-white shadow premium-card p-3 rounded-4 position-relative">
              <img src="/ss1.png" alt="hero" className="img-fluid rounded-4" />

              <div className="row g-3 mt-2">
                <CardMini title="UI/UX" subtitle="Design Systems" />
                <CardMini title="Frontend" subtitle="React + Bootstrap" />
                <CardMini title="Backend" subtitle="Laravel APIs" />
                <CardMini title="Deploy" subtitle="Docker + CI" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SmallStat({ label, value }) {
  return (
    <div className="premium-stat text-center p-3 rounded-3 shadow-sm">
      <h3 className="fw-bold">{value}</h3>
      <div className="text-secondary small">{label}</div>
    </div>
  );
}

function CardMini({ title, subtitle }) {
  return (
    <div className="col-6">
      <div className="premium-mini-card p-3 rounded-3 shadow-sm">
        <div className="fw-semibold">{title}</div>
        <div className="small text-secondary">{subtitle}</div>
      </div>
    </div>
  );
}

/* ------------------------------ SERVICES ------------------------------ */
function Services() {
  const items = [
    { title: "Modern Web Apps", desc: "React + Bootstrap + Motion" },
    { title: "APIs & Backend", desc: "Laravel, Sanctum, Clean APIs" },
    { title: "Design Systems", desc: "Reusable UI Components" },
    { title: "Performance", desc: "Optimized Lighthouse scores" },
  ];

  return (
    <section id="services" className="py-5">
      <div className="container text-center">
        <h3 className="text-primary fw-semibold">What I do</h3>
        <h2 className="fw-bold display-6">Services</h2>
        <p className="text-secondary mt-2 mx-auto w-75">
          End-to-end product development — design, build, and deploy.
        </p>

        <div className="row mt-5 g-4">
          {items.map((it, i) => (
            <motion.div key={i} className="col-md-6 col-lg-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <div className="premium-service-card p-4 rounded-4 shadow-sm">
                <h4 className="fw-bold">{it.title}</h4>
                <p className="text-secondary small">{it.desc}</p>
                <a href="#contact" className="text-primary fw-semibold small">Start Project</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ PROJECTS ------------------------------ */
function Projects() {
  const projects = [
    { id: 1, title: "Modern Website", description: "Premium website design", image: "/projects/project1.png", technologies: "React, Bootstrap" },
    { id: 2, title: "Ecommerce Store", description: "Online store", image: "/projects/project2.png", technologies: "Laravel, MySQL" },
    { id: 3, title: "Admin Dashboard", description: "Analytics dashboard", image: "/projects/project3.png", technologies: "React, ChartJS" },
    { id: 4, title: "Portfolio Website", description: "Personal brand", image: "/projects/project4.png", technologies: "React, Bootstrap" },
    { id: 5, title: "Landing Page", description: "High-converting design", image: "/projects/project5.png", technologies: "NextJS" },
    { id: 6, title: "Blog Platform", description: "SEO optimized CMS", image: "/projects/project6.png", technologies: "Laravel, Vue" },
  ];

  return (
    <section id="projects" className="py-5 premium-light-bg">
      <div className="container text-center">
        <h3 className="text-primary fw-semibold">Portfolio</h3>
        <h2 className="fw-bold display-6">Featured Projects</h2>
        <p className="text-secondary mt-2 mx-auto w-75">Selected works with case studies.</p>

        <div className="row mt-5 g-4">
          {projects.map((p) => (
            <motion.div key={p.id} className="col-md-6 col-lg-4" whileHover={{ scale: 1.02 }}>
              <div className="premium-project-card rounded-4 shadow-sm overflow-hidden">
                <img src={p.image} className="img-fluid project-img" alt={p.title} />
                <div className="p-4 text-start">
                  <h4 className="fw-bold">{p.title}</h4>
                  <p className="small text-secondary">{p.description}</p>
                  <div className="d-flex justify-content-between small mt-2">
                    <span className="text-secondary">{p.technologies}</span>
                    <span className="text-primary fw-semibold">View →</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ CONTACT ------------------------------ */
function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-md-6">
            <h3 className="text-primary fw-semibold">Get in touch</h3>
            <h2 className="fw-bold display-6">Let's build something great.</h2>
            <p className="text-secondary mt-3">I take limited projects to keep quality high.</p>
          </div>

          <motion.form
            className="col-md-6 premium-form p-4 rounded-4 shadow-sm bg-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => {
              e.preventDefault();
              // handle submit: call API or show toast
              alert('Message sent (demo).');
            }}
          >
            <div className="mb-3">
              <input type="text" className="form-control" placeholder="Your name" aria-label="Your name" />
            </div>

            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Your email" aria-label="Your email" />
            </div>

            <div className="mb-3">
              <textarea className="form-control" rows="4" placeholder="Project details" aria-label="Project details"></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100 py-2 fw-semibold">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ FOOTER ------------------------------ */
function Footer() {
  return (
    <footer className="py-4 mt-5 premium-footer-bg text-center text-secondary small">
      © {new Date().getFullYear()} WebDevShah — Crafted with ❤️
    </footer>
  );
}
