import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../utils/axios";

export default function ClientsAdd() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [notes, setNotes] = useState("");

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  // Simple validation
  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = "Client name is required";
    if (!email.trim()) e.email = "Email is required";
    if (!phone.trim()) e.phone = "Phone is required";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    try {
      const res = await axios.post("/admin/clients", {
        name,
        email,
        phone,
        company,
        notes,
      });

      if (res.status === 201 || res.status === 200) {
        navigate("/clients"); // go back to list
      }
    } catch (err) {
      if (err.response?.data?.errors) {
        setErrors(err.response.data.errors);
      } else {
        setMessage("Something went wrong, please try again!");
      }
    }
  };

  return (
    <div className="container mt-4">

      <div className="card shadow">
        <div className="card-body">

          <h3 className="mb-4">Add New Client</h3>

          {message && (
            <div className="alert alert-danger">{message}</div>
          )}

          <form onSubmit={handleSubmit}>

            {/* Name */}
            <div className="mb-3">
              <label className="form-label">Client Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <small className="text-danger">{errors.name}</small>}
            </div>

            {/* Email */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="client@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <small className="text-danger">{errors.email}</small>}
            </div>

            {/* Phone */}
            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                placeholder="9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && <small className="text-danger">{errors.phone}</small>}
            </div>

            {/* Company */}
            <div className="mb-3">
              <label className="form-label">Company (optional)</label>
              <input
                type="text"
                className="form-control"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>

            {/* Notes */}
            <div className="mb-3">
              <label className="form-label">Notes (optional)</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Any notes about client..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              ></textarea>
            </div>

            {/* Submit + Cancel */}
            <button className="btn btn-primary" type="submit">
              Save Client
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
