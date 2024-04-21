import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);
export default function AuthProvider({ children }) {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("in28minutes");
  function login(username, password) {
    if (username == "yogesh" && password == "dummy") {
      setAuthenticated(true);
      setUsername(username);
      return true;
    } else {
      setUsername("");
      return false;
    }
  }

  function logout() {
    setAuthenticated(false);
  }
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setAuthenticated, login, logout, username }}
    >
      {children}
    </AuthContext.Provider>
  );
}
