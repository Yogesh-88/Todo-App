import { Login } from "./Login";
import Welcome from "./Welcome";
import Error from "./Error";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListTodos from "./ListTodos";
import Header from "./Header";
import Logout from "./Logout";
import AuthProvider from "./security/AuthContext";
import { TodoComponent } from "./TodoComponent";
export default function TodoApp() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/welcome" element={<Welcome />}></Route>
            <Route path="/todos" element={<ListTodos />}></Route>
            <Route path="/logout" element={<Logout />}></Route>
            <Route path="/todo/:id" element={<TodoComponent />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}
