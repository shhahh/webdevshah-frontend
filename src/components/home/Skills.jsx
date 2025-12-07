import React from "react";

const Skills = () => {
  const skills = ["React", "Laravel", "Bootstrap", "MySQL", "Node.js", "Git"];

  return (
    <section className="py-5 premium-light-bg">
      <div className="container text-center">
        <h2 className="fw-bold display-6 mb-3">Skills</h2>
        <p className="text-secondary mb-5">Technologies I work with</p>

        <div className="row g-4">
          {skills.map((skill, i) => (
            <div key={i} className="col-6 col-md-4 col-lg-2">
              <div className="premium-mini-card p-3 rounded-4 shadow-sm fw-semibold">
                {skill}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
