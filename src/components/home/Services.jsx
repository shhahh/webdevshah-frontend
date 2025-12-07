import React from "react";

const Services = () => {
  const serviceList = [
    "Web Development",
    "API Development",
    "UI/UX Design",
    "SEO Optimization",
  ];

  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="fw-bold display-6 mb-3">Services</h2>
        <p className="text-secondary mb-5">What I can do for your business</p>

        <div className="row g-4">
          {serviceList.map((title, i) => (
            <div className="col-md-6 col-lg-3" key={i}>
              <div className="premium-service-card p-4 rounded-4 shadow-sm">
                <h4 className="fw-bold">{title}</h4>
                <p className="text-secondary small">
                  High-quality service with a professional touch.
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
