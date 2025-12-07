import React from "react";

const Testimonials = () => {
  const reviews = [
    "Working with Shah was an amazing experience! Highly recommended.",
    "Great communication and excellent work quality!",
    "Super fast delivery and professional attitude."
  ];

  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="fw-bold display-6 mb-4">Testimonials</h2>
        <p className="text-secondary mb-5">What clients say about my work</p>

        <div className="row g-4">
          {reviews.map((text, i) => (
            <div key={i} className="col-md-4">
              <div className="premium-project-card p-4 rounded-4 shadow-sm">
                <p className="text-secondary small">"{text}"</p>
                <h6 className="fw-bold mt-3">Client {i + 1}</h6>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
