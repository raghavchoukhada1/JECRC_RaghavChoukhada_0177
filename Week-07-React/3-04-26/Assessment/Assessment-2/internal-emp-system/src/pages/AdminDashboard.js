import { useEmployees } from "../context/EmployeeContext";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

// ✅ CSS IMPORT
import "../styles/dashboard.css";

const AdminDashboard = () => {
  const { employees, addEmployee, updateEmployee, deleteEmployee } = useEmployees();

  const [form, setForm] = useState({ name: "", role: "employee" });
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {

    if (!form.name.trim()) {
      alert("Name required");
      return;
    }

    setLoading(true);

    setTimeout(() => {

      if (editing) {
        updateEmployee({ ...form, id: editing });
        setEditing(null);
      } else {
        addEmployee(form);
      }

      setForm({ name: "", role: "employee" });
      setLoading(false);

    }, 1000);
  };

  const handleEdit = (emp) => {
    setForm(emp);
    setEditing(emp.id);
  };

  const handleDelete = (id) => {
    deleteEmployee(id);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Admin Dashboard</h2>

        <input
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        {loading ? <Loader /> : (
          <button onClick={handleSubmit}>
            {editing ? "Update" : "Add"}
          </button>
        )}

        {employees.map(emp => (
          <div key={emp.id} className="employee-card">
            <span>{emp.name} ({emp.role})</span>

            <div className="employee-actions">
              <button onClick={() => handleEdit(emp)}>Edit</button>

              <button
                className="btn-danger"
                onClick={() => handleDelete(emp.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;