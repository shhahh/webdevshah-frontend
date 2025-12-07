import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { projectAPI } from "../services/api";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  const categories = ["all", "React", "Laravel", "Vue.js", "Node.js", "WordPress"];

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    filterProjects();
  }, [activeFilter, projects]);

  const fetchProjects = async () => {
    try {
      const res = await projectAPI.getAll();
      setProjects(res.data.data);
      setFilteredProjects(res.data.data);
    } catch (err) {
      console.error("Error fetching projects", err);
    } finally {
      setLoading(false);
    }
  };

  const filterProjects = () => {
    if (activeFilter === "all") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.technologies.toLowerCase().includes(activeFilter.toLowerCase())
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <section className="py-5 premium-bg min-vh-100">
      <div className="container">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-5"
        >
          <h1 className="fw-bold display-5 mb-3">My Portfolio</h1>
          <p className="text-secondary fs-5">
            Explore my best projects—built with clean design & modern tech.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`btn px-4 py-2 rounded-pill fw-semibold ${
                activeFilter === cat
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="text-center py-5 fs-4">Loading projects...</div>
        ) : (
          <motion.div layout className="row g-4">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="col-md-6 col-lg-4"
              >
                <div className="premium-project-card rounded-4 shadow overflow-hidden position-relative">

                  {/* Project Image */}
                  <img
                    src={`http://localhost:8000/storage/${project.image}`}
                    alt={project.title}
                    className="w-100"
                    style={{ height: "260px", objectFit: "cover" }}
                  />

                  {/* Overlay Hover */}
                  <div className="portfolio-overlay d-flex flex-column justify-content-end p-4">
                    <h3 className="text-white fw-bold fs-4">{project.title}</h3>
                    <p className="text-light small">{project.description}</p>

                    <div className="d-flex gap-3 mt-3">
                      {project.github_link && (
                        <a
                          href={project.github_link}
                          target="_blank"
                          className="btn btn-light btn-sm fw-semibold"
                        >
                          GitHub
                        </a>
                      )}

                      {project.live_link && (
                        <a
                          href={project.live_link}
                          target="_blank"
                          className="btn btn-primary btn-sm fw-semibold"
                        >
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Portfolio;
