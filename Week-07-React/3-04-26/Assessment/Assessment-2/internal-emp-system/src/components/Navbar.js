import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

// ✅ CSS IMPORT
import "../styles/navbar.css";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const goToDashboard = () => {
    if (user.role === "admin") navigate("/admin");
    else navigate("/employee");
  };

  return (
    <div className="navbar">
      <h3 onClick={goToDashboard}>
        Employee Portal
      </h3>

      <div>
        <span>{user?.username} ({user?.role})</span>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;