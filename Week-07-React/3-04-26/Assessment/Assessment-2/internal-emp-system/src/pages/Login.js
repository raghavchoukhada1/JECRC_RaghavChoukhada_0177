import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); // ✅ added

  const handleLogin = () => {

    if (!username.trim() || !password.trim()) {
      alert("Username & Password required");
      return;
    }

    const res = login(username, password);

    if (!res.success) {
      alert(res.message);
      return;
    }

    if (res.role === "admin") navigate("/admin");
    else navigate("/employee");
  };

  return (
    <div className="container">
      <h2>Login</h2>

      <input
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;