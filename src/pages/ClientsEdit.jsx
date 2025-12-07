import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../utils/axios";

export default function ClientsEdit() {
  const { id } = useParams(); // get ID from URL
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  // Fetch old data when page opens
  useEffect(() => {
    axios
      .get(`/admin/clients/${id}`)
      .then((res) => {
        setForm(res.data.data); // backend returns data
      })
      .catch(() => setMessage("Failed to load client data."));
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setErrors({});

    axios
      .put(`/admin/clients/${id}`, form)
      .then(() => {
        navigate("/clients"); // back to clients list
      })
      .catch((err) => {
        if (err.response?.data?.errors) {
          setErrors(err.response.data.errors);
        } else {
          setMessage("Update failed!");
        }
      });
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-body">
          <h3 className="mb-4">Edit Client</h3>

          {message && <div className="alert alert-danger">{message}</div>}

          <form onSubmit={handleSubmit}>

            {/* Name */}
            <div className="mb-3">
              <label className="form-label">Client Name</label>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="form-control"
              />
              {errors.name && <small className="text-danger">{errors.name}</small>}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="form-control"
              />
              {errors.email && <small className="text-danger">{errors.email}</small>}
            </div>

            {/* Phone */}
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                name="phone"
                type="text"
                value={form.phone}
                onChange={handleChange}
                className="form-control"
              />
              {errors.phone && <small className="text-danger">{errors.phone}</small>}
            </div>

            {/* Company */}
            <div className="mb-3">
              <label className="form-label">Company</label>
              <input
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            {/* Notes */}
            <div className="mb-3">
              <label className="form-label">Notes</label>
              <textarea
                name="notes"
                rows="3"
                value={form.notes}
                onChange={handleChange}
                className="form-control"
              ></textarea>
            </div>

            {/* Buttons */}
            <button className="btn btn-primary" type="submit">
              Update Client
            </button>

            <button
              type="button"
              className="btn btn-secondary ms-2"
              onClick={() => navigate("/clients")}
            >
              Cancel
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
