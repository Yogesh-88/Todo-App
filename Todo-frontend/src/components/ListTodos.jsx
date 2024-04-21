import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "./security/AuthContext";
import { useNavigate } from "react-router-dom";
export default function ListTodos() {
  const [todos, setTodos] = useState([]);

  const authContext = useAuth();

  const username = authContext.username;

  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/users/${username}/todos`)
      .then((response) => setTodos(response.data))
      .catch((error) => console.error("Error fetching todos:", error));
  }, [todos]);

  return (
    <div className="container">
      <h1 className="text-center">Things You Want To Do!</h1>
      <table className="table table-hover mt-5 container">
        <thead>
          <tr>
            <th>Description</th>
            <th>Is Done?</th>
            <th>Target Date</th>
            <th>Delete</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.id}>
              <td>{todo.description}</td>
              <td>{todo.done ? "Yes" : "No"}</td>
              <td>{todo.targetDate}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    axios.delete(
                      `http://localhost:8080/users/${username}/todos/${todo.id}`
                    );
                  }}
                >
                  Delete
                </button>
              </td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => {
                    navigate(`/todo/${todo.id}`);
                  }}
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-success"
          onClick={() => {
            navigate("/todo/-1");
          }}
        >
          Add new Todo
        </button>
      </div>
    </div>
  );
}
