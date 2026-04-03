import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/**
 * ProtectedRoute
 * - check karta hai user logged-in hai ya nahi
 * - role-based access control deta hai
 */
const ProtectedRoute = ({ children, role }) => {

  // current user access
  const { user } = useAuth();

  /**
   * agar user login nahi hai → login page pe bhejo
   */
  if (!user) {
    return <Navigate to="/" />;
  }

  /**
   * agar role match nahi karta → access deny
   */
  if (role && user.role !== role) {
    return <Navigate to="/not-authorized" />;
  }

  /**
   * sab sahi hai → component render karo
   */
  return children;
};

export default ProtectedRoute;