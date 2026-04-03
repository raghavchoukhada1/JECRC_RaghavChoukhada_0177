import { useAuth } from "../context/AuthContext";
import { useEmployees } from "../context/EmployeeContext";
import Navbar from "../components/Navbar";

const EmployeeDashboard = () => {
  const { user } = useAuth();
  const { employees } = useEmployees();

  const currentUser = employees.find(
    e => e.name.toLowerCase() === user.username.toLowerCase()
  );

  return (
    <div>
      <Navbar />

      <div className="container">
        <h2>Employee Dashboard</h2>

        {currentUser ? (
          <p><strong>Name:</strong> {currentUser.name}</p>
        ) : (
          <p>No data found</p>
        )}
      </div>
    </div>
  );
};

export default EmployeeDashboard;