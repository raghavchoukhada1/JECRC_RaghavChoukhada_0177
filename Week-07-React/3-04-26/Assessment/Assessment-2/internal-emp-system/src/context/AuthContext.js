import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

// ✅ predefined users
const users = [
  { username: "admin", password: "123", role: "admin" },
  { username: "raghav", password: "123", role: "employee" }
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  // ✅ UPDATED LOGIN
  const login = (username, password) => {

    const foundUser = users.find(
      u => u.username === username && u.password === password
    );

    if (!foundUser) {
      return { success: false, message: "Invalid credentials" };
    }

    const userData = {
      username: foundUser.username,
      role: foundUser.role
    };

    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);

    return { success: true, role: foundUser.role };
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};