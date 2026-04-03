import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { EmployeeProvider } from "./context/EmployeeContext";

import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import EmployeeDashboard from "./pages/EmployeeDashboard";
import NotAuthorized from "./pages/NotAuthorized";
import ProtectedRoute from "./components/ProtectedRoute";

/**
 * Root App
 */
function App() {
  return (
    <AuthProvider>
      <EmployeeProvider>
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Login />} />

            <Route
              path="/admin"
              element={
                <ProtectedRoute role="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/employee"
              element={
                <ProtectedRoute role="employee">
                  <EmployeeDashboard />
                </ProtectedRoute>
              }
            />

            <Route path="/not-authorized" element={<NotAuthorized />} />

          </Routes>
        </BrowserRouter>
      </EmployeeProvider>
    </AuthProvider>
  );
}

export default App;