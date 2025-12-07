import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectAPI } from "../../services/api";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await projectAPI.getAll();
      setProjects(response.data.data);
    } catch (error) {
      console.error("Error loading projects", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center py-5">Loading...</div>;

  return (
    <section className="py-5 premium-light-bg">
      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-5"
        >
          <h2 className="fw-bold display-6">Featured Projects</h2>
          <p className="text-secondary">Some of my best work</p>
        </motion.div>

        <div className="row g-4">
          {projects.slice(0, 6).map((p, index) => (
            <motion.div
              key={p.id}
              className="col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="premium-project-card rounded-4 shadow-sm overflow-hidden">
                <img
                  src={`http://localhost:8000/storage/${p.image}`}
                  className="w-100 project-img"
                  alt={p.title}
                />

                <div className="p-4">
                  <h4 className="fw-bold">{p.title}</h4>
                  <p className="text-secondary small">{p.description}</p>

                  {/* Technologies */}
                  <div className="d-flex flex-wrap gap-2 my-3">
                    {p.technologies.split(",").map((tech, i) => (
                      <span key={i} className="badge bg-primary-subtle text-primary fw-semibold">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="d-flex gap-3 mt-3">
                    {p.github_link && (
                      <a
                        href={p.github_link}
                        target="_blank"
                        className="text-dark small d-flex align-items-center gap-1"
                      >
                        <FaGithub /> Code
                      </a>
                    )}

                    {p.live_link && (
                      <a
                        href={p.live_link}
                        target="_blank"
                        className="text-primary small d-flex align-items-center gap-1"
                      >
                        <FaExternalLinkAlt /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
