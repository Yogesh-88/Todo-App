import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const authContext = useAuth();

  function handleClick() {
    if (authContext.login(username, password)) {
      navigate(`/welcome`);
    }
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "500px" }}
    >
      <div className="border p-5 rounded shadow-lg">
        <h1 className="text-center mb-5">Login</h1>
        <div className="mb-4">
          <label className="form-label" htmlFor="username">
            Email
          </label>
          <input
            className="form-control"
            id="username"
            type="text"
            placeholder="Enter User name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            className="form-control"
            id="password"
            type="password"
            placeholder="****************"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <button
            className="btn btn-primary w-100"
            type="button"
            onClick={handleClick}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
