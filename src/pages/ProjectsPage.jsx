import { useEffect, useState } from "react";
import axios from "../utils/axios";
import { Link } from "react-router-dom";

export default function ProjectsPage() {
  // ⭐ 1) React state — Projects ko store karne ke liye
  const [projects, setProjects] = useState([]);

  // ⭐ 2) Loading state — Jab tak API call hoti hai, tab tak loading show hogi
  const [loading, setLoading] = useState(true);

  // ⭐ 3) Backend se saare projects fetch karne ka function
  const fetchProjects = async () => {
    try {
      const res = await axios.get("/admin/projects"); // Backend API
      setProjects(res.data.data); // Projects ko state me store kar diya
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false); // API ke baad loading off
    }
  };

  // ⭐ 4) Delete Project Function
  const deleteProject = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;

    try {
      await axios.delete(`/admin/projects/${id}`); // Backend delete api
      fetchProjects(); // Delete hone ke baad list refresh
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  // ⭐ 5) Component load hote hi projects fetch karega
  useEffect(() => {
    fetchProjects();
  }, []);

  // ⭐ 6) Loading message jab backend se data aa raha ho
  if (loading) return <p className="p-5">Loading...</p>;

  // ⭐ 7) UI Start — Table + Buttons
  return (
    <div className="p-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Projects</h1>

        {/* Add Project Button */}
        <Link
          to="/projects/add"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Project
        </Link>
      </div>

      {/* Projects Table */}
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Client</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>

        <tbody>
          {projects.map((p) => (
            <tr key={p.id}>
              <td className="p-2 border">{p.id}</td>
              <td className="p-2 border">{p.name}</td>
              <td className="p-2 border">{p.client?.name ?? "N/A"}</td>
              <td className="p-2 border">{p.status}</td>

              {/* Edit + Delete Buttons */}
              <td className="p-2 border">
                <Link
                  to={`/projects/edit/${p.id}`}
                  className="bg-green-600 text-white px-3 py-1 rounded mr-2"
                >
                  Edit
                </Link>

                <button
                  onClick={() => deleteProject(p.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
