import { useEffect, useState } from "react";
import axios from "../utils/axios";
import { Link, useNavigate } from "react-router-dom";

export default function ClientsPage() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const fetchClients = async () => {
        try {
          const res = await axios.get("/clients"); // ✅ correct API
          setClients(res.data); // ✅ correct response handling
        } catch (error) {
          console.error("Error fetching clients:", error);
        } finally {
          setLoading(false);
        }
      };


      const deleteClient = async (id) => {
      if (!window.confirm("Are you sure you want to delete this client?")) return;

      try {
        await axios.delete(`/clients/${id}`); 
        fetchClients(); 
      } catch (error) {
        console.error("Delete failed:", error);
      }
    };


  useEffect(() => {
    fetchClients();
  }, []);

  if (loading) return <p className="text-center mt-4">Loading...</p>;

  return (
    <div className="container mt-4">

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Clients</h2>
        <Link to="/clients/add" className="btn btn-primary">
          + Add Client
        </Link>
      </div>

      <div className="card shadow">
        <div className="card-body">

          <table className="table table-bordered table-striped">
            <thead className="table-light">
              <tr>
                <th style={{ width: "60px" }}>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th style={{ width: "200px" }}>Actions</th>
              </tr>
            </thead>

            <tbody>
              {clients.map((client) => (
                <tr key={client.id}>
                  <td>{client.id}</td>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => navigate(`/clients/edit/${client.id}`)}
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => deleteClient(client.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {clients.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center py-3">
                    No clients found.
                  </td>
                </tr>
              )}

            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}
